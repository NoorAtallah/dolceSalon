"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Sparkles, Star } from 'lucide-react';

const GallerySection = () => {
  return (
    <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#D4AF37]/5 to-black">
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#ff0000] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Sparkles className="h-12 w-12 md:h-16 md:w-16 text-[#D4AF37]" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6">
            Our Transformations
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            See the artistry and excellence in every style we create
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
            "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
            "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&q=80",
            "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80",
            "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
            "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#D4AF37]/20 shadow-2xl group cursor-pointer"
            >
              <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6"
              >
                <div className="flex items-center gap-2 text-white">
                  <Star className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37] fill-[#D4AF37]" />
                  <span className="text-xs sm:text-sm font-bold">View Style</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;