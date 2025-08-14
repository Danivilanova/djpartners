
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyDJPartners from '@/components/WhyDJPartners';
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
        description="D&J Partners: Transformamos PYMEs con Inteligencia Artificial práctica. Sistemas inteligentes, automatización de procesos y herramientas de gestión que impulsan el crecimiento."
        imageUrl="/uploads/ad367c9b-b41f-46b7-a483-c58506105dbe.webp"
        keywords={['inteligencia artificial', 'consultoría IA', 'transformación digital para PYMES', 'automatización de procesos empresariales', 'sistemas inteligentes de gestión', 'optimización empresarial con IA', 'PYME']}
      />
      <Hero />
      <Features />
      <WhyDJPartners />
      {/* <Projects /> */}
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
