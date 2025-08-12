-- Simplify internal_team_requests table by dropping unnecessary columns
ALTER TABLE public.internal_team_requests 
DROP COLUMN IF EXISTS experiencia,
DROP COLUMN IF EXISTS tipo_contrato,
DROP COLUMN IF EXISTS especialidad,
DROP COLUMN IF EXISTS disponibilidad,
DROP COLUMN IF EXISTS tipos_proyecto,
DROP COLUMN IF EXISTS cv_file,
DROP COLUMN IF EXISTS carta_motivacion;

-- Add message column for simplified proposal
ALTER TABLE public.internal_team_requests 
ADD COLUMN IF NOT EXISTS mensaje TEXT NOT NULL DEFAULT '';