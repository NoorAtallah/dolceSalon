"use client"

import * as React from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { CheckCircle2, Calendar } from 'lucide-react';

const CardSticky = React.memo(({ service, index }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.3], [2, 0]);

  const IconComponent = service.icon;
  const topOffset = 80 + (index * 40);

  const getColorClasses = (color) => {
    if (color === 'gold') {
      return {
        gradient: 'from-[#D4AF37] to-[#f4d03f]',
        text: 'text-[#D4AF37]',
        bg: 'bg-[#D4AF37]',
        border: 'border-[#D4AF37]/30',
        shadow: 'hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.6)]'
      };
    }
    return {
      gradient: 'from-[#ff0000] to-[#ff6666]',
      text: 'text-[#ff0000]',
      bg: 'bg-[#ff0000]',
      border: 'border-[#ff0000]/30',
      shadow: 'hover:shadow-[0_20px_60px_-15px_rgba(255,0,0,0.6)]'
    };
  };

  const colors = getColorClasses(service.color);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        y,
        rotate,
        position: "sticky",
        top: `${topOffset}px`,
        zIndex: 10 + index,
      }}
      className={`relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${colors.shadow} min-h-[70vh] md:min-h-[85vh] flex items-center justify-center border border-white/10`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img 
          src={service.image} 
          alt={service.title}
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Animated Corner Accents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br ${colors.gradient} opacity-20 blur-3xl`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className={`absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-tr ${colors.gradient} opacity-20 blur-3xl`}
      />

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 max-w-4xl mx-auto py-8 md:py-0">
        {/* Icon with Pulse Effect */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2 
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`mb-6 md:mb-8 inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-br ${colors.gradient} text-black shadow-2xl relative`}
        >
          <IconComponent className="h-8 w-8 md:h-10 md:w-10" />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-30 blur-xl`}
          />
        </motion.div>

        {/* Number Badge with Slide Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-3 md:mb-4"
        >
          <span className="text-4xl md:text-6xl lg:text-7xl font-black text-white/10">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Title with Character Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 md:mb-6"
        >
          {service.title.split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
              className="inline-block mr-2 md:mr-3"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto"
        >
          {service.description}
        </motion.p>

        {/* Features Grid with Stagger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 max-w-2xl mx-auto"
        >
          {service.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
              className={`flex items-center justify-center gap-2 md:gap-3 bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl px-3 md:px-4 py-2.5 md:py-3 border ${colors.border} cursor-pointer`}
            >
              <CheckCircle2 className={`h-4 w-4 md:h-5 md:w-5 ${colors.text} flex-shrink-0`} />
              <span className="text-xs sm:text-sm font-semibold text-white">
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Badge & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${colors.gradient} px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold text-black shadow-2xl`}
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-black" 
            />
            {service.highlight}
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 rounded-full bg-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold ${colors.text} shadow-2xl transition-all duration-300`}
          >
            <Calendar className="h-4 w-4 md:h-5 md:w-5" />
            Book Now
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
});

CardSticky.displayName = "CardSticky";

export default CardSticky;