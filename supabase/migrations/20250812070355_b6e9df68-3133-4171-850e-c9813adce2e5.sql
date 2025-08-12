-- Simplify collaborator_requests table by dropping unnecessary columns
ALTER TABLE public.collaborator_requests 
DROP COLUMN IF EXISTS experiencia,
DROP COLUMN IF EXISTS especialidad,
DROP COLUMN IF EXISTS disponibilidad,
DROP COLUMN IF EXISTS proyecto_tipo;