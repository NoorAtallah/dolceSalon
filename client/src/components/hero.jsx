"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Sparkles, 
  Star, 
  Calendar,
  Award,
  Users,
  Heart,
  Clock,
  MapPin,
  Phone,
  Crown,
  Gift,
  Smile,
  Zap,
  Scissors,
  ArrowRight
} from 'lucide-react';

const FloatingElement = ({ children, delay = 0, duration = 3 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0, 1, 1, 0],
      y: [20, -100],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatDelay: 2,
    }}
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 md:pt-28">
      {/* Large Hero Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="/images/34.jpeg"
          alt="Salon Hero"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 md:top-20 left-10 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-[#D4AF37] rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-[#ff0000] rounded-full blur-3xl"
        />

        {/* Floating Icons */}
        <div className="absolute inset-0 hidden md:block">
          {[Sparkles, Star, Crown, Scissors, Heart, Gift, Smile, Zap].map((Icon, i) => (
            <FloatingElement key={i} delay={i * 0.6} duration={3 + (i % 3)}>
              <div 
                className={`absolute ${i % 2 === 0 ? 'text-[#D4AF37]/40' : 'text-[#ff0000]/40'}`}
                style={{
                  left: `${(i * 12 + 5) % 95}%`,
                  top: `${(i * 11 + 10) % 85}%`,
                }}
              >
                <Icon className="h-6 w-6 md:h-8 md:w-8" />
              </div>
            </FloatingElement>
          ))}
        </div>

        {/* Floating Salon Images */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {[
            { img: "/images/25.png", pos: "top-24 left-[8%]", delay: 0 },
            { img: "/images/21.jpeg", pos: "top-32 right-[10%]", delay: 2 },
            { img: "/images/18.jpg", pos: "bottom-24 left-[12%]", delay: 4 },
            { img: "/images/20.jpg", pos: "bottom-32 right-[8%]", delay: 6 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ 
                opacity: [0, 0.7, 0.7, 0],
                scale: [0, 1, 1, 0],
                rotate: [-20, 0, 0, 20],
                y: [0, -30, -30, -60]
              }}
              transition={{ 
                duration: 10,
                delay: item.delay,
                repeat: Infinity,
                repeatDelay: 12
              }}
              className={`absolute ${item.pos} w-32 h-32 md:w-40 md:h-40 rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-[#D4AF37]/50 shadow-2xl`}
            >
              <img src={item.img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-6xl mx-auto relative z-10 px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        {/* Top Badge Row with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8"
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 md:gap-2 rounded-full border-2 border-[#D4AF37]/50 bg-[#D4AF37]/20 px-3 sm:px-4 md:px-6 py-2 md:py-3 text-xs sm:text-sm font-bold text-[#D4AF37] shadow-lg backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Crown className="h-4 w-4 md:h-5 md:w-5" />
            </motion.div>
            Premium Salon
          </motion.span>
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 md:gap-2 rounded-full border-2 border-[#ff0000]/50 bg-[#ff0000]/20 px-3 sm:px-4 md:px-6 py-2 md:py-3 text-xs sm:text-sm font-bold text-[#ff0000] shadow-lg backdrop-blur-sm"
          >
            <Award className="h-4 w-4 md:h-5 md:w-5" />
            Award Winning
          </motion.span>
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 md:gap-2 rounded-full border-2 border-[#D4AF37]/50 bg-[#D4AF37]/20 px-3 sm:px-4 md:px-6 py-2 md:py-3 text-xs sm:text-sm font-bold text-[#D4AF37] shadow-lg backdrop-blur-sm"
          >
            <Star className="h-4 w-4 md:h-5 md:w-5 fill-[#D4AF37]" />
            5 Star Rated
          </motion.span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-white mb-6 md:mb-8 drop-shadow-2xl"
        >
          Discover Your{" "}
          <motion.span 
            className="bg-gradient-to-r from-[#D4AF37] via-[#ff0000] to-[#D4AF37] bg-clip-text text-transparent bg-[length:200%_auto]"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            Signature Look
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
        >
          Experience luxury redefined with our master stylists and personalized treatments
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto"
        >
          {[
            { icon: Award, label: "Award Winning", value: "20+ Years", color: "gold" },
            { icon: Users, label: "Happy Clients", value: "50K+", color: "red" },
            { icon: Heart, label: "Satisfaction", value: "98%", color: "gold" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
              className={`bg-gradient-to-br ${stat.color === 'gold' ? 'from-[#D4AF37]/20 to-[#D4AF37]/10' : 'from-[#ff0000]/20 to-[#ff0000]/10'} backdrop-blur-md border-2 ${stat.color === 'gold' ? 'border-[#D4AF37]/50' : 'border-[#ff0000]/50'} rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl`}
            >
              <stat.icon className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-2 md:mb-4 ${stat.color === 'gold' ? 'text-[#D4AF37]' : 'text-[#ff0000]'}`} />
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 md:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
        >
          <motion.a 
            href="https://www.vagaro.com/dolceeluce?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGny8AvlZhq4LbwBQg0pz2PyblKixwsr0zbzqdeW19Mipj3yK76MEJCIB12EAg_aem_KftGRU_--qPn16UeGL1gIw"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 md:gap-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] px-8 sm:px-10 md:px-12 py-4 md:py-6 text-base sm:text-lg md:text-xl font-black text-black shadow-2xl relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-white/30"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <Calendar className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 relative z-10" />
            <span className="relative z-10">Book Appointment</span>
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 relative z-10" />
          </motion.a>

          <motion.a 
            href="tel:+14074517828"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 md:gap-3 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 px-8 sm:px-10 md:px-12 py-4 md:py-6 text-base sm:text-lg md:text-xl font-bold text-white shadow-2xl"
          >
            <Phone className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
            <span>Call Us Now</span>
          </motion.a>
        </motion.div>

        {/* Quick Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 md:mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 text-sm md:text-base text-white"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 md:px-6 py-2.5 md:py-3 border border-white/20">
            <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37]" />
            <span className="font-semibold">Open daily: 10AM–6pm</span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 md:px-6 py-2.5 md:py-3 border border-white/20">
            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37]" />
            <span className="font-semibold">12926 Tanja King Blvd</span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 md:px-6 py-2.5 md:py-3 border border-white/20">
            <Phone className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37]" />
            <span className="font-semibold">(407) 451-7828</span>
          </div>
        </motion.div>
   <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <a
              href="/policy"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors text-sm font-bold group"
            >
              <span className="w-8 h-[2px] bg-white/20 group-hover:bg-[#D4AF37] transition-colors"></span>
              View Cancellation Policy
              <span className="w-8 h-[2px] bg-white/20 group-hover:bg-[#D4AF37] transition-colors"></span>
            </a>
          </motion.div>
        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center gap-3 text-white text-sm uppercase tracking-widest font-bold">
            <span className="bg-[#D4AF37]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D4AF37]/30">Explore More</span>
            <motion.div 
              animate={{ 
                height: [40, 70, 40],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-[3px] bg-gradient-to-b from-[#D4AF37] via-[#ff0000] to-transparent rounded-full"
            />
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default HeroSection;