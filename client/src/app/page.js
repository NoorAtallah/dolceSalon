import SalonHero from '@/components/hero';
import ServicesSection from '@/components/services';
import BeforeAfterSection from '@/components/beforeAfter';
import GallerySection from '@/components/Gallerysection';
import TestimonialsShuffleSection from '@/components/testemonials';
import FinalCTASection from '@/components/Finalctasection';
export default function Home() {
  return (
    <div>
      <SalonHero />
      <ServicesSection />
      <TestimonialsShuffleSection />
      <BeforeAfterSection />
      <GallerySection />
      <FinalCTASection />
  
    </div>
  );
}
