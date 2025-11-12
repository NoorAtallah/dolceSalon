import SalonHero from '@/components/hero';
import ServicesSection from '@/components/services';
import BeforeAfterSection from '@/components/beforeAfter';
import GallerySection from '@/components/Gallerysection';
import TestimonialsShuffleSection from '@/components/testemonials';
export default function Home() {
  return (
    <div>
      <SalonHero />
      <ServicesSection />
      <GallerySection />
      <TestimonialsShuffleSection />
      <BeforeAfterSection />
  
    </div>
  );
}
