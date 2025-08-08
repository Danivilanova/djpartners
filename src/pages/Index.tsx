
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="D&J Partners - Consultoría en Inteligencia Artificial para Empresas" 
        description="D&J Partners: Transformamos PYMEs con Inteligencia Artificial aplicada al negocio. BI personalizado, analítica predictiva y automatización inteligente."
        imageUrl="/lovable-uploads/ad367c9b-b41f-46b7-a483-c58506105dbe.png"
        keywords={['inteligencia artificial', 'consultoría IA', 'business intelligence', 'analítica predictiva', 'automatización empresarial', 'transformación digital', 'PYME']}
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
