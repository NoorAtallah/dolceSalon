"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Crown, Calendar, ArrowRight, Instagram, Facebook } from 'lucide-react';

const FinalCTASection = () => {
  const socialMedia = [
    { 
      Icon: Instagram, 
      color: "hover:bg-[#E4405F]",
      href: "https://www.instagram.com/dolce_e_luce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
    },
    { 
      Icon: Facebook, 
      color: "hover:bg-[#1877F2]",
      href: "https://web.facebook.com/people/Dolce-e-Luce/61556628203646/"
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=2000&q=80"
          alt="Final CTA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-[#D4AF37] rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto relative z-10 px-4 sm:px-6"
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Crown className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-6 md:mb-8 text-[#D4AF37]" />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8"
        >
          Ready to Transform?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Join thousands of satisfied clients who trust us with their beauty journey
        </motion.p>
        <motion.a
          href="https://www.instagram.com/dolce_e_luce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.4 }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 md:gap-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] px-10 sm:px-12 md:px-14 py-5 sm:py-6 md:py-7 text-lg sm:text-xl md:text-2xl font-black text-black shadow-2xl relative overflow-hidden group mb-12 md:mb-16"
        >
          <motion.div
            className="absolute inset-0 bg-white/30"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
          <Calendar className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 relative z-10" />
          <span className="relative z-10">Schedule Consultation</span>
          <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 relative z-10" />
        </motion.a>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 md:gap-6"
        >
          {socialMedia.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full p-4 md:p-5 text-white transition-all duration-300 ${social.color}`}
            >
              <social.Icon className="h-6 w-6 md:h-7 md:w-7" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FinalCTASection;