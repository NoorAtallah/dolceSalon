"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Scissors, Sparkles, Globe, Award, Heart } from 'lucide-react';
import { TextHoverEffect } from '../../components/layouts/exthovereffect';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamic import with no SSR
const ScrollExpandMedia = dynamic(
  () => import('@/components/blocks/scroll-expansion-hero-client'),
  { ssr: false }
);

const AboutUsSection = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const expertise = [
    { title: "Color Mastery", desc: "20+ years perfecting the art" },
    { title: "Precision Cuts", desc: "Every angle tells a story" },
    { title: "Balayage Expert", desc: "Natural dimensional color" },
    { title: "Bridal Specialist", desc: "Your dream look realized" },
    { title: "Keratin Pro", desc: "Smooth, silky perfection" },
    { title: "Global Trained", desc: "Jordan • Europe • USA" }
  ];

  return (
    <>
      {/* Video Hero Section */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/videos/salon-intro.mp4"
        posterSrc="/images/video-poster.jpg"
        bgImageSrc="/images/salon-background.jpg"
        title="Dolce e Luce"
        date="Master Artistry"
        scrollToExpand="Scroll to Discover"
        textBlend={true}
      >
        <div className="bg-black w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Where <span className="text-[#D4AF37]">Passion</span> Meets <span className="text-[#ff0000]">Perfection</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Step into a world where every cut, every color, every style is a masterpiece. 
              Experience the artistry that has been perfected over two decades across three continents.
            </p>
          </div>
        </div>
      </ScrollExpandMedia>

      {/* Rest of your component stays the same */}
      <div ref={ref} className="relative bg-black py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* ... rest of your code ... */}
      </div>
    </>
  );
};

export default AboutUsSection;