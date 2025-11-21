"use client"

import * as React from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { CheckCircle2, Calendar } from 'lucide-react';

const CardSticky = React.memo(({ service, index }) => {
  const ref = React.useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Simplified transforms for mobile
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = isMobile ? 1 : useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.98]);
  const y = isMobile ? 0 : useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  const IconComponent = service.icon;
  const topOffset = 80 + (index * 40);

  const getColorClasses = (color) => {
    if (color === 'gold') {
      return {
        gradient: 'from-[#D4AF37] to-[#f4d03f]',
        text: 'text-[#D4AF37]',
        bg: 'bg-[#D4AF37]',
        border: 'border-[#D4AF37]/30',
        shadow: 'md:hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.6)]'
      };
    }
    return {
      gradient: 'from-[#ff0000] to-[#ff6666]',
      text: 'text-[#ff0000]',
      bg: 'bg-[#ff0000]',
      border: 'border-[#ff0000]/30',
      shadow: 'md:hover:shadow-[0_20px_60px_-15px_rgba(255,0,0,0.6)]'
    };
  };

  const colors = getColorClasses(service.color);

  // Simplified animation variants for mobile
  const mobileVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const desktopVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale: isMobile ? 1 : scale,
        y: isMobile ? 0 : y,
        position: "sticky",
        top: `${topOffset}px`,
        zIndex: 10 + index,
      }}
      className={`relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-shadow duration-300 ${colors.shadow} min-h-[70vh] md:min-h-[85vh] flex items-center justify-center border border-white/10`}
    >
      {/* Background Image - Static on mobile */}
      <div className="absolute inset-0">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Corner Accents - Static on mobile */}
      <div className={`absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br ${colors.gradient} opacity-20 blur-3xl`} />
      <div className={`absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-tr ${colors.gradient} opacity-20 blur-3xl`} />

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 max-w-4xl mx-auto py-8 md:py-0">
        {/* Icon - Simplified animation on mobile */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={isMobile ? mobileVariants : desktopVariants}
          transition={{ duration: 0.4 }}
          whileHover={isMobile ? {} : { scale: 1.1 }}
          className={`mb-6 md:mb-8 inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-br ${colors.gradient} text-black shadow-2xl relative`}
        >
          <IconComponent className="h-8 w-8 md:h-10 md:w-10" />
          {!isMobile && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-30 blur-xl`}
            />
          )}
        </motion.div>

        {/* Number Badge */}
        <div className="mb-3 md:mb-4">
          <span className="text-4xl md:text-6xl lg:text-7xl font-black text-white/10">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title - Single animation on mobile */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={isMobile ? mobileVariants : desktopVariants}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 md:mb-6"
        >
          {service.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={isMobile ? mobileVariants : desktopVariants}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto"
        >
          {service.description}
        </motion.p>

        {/* Features Grid - No stagger on mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={isMobile ? mobileVariants : desktopVariants}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 max-w-2xl mx-auto"
        >
          {service.features.map((feature, i) => (
            <div
              key={i}
              className={`flex items-center justify-center gap-2 md:gap-3 bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl px-3 md:px-4 py-2.5 md:py-3 border ${colors.border}`}
            >
              <CheckCircle2 className={`h-4 w-4 md:h-5 md:w-5 ${colors.text} flex-shrink-0`} />
              <span className="text-xs sm:text-sm font-semibold text-white">
                {feature}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Highlight Badge & CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={isMobile ? mobileVariants : desktopVariants}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
        >
          <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${colors.gradient} px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold text-black shadow-2xl`}>
            {!isMobile && (
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-black" 
              />
            )}
            {isMobile && <span className="h-2 w-2 rounded-full bg-black" />}
            {service.highlight}
          </div>
          
          <a href="https://www.instagram.com/dolce_e_luce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"> 
            <button 
              className={`inline-flex items-center gap-2 rounded-full bg-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold ${colors.text} shadow-2xl transition-transform duration-200 active:scale-95`}
            >
              <Calendar className="h-4 w-4 md:h-5 md:w-5" />
              Book Now
            </button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
});

CardSticky.displayName = "CardSticky";

export default CardSticky;