"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Scissors, Sparkles, ChevronRight, Star, Eye, ArrowUpRight, Users, Award, Zap, ThumbsUp } from 'lucide-react';
import { TextHoverEffect } from '../../components/layouts/exthovereffect';

const PortfolioPage = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(false);

  // Check if mobile on mount and window resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Categories - Added Nails
  const categories = ["All", "Hair Color", "Haircuts", "Bridal", "Styling", "Nails"];

  // Portfolio items - Added Nails items
  const portfolioItems = [
    {
      id: 1,
      category: "Hair Color",
      image: "/images/18.jpg",
      title: "Golden Balayage",
      description: "Sun-kissed dimensional color that brings warmth and depth",
    },
    {
      id: 2,
      category: "Haircuts",
      image: "/images/5.jpeg",
      title: "Modern Bob",
      description: "Precision cut with perfect texture and movement",
    },
    {
      id: 3,
      category: "Bridal",
      image: "/images/22.png",
      title: "Romantic Updo",
      description: "Elegant bridal perfection for your special day",
    },
    {
      id: 4,
      category: "Hair Color",
      image: "/images/21.jpeg",
      title: "Red Velvet",
      description: "Bold vibrant transformation with rich tones",
    },
    {
      id: 5,
      category: "Styling",
      image: "/images/12.jpeg",
      title: "Beach Waves",
      description: "Effortless glamour with natural movement",
    },
    {
      id: 6,
      category: "Haircuts",
      image: "images/20.jpg",
      title: "Layered Cut",
      description: "Volume and movement through expert layering",
    },
    {
      id: 7,
      category: "Hair Color",
      image: "/images/4.jpeg",
      title: "Platinum Blonde",
      description: "Stunning blonde perfection achieved through mastery",
    },
    {
      id: 8,
      category: "Bridal",
      image: "/images/23.png",
      title: "Classic Elegance",
      description: "Timeless bridal beauty that captures hearts",
    },
    {
      id: 9,
      category: "Styling",
      image: "/images/15.jpg",
      title: "Sleek & Smooth",
      description: "Polished perfection with mirror-like shine",
    },
    // NEW NAILS SECTION
    {
      id: 10,
      category: "Nails",
      image: "/images/24.jpeg",
      title: "French Elegance",
      description: "Classic French manicure with a modern twist",
    },
    {
      id: 11,
      category: "Nails",
      image: "/images/25.png",
      title: "Glamour Nails",
      description: "Luxurious gold accents and intricate designs",
    },
    {
      id: 12,
      category: "Nails",
      image: "/images/26.png",
      title: "Artistic Expression",
      description: "Hand-painted nail art that makes a statement",
    },
    {
      id: 13,
      category: "Nails",
      image: "/images/27.png",
      title: "Gel Perfection",
      description: "Long-lasting gel manicure with mirror shine",
    },
    {
      id: 14,
      category: "Nails",
      image: "/images/28.png",
      title: "Bridal Nails",
      description: "Delicate and romantic for your special day",
    },
    {
      id: 15,
      category: "Nails",
      image: "/images/29.png",
      title: "Ombré Dreams",
      description: "Seamless color transitions and stunning gradients",
    },
  ];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div ref={containerRef} className="bg-black overflow-hidden">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.02, duration: 1 }}
              style={{
                top: `${i * 3.33}%`,
                background: i % 2 === 0 ? '#D4AF37' : '#ff0000',
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-5 md:top-20 md:right-20 w-32 h-32 md:w-64 md:h-64 border-2 border-[#D4AF37]/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-5 md:bottom-20 md:left-20 w-40 h-40 md:w-80 md:h-80 border-2 border-[#ff0000]/20"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />

        <div className="text-center relative z-10 max-w-6xl mx-auto">
          {/* Scissors Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6 md:mb-8"
            >
              <Scissors className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#D4AF37]" />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-none tracking-tighter mb-4 md:mb-6">
              <motion.span 
                className="text-white block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                OUR
              </motion.span>
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#ff0000] to-[#D4AF37] bg-[length:200%_auto] block"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                PORTFOLIO
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-white/60 mb-4 md:mb-6 px-4">
              Where Artistry Meets Excellence
            </p>
            <div className="flex items-center justify-center gap-3">
              <motion.div 
                className="h-[2px] w-8 md:w-12 bg-[#D4AF37]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              />
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
              <motion.div 
                className="h-[2px] w-8 md:w-12 bg-[#D4AF37]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              />
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 md:mt-16"
          >
            <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.3em] mb-4">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] mx-auto rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 md:py-16 lg:py-20 px-4 border-t border-white/10 sticky top-0 z-50 bg-black/90 md:bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm transition-all duration-500 overflow-hidden group ${
                  selectedCategory === category
                    ? 'text-black'
                    : 'text-white/60 hover:text-white border border-white/10'
                }`}
              >
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#f4d03f]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#ff0000]/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scroll Magazine Layout */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4">
              FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#ff0000]">WORKS</span>
            </h2>
            <p className="text-white/40 text-base md:text-lg">Swipe through our masterpieces</p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            <div className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 100, rotateY: -25 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.8,
                    type: "spring"
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] lg:min-w-[450px] snap-center group"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    className="relative h-[500px] sm:h-[550px] md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden"
                    whileHover={{ 
                      scale: isMobile ? 1 : 1.02,
                      rotateY: isMobile ? 0 : 5,
                      z: isMobile ? 0 : 50
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Magazine Cover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#ff0000]/10 z-10 pointer-events-none" />
                    
                    {/* Image - Colored on mobile, grayscale on desktop unless hovered */}
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      style={{
                        filter: isMobile || hoveredItem === item.id ? 'grayscale(0%)' : 'grayscale(100%)',
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                    {/* Magazine Style Border */}
                    <div className="absolute inset-3 md:inset-4 border-2 border-[#D4AF37]/30 pointer-events-none" />
                    <div className="absolute inset-5 md:inset-6 border border-[#D4AF37]/20 pointer-events-none" />

                    {/* Top Label - Magazine Style */}
                    <div className="absolute top-0 left-0 right-0 p-4 md:p-6 lg:p-8 flex justify-between items-start z-20">
                      <div>
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="text-[#D4AF37] text-[0.6rem] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] mb-2"
                        >
                          DOLCE E LUCE
                        </motion.div>
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="px-3 py-1.5 md:px-4 md:py-2 bg-black/60 backdrop-blur-sm border border-[#D4AF37] text-[#D4AF37] text-[0.65rem] md:text-xs font-bold uppercase tracking-wider"
                        >
                          {item.category}
                        </motion.div>
                      </div>
                      
                      {/* Issue Number */}
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="text-white/40 text-xs md:text-sm font-bold"
                      >
                        #{String(index + 1).padStart(2, '0')}
                      </motion.div>
                    </div>

                    {/* Content - Magazine Article Style */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 z-20">
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        {/* Decorative Line */}
                        <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
                          <div className="h-[1px] w-8 md:w-12 bg-[#D4AF37]" />
                          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37]" />
                          <div className="h-[1px] flex-1 bg-[#D4AF37]" />
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 md:mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                          {item.title}
                        </h3>
                        
                        <p className="text-white/70 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Read More Button */}
                        <motion.div
                          className="flex items-center gap-2 md:gap-3 text-[#D4AF37] cursor-pointer"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                            <a href="https://www.instagram.com/dolce_e_luce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
                          <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Explore Story</span>
                          </a>
                          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-[#D4AF37] z-20" />
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-[#D4AF37] z-20" />
                    <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-[#D4AF37] z-20" />
                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-[#D4AF37] z-20" />

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#ff0000]/20 mix-blend-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: isMobile ? 0 : 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Scroll Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
            >
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
              </motion.div>
              <p className="text-white/40 text-xs uppercase tracking-wider [writing-mode:vertical-lr]">
                Scroll Right
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stacked Cards Animation Section */}
      <section className="py-20 md:py-24 lg:py-32 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4">
              MORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#ff0000]">STORIES</span>
            </h2>
          </motion.div>

          {/* Stacked Cards that Reveal on Scroll */}
          <div className="relative space-y-6 md:space-y-8">
            {filteredItems.slice(0, 5).map((item, index) => {
              const cardRef = React.useRef(null);
              const { scrollYProgress } = useScroll({
                target: cardRef,
                offset: ["start end", "start start"]
              });

              const scale = useTransform(
                scrollYProgress,
                [0, 1],
                [0.8, 1]
              );

              const opacity = useTransform(
                scrollYProgress,
                [0, 1],
                [0.3, 1]
              );

              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [100, 0]
              );

              return (
                <motion.div
                  key={item.id}
                  ref={cardRef}
                  style={{
                    scale: isMobile ? 1 : scale,
                    opacity: isMobile ? 1 : opacity,
                    y: isMobile ? 0 : y,
                  }}
                  className="sticky top-24 md:top-32"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden group">
                    {/* Background Image - Colored on mobile */}
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                      style={{
                        filter: isMobile || hoveredItem === item.id ? 'grayscale(0%)' : 'grayscale(100%)',
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
                          {item.category}
                        </div>
                      </motion.div>

                      <motion.h3
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 md:mb-4 leading-none"
                      >
                        {item.title}
                      </motion.h3>

                      <motion.p
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-base md:text-lg lg:text-xl text-white/70 max-w-xl mb-6 md:mb-8"
                      >
                        {item.description}
                      </motion.p>

                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-2 text-[#D4AF37] cursor-pointer"
                        >
                          <span className="text-xs md:text-sm font-bold uppercase tracking-wider">View Full Story</span>
                          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 md:top-8 right-4 md:right-8 text-[#D4AF37]/20 text-6xl md:text-7xl lg:text-8xl font-black">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Border Animation */}
                    <motion.div
                      className="absolute inset-0 border-2 md:border-4 border-[#D4AF37]"
                      initial={{ clipPath: "inset(0 100% 100% 0)" }}
                      whileInView={{ clipPath: "inset(0 0 0 0)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - NOW WITH LUCIDE ICONS */}
      <section className="py-20 md:py-24 lg:py-32 px-4 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#ff0000]/5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4">
              BY THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#ff0000]">NUMBERS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {[
              { number: "5000+", label: "Happy Clients", Icon: Users },
              { number: "20+", label: "Years Experience", Icon: Award },
              { number: "15K+", label: "Transformations", Icon: Zap },
              { number: "100%", label: "Satisfaction", Icon: ThumbsUp }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  className="mb-3 md:mb-4 flex justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: i * 0.1 + 0.2 }}
                >
                  <stat.Icon className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#D4AF37] group-hover:text-[#ff0000] transition-colors duration-500" />
                </motion.div>
                <motion.div
                  className="text-3xl md:text-4xl lg:text-6xl font-black mb-2 md:mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: i * 0.1 + 0.3 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] group-hover:from-[#ff0000] group-hover:to-[#D4AF37] transition-all duration-500">
                    {stat.number}
                  </span>
                </motion.div>
                <p className="text-white/60 text-xs md:text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-24 lg:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#D4AF37]/5 to-black" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10 px-4"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
          >
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-[#D4AF37] mx-auto mb-6 md:mb-8" />
          </motion.div>
          
          <blockquote className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white/80 italic mb-6 md:mb-8 leading-relaxed">
            "Haitham is a true artist. He transformed not just my hair, but my confidence. 
            <span className="text-[#D4AF37]"> Best salon experience ever!</span>"
          </blockquote>
          
          <div className="flex items-center justify-center gap-3">
            <motion.div 
              className="h-[2px] w-6 md:w-8 bg-[#D4AF37]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
            <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.3em]">Sarah M.</p>
            <motion.div 
              className="h-[2px] w-6 md:w-8 bg-[#D4AF37]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </section>

      {/* CTA Section with DOLCE Text Effect */}
      <section className="py-20 md:py-24 lg:py-32 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h3 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 md:mb-8 leading-tight">
            Ready for Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#ff0000] to-[#D4AF37]">
              Transformation?
            </span>
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl text-white/60 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Let's create your next masterpiece together
          </p>
          
          <motion.a
            href="https://www.vagaro.com/dolceeluce?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGny8AvlZhq4LbwBQg0pz2PyblKixwsr0zbzqdeW19Mipj3yK76MEJCIB12EAg_aem_KftGRU_--qPn16UeGL1gIw"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#ff0000] blur-xl opacity-50"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] text-black font-black text-base md:text-xl lg:text-2xl px-8 py-4 md:px-12 md:py-6 lg:px-16 lg:py-8 flex items-center justify-center gap-3 md:gap-4">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                <span className="hidden sm:inline">BOOK YOUR APPOINTMENT</span>
                <span className="sm:hidden">BOOK NOW</span>
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 md:mt-24 lg:mt-32 relative"
        >
          <div className="flex h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] -mb-16 sm:-mb-24 md:-mb-32 lg:-mb-40 xl:-mb-48">
            <TextHoverEffect text="DOLCE" className="z-0" />
          </div>

          <div className="relative z-10 text-center px-4">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light text-white/20 italic max-w-4xl mx-auto">
              "Your hair is your crown, let us make it royal"
            </p>
          </div>
        </motion.div>
      </section>

      {/* Add scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
};

export default PortfolioPage;