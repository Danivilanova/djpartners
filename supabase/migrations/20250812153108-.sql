-- Create an enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents recursive RLS issues)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to check if current user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT public.has_role(auth.uid(), 'admin');
$$;

-- Add SELECT policies for contact tables (admin-only access)
CREATE POLICY "Admins can view collaboration requests" 
ON public.collaborator_requests 
FOR SELECT 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can view consultation requests" 
ON public.consultation_requests 
FOR SELECT 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can view contact requests" 
ON public.contact_requests 
FOR SELECT 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can view internal team requests" 
ON public.internal_team_requests 
FOR SELECT 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can view partnership requests" 
ON public.partnership_requests 
FOR SELECT 
TO authenticated
USING (public.is_admin());

-- Add UPDATE and DELETE policies for admins to manage requests
CREATE POLICY "Admins can update collaboration requests" 
ON public.collaborator_requests 
FOR UPDATE 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can delete collaboration requests" 
ON public.collaborator_requests 
FOR DELETE 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can update consultation requests" 
ON public.consultation_requests 
FOR UPDATE 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can delete consultation requests" 
ON public.consultation_requests 
FOR DELETE 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can update contact requests" 
ON public.contact_requests 
FOR UPDATE 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can delete contact requests" 
ON public.contact_requests 
FOR DELETE 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can update internal team requests" 
ON public.internal_team_requests 
FOR UPDATE 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can delete internal team requests" 
ON public.internal_team_requests 
FOR DELETE 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can update partnership requests" 
ON public.partnership_requests 
FOR UPDATE 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can delete partnership requests" 
ON public.partnership_requests 
FOR DELETE 
TO authenticated
USING (public.is_admin());

-- Allow users to view their own role
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Only admins can manage roles
CREATE POLICY "Admins can manage all roles" 
ON public.user_roles 
FOR ALL 
TO authenticated
USING (public.is_admin());

-- Insert initial admin user (replace with your admin email)
-- Note: This will only work after you have authenticated at least once
-- You'll need to manually add this after authentication is set up