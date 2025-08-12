-- Simplify partnership_requests table by dropping unnecessary columns
ALTER TABLE public.partnership_requests 
DROP COLUMN IF EXISTS sector,
DROP COLUMN IF EXISTS tamano_empresa,
DROP COLUMN IF EXISTS servicios,
DROP COLUMN IF EXISTS tipo_acuerdo;

-- Add website field for company website
ALTER TABLE public.partnership_requests 
ADD COLUMN IF NOT EXISTS website TEXT;