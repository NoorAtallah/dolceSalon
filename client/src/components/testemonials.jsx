"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Heart, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    testimonial: "Absolutely transformed my look! The team is incredibly talented and made me feel like royalty. Best salon experience ever!",
    author: "Sarah Johnson",
    role: "Fashion Blogger",
    rating: 5,
    image: "https://i.pravatar.cc/128?img=1"
  },
  {
    id: 2,
    testimonial: "I've been coming here for 3 years and they never disappoint. The attention to detail and personalized service is unmatched.",
    author: "Michael Chen",
    role: "Business Executive",
    rating: 5,
    image: "https://i.pravatar.cc/128?img=2"
  },
  {
    id: 3,
    testimonial: "From consultation to final style, everything was perfect. They truly understand hair artistry and made my dream look come true!",
    author: "Emma Davis",
    role: "Interior Designer",
    rating: 5,
    image: "https://i.pravatar.cc/128?img=3"
  }
];

const TestimonialCard = ({ handleShuffle, testimonial, position, id, author, role, rating, image }) => {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  const getPositionStyles = (pos) => {
    switch(pos) {
      case "front":
        return {
          rotate: "-6deg",
          x: "0%",
          scale: 1,
          zIndex: 3
        };
      case "middle":
        return {
          rotate: "0deg",
          x: "33%",
          scale: 0.95,
          zIndex: 2
        };
      case "back":
        return {
          rotate: "6deg",
          x: "66%",
          scale: 0.9,
          zIndex: 1
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      style={{
        zIndex: getPositionStyles(position).zIndex
      }}
      animate={getPositionStyles(position)}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`absolute left-0 top-0 w-full h-full select-none rounded-2xl md:rounded-3xl border-2 ${
        position === "front" ? "border-[#D4AF37]" : position === "middle" ? "border-[#ff0000]/50" : "border-[#D4AF37]/30"
      } bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-xl shadow-2xl ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      } overflow-hidden`}
    >
      {/* Background Gradient Accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 ${
        position === "front" ? "bg-[#D4AF37]" : position === "middle" ? "bg-[#ff0000]" : "bg-[#D4AF37]"
      } opacity-10 rounded-full blur-3xl`} />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 sm:p-8 space-y-4 sm:space-y-6">
        {/* Quote Icon */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`${position === "front" ? "text-[#D4AF37]" : position === "middle" ? "text-[#ff0000]" : "text-[#D4AF37]/70"}`}
        >
          <Quote className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" fill="currentColor" />
        </motion.div>

        {/* Avatar */}
        <div className="relative">
          <div className={`absolute inset-0 ${
            position === "front" ? "bg-[#D4AF37]" : position === "middle" ? "bg-[#ff0000]" : "bg-[#D4AF37]"
          } rounded-full blur-xl opacity-40`} />
          <img
            src={image}
            alt={`Avatar of ${author}`}
            className={`pointer-events-none relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-full border-4 ${
              position === "front" ? "border-[#D4AF37]" : position === "middle" ? "border-[#ff0000]" : "border-[#D4AF37]/50"
            } bg-black object-cover shadow-2xl`}
          />
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Heart 
                className={`h-3 w-3 sm:h-4 sm:w-4 ${
                  position === "front" ? "text-[#D4AF37] fill-[#D4AF37]" : 
                  position === "middle" ? "text-[#ff0000] fill-[#ff0000]" : 
                  "text-[#D4AF37]/70 fill-[#D4AF37]/70"
                }`} 
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Text */}
        <p className={`text-center text-sm sm:text-base md:text-lg leading-relaxed ${
          position === "front" ? "text-white" : position === "middle" ? "text-white/90" : "text-white/70"
        } font-medium italic px-2`}>
          "{testimonial}"
        </p>

        {/* Author Info */}
        <div className="text-center space-y-1">
          <p className={`text-base sm:text-lg md:text-xl font-black ${
            position === "front" ? "text-[#D4AF37]" : position === "middle" ? "text-[#ff0000]" : "text-[#D4AF37]/70"
          }`}>
            {author}
          </p>
          <p className={`text-xs sm:text-sm ${
            position === "front" ? "text-white/70" : position === "middle" ? "text-white/60" : "text-white/50"
          } font-semibold`}>
            {role}
          </p>
        </div>
      </div>

      {/* Swipe Indicator (only on front card) */}
      {isFront && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50 font-bold uppercase tracking-wider"
        >
          ← Swipe to see more
        </motion.div>
      )}
    </motion.div>
  );
};

const TestimonialsShuffleSection = () => {
  const [positions, setPositions] = React.useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#ff0000]/5 to-black min-h-screen flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-[#D4AF37] rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-[#ff0000] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-[#ff0000] mx-auto mb-3 sm:mb-4 md:mb-6" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-3 sm:mb-4 md:mb-6 px-4">
            What Our Clients
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#ff0000] to-[#D4AF37] bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
            Real transformations, real stories. Hear from our satisfied clients.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="flex justify-center items-center overflow-visible px-4 sm:px-6">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] h-[380px] sm:h-[420px] md:h-[450px] lg:h-[480px]">
            {/* Wrapper to contain the stacked cards with proper spacing */}
            <div className="absolute left-0 top-0 w-full h-full">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  {...testimonial}
                  handleShuffle={handleShuffle}
                  position={positions[index]}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Instruction Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 sm:mt-16 md:mt-20 px-4"
        >
          <p className="text-white/60 text-xs sm:text-sm md:text-base font-semibold mb-3">
            💡 Drag the card left to see more testimonials
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-[#ff0000] animate-pulse delay-75" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse delay-150" />
          </div>
        </motion.div>

        {/* Stats Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-3xl mx-auto mt-12 sm:mt-16 md:mt-20 px-4"
        >
          {[
            { value: "50K+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction" },
            { value: "15+", label: "Years Experience" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + (i * 0.1) }}
              className="text-center bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#D4AF37] to-[#ff0000] bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-white/70 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsShuffleSection;