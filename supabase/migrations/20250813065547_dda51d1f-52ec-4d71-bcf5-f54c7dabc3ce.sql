
-- Verificar y crear la tabla consultation_requests si no existe con la estructura correcta
CREATE TABLE IF NOT EXISTS public.consultation_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS en la tabla
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

-- Eliminar políticas existentes que puedan estar causando conflictos
DROP POLICY IF EXISTS "Anyone can insert consultation requests" ON public.consultation_requests;
DROP POLICY IF EXISTS "Admins can view consultation requests" ON public.consultation_requests;
DROP POLICY IF EXISTS "Admins can update consultation requests" ON public.consultation_requests;
DROP POLICY IF EXISTS "Admins can delete consultation requests" ON public.consultation_requests;

-- Crear política que permite a usuarios anónimos insertar solicitudes de consultoría
CREATE POLICY "allow anon insert consultation requests"
ON public.consultation_requests
FOR INSERT
TO anon
WITH CHECK (true);

-- Crear políticas para que los admins puedan gestionar las solicitudes
CREATE POLICY "Admins can view consultation requests"
ON public.consultation_requests
FOR SELECT
USING (is_admin());

CREATE POLICY "Admins can update consultation requests"
ON public.consultation_requests
FOR UPDATE
USING (is_admin());

CREATE POLICY "Admins can delete consultation requests"
ON public.consultation_requests
FOR DELETE
USING (is_admin());
