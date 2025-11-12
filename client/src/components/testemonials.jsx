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
      className={`absolute left-0 top-0 h-[450px] w-[350px] select-none rounded-2xl md:rounded-3xl border-2 ${
        position === "front" ? "border-[#D4AF37]" : position === "middle" ? "border-[#ff0000]/50" : "border-[#D4AF37]/30"
      } bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-xl shadow-2xl ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      } overflow-hidden`}
    >
      {/* Background Gradient Accent */}
      <div className={`absolute top-0 right-0 w-40 h-40 ${
        position === "front" ? "bg-[#D4AF37]" : position === "middle" ? "bg-[#ff0000]" : "bg-[#D4AF37]"
      } opacity-10 rounded-full blur-3xl`} />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 space-y-6">
        {/* Quote Icon */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`${position === "front" ? "text-[#D4AF37]" : position === "middle" ? "text-[#ff0000]" : "text-[#D4AF37]/70"}`}
        >
          <Quote className="h-10 w-10 md:h-12 md:w-12" fill="currentColor" />
        </motion.div>

        {/* Avatar */}
        <div className="relative">
          <div className={`absolute inset-0 ${
            position === "front" ? "bg-[#D4AF37]" : position === "middle" ? "bg-[#ff0000]" : "bg-[#D4AF37]"
          } rounded-full blur-xl opacity-40`} />
          <img
            src={image}
            alt={`Avatar of ${author}`}
            className={`pointer-events-none relative h-28 w-28 md:h-32 md:w-32 rounded-full border-4 ${
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
                className={`h-4 w-4 ${
                  position === "front" ? "text-[#D4AF37] fill-[#D4AF37]" : 
                  position === "middle" ? "text-[#ff0000] fill-[#ff0000]" : 
                  "text-[#D4AF37]/70 fill-[#D4AF37]/70"
                }`} 
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Text */}
        <p className={`text-center text-base md:text-lg leading-relaxed ${
          position === "front" ? "text-white" : position === "middle" ? "text-white/90" : "text-white/70"
        } font-medium italic px-2`}>
          "{testimonial}"
        </p>

        {/* Author Info */}
        <div className="text-center space-y-1">
          <p className={`text-lg md:text-xl font-black ${
            position === "front" ? "text-[#D4AF37]" : position === "middle" ? "text-[#ff0000]" : "text-[#D4AF37]/70"
          }`}>
            {author}
          </p>
          <p className={`text-sm ${
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
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50 font-bold uppercase tracking-wider"
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
    <div className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#ff0000]/5 to-black min-h-screen flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#D4AF37] rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#ff0000] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-[#ff0000] mx-auto mb-4 md:mb-6" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 md:mb-6">
            What Our Clients
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#ff0000] to-[#D4AF37] bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Real transformations, real stories. Hear from our satisfied clients.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="grid place-content-center overflow-visible">
          <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
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

        {/* Instruction Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-white/60 text-sm md:text-base font-semibold mb-3">
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
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mt-16 md:mt-20"
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
              className="text-center bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6"
            >
              <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-[#D4AF37] to-[#ff0000] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/70 font-semibold">
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