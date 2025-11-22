"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Scissors, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

const transformations = [
  {
    id: 1,
    category: "Hair Color",
    title: "Platinum Blonde Transformation",
    before: "images/3.jpeg",
    after: "images/4.jpeg",
    description: "From dark brunette to stunning platinum blonde",
    duration: "4 hours",
    color: "gold"
  },
  {
    id: 2,
    category: "Haircut & Style",
    title: "Modern Bob Makeover",
    before: "images/6.jpeg",
    after: "images/5.jpeg",
    description: "Chic bob with dimensional balayage",
    duration: "3 hours",
    color: "red"
  },
  {
    id: 3,
    category: "Color Correction",
    title: "Vivid Red Revival",
    before: "images/8.jpeg",
    after: "images/7.jpeg",
    description: "Corrected brassy tones to vibrant blonde",
    duration: "5 hours",
    color: "gold"
  },
  {
    id: 4,
    category: "Hair Treatment",
    title: "Keratin Smoothing",
    before: "images/10.jpeg",
    after: "images/9.jpeg",
    description: "Frizz-free, silky smooth hair",
    duration: "2.5 hours",
    color: "red"
  },
  {
    id: 5,
    category: "Balayage",
    title: "Sun-Kissed Highlights",
    before: "images/11.jpeg",
    after: "images/12.jpeg",
    description: "Natural-looking dimensional color",
    duration: "3.5 hours",
    color: "gold"
  },
  {
    id: 6,
    category: "Complete Makeover",
    title: "Full Transformation",
    before: "images/13.jpeg",
    after: "images/14.jpeg",
    description: "Cut, color, and style complete revamp",
    duration: "6 hours",
    color: "red"
  }
];

const BeforeAfterCard = ({ transformation, index }) => {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(clampedPercentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const getColorClasses = (color) => {
    if (color === 'gold') {
      return {
        gradient: 'from-[#D4AF37] to-[#f4d03f]',
        text: 'text-[#D4AF37]',
        bg: 'bg-[#D4AF37]',
        border: 'border-[#D4AF37]',
      };
    }
    return {
      gradient: 'from-[#ff0000] to-[#ff6666]',
      text: 'text-[#ff0000]',
      bg: 'bg-[#ff0000]',
      border: 'border-[#ff0000]',
    };
  };

  const colors = getColorClasses(transformation.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.4)] transition-all duration-500">
        {/* Image Comparison Container */}
        <div 
          ref={containerRef}
          className="relative aspect-[4/5] overflow-hidden cursor-ew-resize select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <img 
              src={transformation.after} 
              alt="After"
              className="w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-4 right-4 z-10">
              <div className={`bg-gradient-to-r ${colors.gradient} text-black text-xs md:text-sm font-black px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg`}>
                AFTER
              </div>
            </div>
          </div>

          {/* Before Image (Sliding Overlay) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={transformation.before} 
              alt="Before"
              className="w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-black/80 text-white text-xs md:text-sm font-black px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg border-2 border-white/30">
                BEFORE
              </div>
            </div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Slider Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r ${colors.gradient} shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing`}
              >
                <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-black absolute left-2" />
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-black absolute right-2" />
              </motion.div>
            </div>

            {/* Top Arrow */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] ${colors.border}`} />
            
            {/* Bottom Arrow */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] ${colors.border}`} />
          </div>

          {/* Instruction Overlay (shows on hover) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isDragging ? 0 : 1 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          >
            <div className="text-center">
              <motion.div
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Scissors className="h-12 w-12 md:h-16 md:w-16 text-white mx-auto mb-3 md:mb-4" />
              </motion.div>
              <p className="text-white text-sm md:text-base font-bold">Drag to Compare</p>
            </div>
          </motion.div>
        </div>

        {/* Info Section */}
        <div className="p-4 md:p-6">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-3 md:mb-4"
          >
            <span className={`inline-flex items-center gap-2 text-xs md:text-sm font-bold ${colors.text} bg-white/5 px-3 md:px-4 py-1.5 md:py-2 rounded-full border ${colors.border}/30`}>
              <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
              {transformation.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3"
          >
            {transformation.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-base text-white/70 mb-3 md:mb-4"
          >
            {transformation.description}
          </motion.p>

          {/* Duration & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2 text-white/60 text-xs md:text-sm">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="font-semibold">{transformation.duration}</span>
            </div>
            <a href="https://www.instagram.com/dolce_e_luce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="> 
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 bg-gradient-to-r ${colors.gradient} text-black text-xs md:text-sm font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg`}
            >
              Book Similar
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
            </motion.button>
             </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const BeforeAfterSection = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  const categories = ["All", "Hair Color", "Haircut & Style", "Color Correction", "Hair Treatment", "Balayage", "Complete Makeover"];
  
  const filteredTransformations = selectedCategory === "All" 
    ? transformations 
    : transformations.filter(t => t.category === selectedCategory);

  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#D4AF37]/5 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#ff0000] rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#D4AF37] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4 md:mb-6"
          >
            <Scissors className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-[#D4AF37]" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 md:mb-6">
            Before & After
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#ff0000] to-[#D4AF37] bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Witness the artistry of our master stylists. Every transformation tells a story of confidence and beauty.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] text-black shadow-lg'
                  : 'bg-white/5 text-white border-2 border-white/10 hover:border-[#D4AF37]/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Transformations Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredTransformations.map((transformation, index) => (
            <BeforeAfterCard
              key={transformation.id}
              transformation={transformation}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8">
            Ready for your own transformation?
          </p>
          <a href="https://www.vagaro.com/dolceeluce?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGny8AvlZhq4LbwBQg0pz2PyblKixwsr0zbzqdeW19Mipj3yK76MEJCIB12EAg_aem_KftGRU_--qPn16UeGL1gIw">  
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] text-black text-base md:text-lg font-black px-8 md:px-12 py-4 md:py-6 rounded-full shadow-2xl cursor-pointer"
          >
            <Sparkles className="h-5 w-5 md:h-6 md:w-6" />
            Schedule Your Transformation
            <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
          </motion.button>
          </a>
        </motion.div>
        
      </div>
      
    </div>
  );
};

export default BeforeAfterSection;