-- Tabla de perfiles de usuario
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  username text,
  avatar_url text,
  created_at timestamp with time zone default now()
);

-- Tabla de lecciones
create table public.lessons (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  "order" integer not null default 0,
  created_at timestamp with time zone default now()
);

-- Tabla de progreso del usuario
create table public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  lesson_id uuid references public.lessons(id) on delete cascade not null,
  completed boolean default false,
  score integer default 0,
  updated_at timestamp with time zone default now()
);

-- Habilitar Row Level Security
alter table public.profiles enable row level security;
alter table public.lessons enable row level security;
alter table public.user_progress enable row level security;

-- Políticas para profiles
create policy "Usuarios pueden ver su propio perfil"
  on public.profiles for select using (auth.uid() = id);

create policy "Usuarios pueden actualizar su propio perfil"
  on public.profiles for update using (auth.uid() = id);

create policy "Usuarios pueden insertar su propio perfil"
  on public.profiles for insert with check (auth.uid() = id);

-- Políticas para lessons (todos los autenticados pueden leer)
create policy "Lecciones visibles para usuarios autenticados"
  on public.lessons for select using (auth.role() = 'authenticated');

-- Políticas para user_progress
create policy "Usuarios ven su propio progreso"
  on public.user_progress for select using (auth.uid() = user_id);

create policy "Usuarios insertan su propio progreso"
  on public.user_progress for insert with check (auth.uid() = user_id);

create policy "Usuarios actualizan su propio progreso"
  on public.user_progress for update using (auth.uid() = user_id);

-- Trigger para crear perfil automáticamente al registrarse
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
