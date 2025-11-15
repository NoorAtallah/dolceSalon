"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Scissors, Sparkles, Globe, Award, Heart } from 'lucide-react';
import { TextHoverEffect } from '../../components/layouts/exthovereffect';
import Link from 'next/link';
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
    <div ref={ref} className="relative bg-black py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Diagonal Lines */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full opacity-10"
              style={{
                top: `${i * 5}%`,
                background: i % 2 === 0 ? '#D4AF37' : '#ff0000',
                transform: `rotate(${i % 2 === 0 ? '2deg' : '-2deg'})`
              }}
            />
          ))}
        </motion.div>

        {/* Floating Shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 border-2 border-[#D4AF37]/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 border-2 border-[#ff0000]/20"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Large Image with Overlay Text */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            {/* Image Container */}
            <div className="relative h-[600px] md:h-[700px] lg:h-[800px] group">
              {/* Main Image */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="/images/1.png"
                  alt="Haitham Al-Abadi"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-transparent to-[#ff0000]/20 mix-blend-overlay" />
              </div>

              {/* Floating Corner Accents */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#D4AF37]"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#ff0000]"
              />

              {/* Name Overlay - Vertical Text */}
              <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center p-6">
                <div className="transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-wider">
                    HAITHAM
                  </h2>
                </div>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] mb-2">MASTER STYLIST</p>
                  <p className="text-white/60 text-xs">Orlando, FL • Since 2003</p>
                </motion.div>
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.3 }}
                className="absolute top-8 right-8 w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#f4d03f] flex flex-col items-center justify-center shadow-2xl"
              >
                <span className="text-3xl font-black text-black">20+</span>
                <span className="text-xs font-bold text-black">YEARS</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="lg:col-span-7 space-y-12 lg:pt-12">
            
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Scissors className="w-8 h-8 text-[#D4AF37]" />
                </motion.div>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#D4AF37] via-[#ff0000] to-transparent" />
              </div>
              
              <h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-6">
                <span className="text-white">Where Art</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#ff0000] to-[#D4AF37]">
                  Meets Hair
                </span>
              </h3>

              <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-8">
                Haitham Al-Abadi
              </p>
            </motion.div>

            {/* Story - Artistic Layout */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] via-[#ff0000] to-[#D4AF37]" />
              
              <div className="pl-8 space-y-6">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  A master craftsman who doesn't just cut hair—he sculpts masterpieces. 
                  With <span className="text-[#D4AF37] font-bold">20+ years</span> of 
                  international experience spanning three continents, Haitham brings an 
                  unparalleled blend of technique and artistry.
                </p>
                
                <p className="text-base md:text-lg text-white/60 leading-relaxed">
                  From the ancient traditions of Jordan to the cutting-edge techniques 
                  of European haute couture, culminating in the dynamic American salon 
                  scene—every experience has been woven into his signature style.
                </p>

                {/* World Journey Icons */}
                <div className="flex gap-4 pt-4">
                  {[
                    { flag: "🇯🇴", label: "Jordan", desc: "Heritage" },
                    { flag: "🇪🇺", label: "Europe", desc: "Refinement" },
                    { flag: "🇺🇸", label: "USA", desc: "Innovation" }
                  ].map((location, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      whileHover={{ y: -5 }}
                      className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center group hover:border-[#D4AF37]/50 transition-all"
                    >
                      <div className="text-3xl mb-2">{location.flag}</div>
                      <div className="text-xs text-white/60 group-hover:text-[#D4AF37] transition-colors">
                        {location.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Expertise Grid - Bento Box Style */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3"
            >
              {expertise.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.05) }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: i % 2 === 0 ? 2 : -2,
                    zIndex: 10
                  }}
                  className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    i % 3 === 0 
                      ? 'bg-gradient-to-br from-[#D4AF37]/10 to-black border-[#D4AF37]/30' 
                      : i % 3 === 1
                      ? 'bg-gradient-to-br from-[#ff0000]/10 to-black border-[#ff0000]/30'
                      : 'bg-gradient-to-br from-white/5 to-black border-white/10'
                  }`}
                >
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  <h4 className="text-sm font-black text-white mb-1">{skill.title}</h4>
                  <p className="text-xs text-white/50">{skill.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
            >
              {[
                { icon: Globe, value: "4", label: "Languages" },
                { icon: Award, value: "5000+", label: "Clients" },
                { icon: Heart, value: "100%", label: "Love" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3"
                >
                  <stat.icon className="w-8 h-8 text-[#D4AF37]" />
                  <div>
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-8"
            >
                <Link href ="/contact"> 
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] text-black font-black text-lg rounded-full overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#ff0000] to-[#ff6666]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Experience the Artistry
                  <Sparkles className="w-5 h-5" />
                </span>
               
              </motion.button>
               </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Quote Section with Interactive DOLCE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 lg:mt-32 relative"
        >
          {/* Interactive DOLCE Text - Responsive for all screens */}
          <div className="flex h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] -mb-24 sm:-mb-32 md:-mb-40 lg:-mb-48">
            <TextHoverEffect text="DOLCE" className="z-0" />
          </div>

          {/* Quote on top of DOLCE */}
          <div className="relative z-10 text-center px-4">
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-white/40 italic max-w-4xl mx-auto leading-relaxed">
              "Hair is not just my profession—
              <br />
              <span className="text-[#D4AF37]">it's my canvas, my passion, my art.</span>"
            </p>
            <p className="text-xs sm:text-sm text-white/30 mt-4 sm:mt-6 tracking-[0.2em] sm:tracking-[0.3em]">— HAITHAM AL-ABADI</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsSection;