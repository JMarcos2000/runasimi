-- =============================================================
-- PRO-20: Rediseño del schema para contenido multimedia
-- Migración aditiva — no elimina ni modifica columnas existentes
-- =============================================================

-- -------------------------------------------------------
-- 1. Ampliar tabla lessons con contenido quechua
-- -------------------------------------------------------
alter table public.lessons
  add column if not exists day_number integer,
  add column if not exists topic text,
  add column if not exists example_quechua text,
  add column if not exists example_translation text,
  add column if not exists phrase_of_day text;

-- -------------------------------------------------------
-- 2. Agregar onboarding_completed a profiles
-- -------------------------------------------------------
alter table public.profiles
  add column if not exists onboarding_completed boolean default false;

-- -------------------------------------------------------
-- 3. Tabla exercises (contenido variable via JSONB)
-- -------------------------------------------------------
create table if not exists public.exercises (
  id uuid default gen_random_uuid() primary key,
  lesson_id uuid references public.lessons(id) on delete cascade not null,
  type text not null check (type in ('choice', 'text_input', 'audio', 'video')),
  "order" integer not null default 0,
  content jsonb not null,
  created_at timestamp with time zone default now()
);

create index if not exists exercises_lesson_id_order_idx
  on public.exercises(lesson_id, "order");

alter table public.exercises enable row level security;

create policy "Ejercicios visibles para usuarios autenticados"
  on public.exercises for select
  using (auth.role() = 'authenticated');

create policy "Solo service_role puede insertar ejercicios"
  on public.exercises for insert
  with check (auth.role() = 'service_role');

create policy "Solo service_role puede actualizar ejercicios"
  on public.exercises for update
  using (auth.role() = 'service_role');

create policy "Solo service_role puede eliminar ejercicios"
  on public.exercises for delete
  using (auth.role() = 'service_role');

-- -------------------------------------------------------
-- 4. Tabla user_streak (racha diaria)
-- -------------------------------------------------------
create table if not exists public.user_streak (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null unique,
  current_streak integer not null default 0,
  longest_streak integer not null default 0,
  last_activity_date date,
  updated_at timestamp with time zone default now()
);

alter table public.user_streak enable row level security;

create policy "Usuarios ven su propia racha"
  on public.user_streak for select
  using (auth.uid() = user_id);

create policy "Usuarios insertan su propia racha"
  on public.user_streak for insert
  with check (auth.uid() = user_id);

create policy "Usuarios actualizan su propia racha"
  on public.user_streak for update
  using (auth.uid() = user_id);

-- -------------------------------------------------------
-- 5. Tabla community_likes (sistema de sapaña)
-- -------------------------------------------------------
create table if not exists public.community_likes (
  id uuid default gen_random_uuid() primary key,
  from_user_id uuid references public.profiles(id) on delete cascade not null,
  to_user_id uuid references public.profiles(id) on delete cascade not null,
  like_date date not null default current_date,
  created_at timestamp with time zone default now(),
  -- 1 sapaña por par de usuarios por día
  constraint unique_like_per_day unique (from_user_id, to_user_id, like_date)
);

alter table public.community_likes enable row level security;

create policy "Likes visibles para usuarios autenticados"
  on public.community_likes for select
  using (auth.role() = 'authenticated');

create policy "Usuarios insertan likes con su propio from_user_id"
  on public.community_likes for insert
  with check (auth.uid() = from_user_id);
