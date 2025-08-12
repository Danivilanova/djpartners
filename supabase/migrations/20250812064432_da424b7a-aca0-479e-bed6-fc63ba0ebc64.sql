-- Crear tabla para solicitudes de consulta
CREATE TABLE public.consultation_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para formularios de contacto
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para solicitudes de equipo interno
CREATE TABLE public.internal_team_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  experiencia TEXT,
  tipo_contrato TEXT,
  especialidad TEXT,
  tipos_proyecto TEXT[], -- Array de strings para múltiples tipos
  disponibilidad TEXT,
  cv_file TEXT, -- Ruta del archivo CV
  carta_motivacion TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para solicitudes de colaboradores
CREATE TABLE public.collaborator_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  experiencia TEXT,
  especialidad TEXT NOT NULL,
  disponibilidad TEXT,
  proyecto_tipo TEXT[], -- Array de strings para múltiples tipos
  mensaje TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para solicitudes de partnership
CREATE TABLE public.partnership_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  empresa TEXT NOT NULL,
  contacto TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  sector TEXT,
  tamano_empresa TEXT,
  servicios TEXT[], -- Array de strings para múltiples servicios
  tipo_acuerdo TEXT,
  propuesta_colaboracion TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS en todas las tablas (las solicitudes pueden ser públicas)
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.internal_team_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collaborator_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partnership_requests ENABLE ROW LEVEL SECURITY;

-- Crear políticas para permitir inserción pública (cualquiera puede enviar solicitudes)
CREATE POLICY "Anyone can insert consultation requests" 
ON public.consultation_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can insert contact requests" 
ON public.contact_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can insert internal team requests" 
ON public.internal_team_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can insert collaborator requests" 
ON public.collaborator_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can insert partnership requests" 
ON public.partnership_requests 
FOR INSERT 
WITH CHECK (true);