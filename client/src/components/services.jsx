"use client"

import CardSticky from './CardSticky';
import { SALON_SERVICES } from './Servicesdata';

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 xl:px-12 bg-black ">
      <div className="min-h-[400vh] space-y-6 md:space-y-8 py-8 md:py-12 max-w-6xl mx-auto">
        {SALON_SERVICES.map((service, index) => (
          <CardSticky
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;