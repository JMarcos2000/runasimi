-- =============================================================
-- Schema completo de Runasimi (Quechua App)
-- Última actualización: PRO-20
-- =============================================================

-- -------------------------------------------------------
-- Tabla de perfiles de usuario
-- -------------------------------------------------------
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  username text,
  avatar_url text,
  onboarding_completed boolean default false,
  created_at timestamp with time zone default now()
);

-- -------------------------------------------------------
-- Tabla de lecciones (Plan A1 — 60 días)
-- -------------------------------------------------------
create table public.lessons (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  "order" integer not null default 0,
  day_number integer,
  topic text,
  example_quechua text,
  example_translation text,
  phrase_of_day text,
  created_at timestamp with time zone default now()
);

-- -------------------------------------------------------
-- Tabla de ejercicios (contenido variable via JSONB)
-- -------------------------------------------------------
create table public.exercises (
  id uuid default gen_random_uuid() primary key,
  lesson_id uuid references public.lessons(id) on delete cascade not null,
  type text not null check (type in ('choice', 'text_input', 'audio', 'video')),
  "order" integer not null default 0,
  content jsonb not null,
  created_at timestamp with time zone default now()
);

create index exercises_lesson_id_order_idx on public.exercises(lesson_id, "order");

-- -------------------------------------------------------
-- Tabla de progreso del usuario
-- -------------------------------------------------------
create table public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  lesson_id uuid references public.lessons(id) on delete cascade not null,
  completed boolean default false,
  score integer default 0,
  updated_at timestamp with time zone default now()
);

-- -------------------------------------------------------
-- Tabla de racha diaria
-- -------------------------------------------------------
create table public.user_streak (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null unique,
  current_streak integer not null default 0,
  longest_streak integer not null default 0,
  last_activity_date date,
  updated_at timestamp with time zone default now()
);

-- -------------------------------------------------------
-- Tabla de sapaña (community likes)
-- -------------------------------------------------------
create table public.community_likes (
  id uuid default gen_random_uuid() primary key,
  from_user_id uuid references public.profiles(id) on delete cascade not null,
  to_user_id uuid references public.profiles(id) on delete cascade not null,
  like_date date not null default current_date,
  created_at timestamp with time zone default now(),
  constraint unique_like_per_day unique (from_user_id, to_user_id, like_date)
);

-- -------------------------------------------------------
-- Row Level Security
-- -------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.lessons enable row level security;
alter table public.exercises enable row level security;
alter table public.user_progress enable row level security;
alter table public.user_streak enable row level security;
alter table public.community_likes enable row level security;

-- Políticas para profiles
create policy "Usuarios pueden ver su propio perfil"
  on public.profiles for select using (auth.uid() = id);
create policy "Usuarios pueden actualizar su propio perfil"
  on public.profiles for update using (auth.uid() = id);
create policy "Usuarios pueden insertar su propio perfil"
  on public.profiles for insert with check (auth.uid() = id);

-- Políticas para lessons
create policy "Lecciones visibles para usuarios autenticados"
  on public.lessons for select using (auth.role() = 'authenticated');

-- Políticas para exercises
create policy "Ejercicios visibles para usuarios autenticados"
  on public.exercises for select using (auth.role() = 'authenticated');
create policy "Solo service_role puede insertar ejercicios"
  on public.exercises for insert with check (auth.role() = 'service_role');
create policy "Solo service_role puede actualizar ejercicios"
  on public.exercises for update using (auth.role() = 'service_role');
create policy "Solo service_role puede eliminar ejercicios"
  on public.exercises for delete using (auth.role() = 'service_role');

-- Políticas para user_progress
create policy "Usuarios ven su propio progreso"
  on public.user_progress for select using (auth.uid() = user_id);
create policy "Usuarios insertan su propio progreso"
  on public.user_progress for insert with check (auth.uid() = user_id);
create policy "Usuarios actualizan su propio progreso"
  on public.user_progress for update using (auth.uid() = user_id);

-- Políticas para user_streak
create policy "Usuarios ven su propia racha"
  on public.user_streak for select using (auth.uid() = user_id);
create policy "Usuarios insertan su propia racha"
  on public.user_streak for insert with check (auth.uid() = user_id);
create policy "Usuarios actualizan su propia racha"
  on public.user_streak for update using (auth.uid() = user_id);

-- Políticas para community_likes
create policy "Likes visibles para usuarios autenticados"
  on public.community_likes for select using (auth.role() = 'authenticated');
create policy "Usuarios insertan likes con su propio from_user_id"
  on public.community_likes for insert with check (auth.uid() = from_user_id);

-- -------------------------------------------------------
-- Trigger: crear perfil automáticamente al registrarse
-- -------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, username)
  values (new.id, split_part(new.email, '@', 1));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
