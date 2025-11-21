"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Clock, AlertCircle, Calendar, CreditCard, Phone, Shield, CheckCircle, XCircle, Sparkles } from 'lucide-react';

const CancellationPolicyPage = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const policyPoints = [
    {
      icon: Calendar,
      title: "Appointment Reservation",
      description: "When you book your appointment, you are holding a space on our calendar that is no longer available to our other clients.",
      color: "#D4AF37"
    },
    {
      icon: Phone,
      title: "Respectful Cancellation",
      description: "In order to be respectful of your fellow clients, please call our salon as soon as you know you will not be able to make your appointment.",
      color: "#D4AF37"
    },
    {
      icon: Clock,
      title: "24 Hour Notice Required",
      description: "If 24 hour notice is not given, the card on file will be charged 50% of your scheduled service.",
      color: "#ff0000"
    },
    {
      icon: XCircle,
      title: "No Show Appointments",
      description: "No shows are included under this policy and will be charged for the entire amount of the service booked.",
      color: "#ff0000"
    }
  ];

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      
      {/* Hero Section */}
      <section className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center relative overflow-hidden px-4 py-20 mt-16">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.02, duration: 1 }}
              style={{
                top: `${i * 5}%`,
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
          className="absolute top-10 right-5 md:top-20 md:right-20 w-32 h-32 md:w-48 md:h-48 border-2 border-[#D4AF37]/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-5 md:bottom-20 md:left-20 w-40 h-40 md:w-64 md:h-64 border-2 border-[#ff0000]/20"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />

        <div className="text-center relative z-10 max-w-5xl mx-auto">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6 md:mb-8"
            >
              <Shield className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#D4AF37]" />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] font-black leading-none tracking-tighter mb-4 md:mb-6">
              <motion.span 
                className="text-white block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                CANCELLATION
              </motion.span>
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#ff0000] to-[#D4AF37] bg-[length:200%_auto] block"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                POLICY
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-base md:text-xl lg:text-2xl text-white/60 mb-4 md:mb-6 px-4">
              Important Information About Your Appointment
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
        </div>
      </section>

      {/* Policy Cards Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#ff0000]">POLICIES</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
              Please review our cancellation and no-show policy before booking
            </p>
          </motion.div>

          {/* Policy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {policyPoints.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative h-full p-6 md:p-8 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-black via-black to-black">
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${policy.color}20, transparent)`,
                    }}
                  />

                  {/* Corner Accents */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 transition-colors duration-500"
                    style={{ borderColor: policy.color }}
                  />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 transition-colors duration-500"
                    style={{ borderColor: policy.color }}
                  />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 transition-colors duration-500"
                    style={{ borderColor: policy.color }}
                  />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 transition-colors duration-500"
                    style={{ borderColor: policy.color }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: index * 0.15 + 0.2 }}
                      className="mb-4 md:mb-6"
                    >
                      <policy.icon 
                        className="w-10 h-10 md:w-12 md:h-12 transition-all duration-500"
                        style={{ color: policy.color }}
                      />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-3 md:mb-4 leading-tight">
                      {policy.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                      {policy.description}
                    </p>

                    {/* Decorative Line */}
                    <motion.div
                      className="mt-4 md:mt-6 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                      style={{ backgroundColor: policy.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points Summary */}
      <section className="py-16 md:py-20 lg:py-24 px-4 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#ff0000]/5" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              KEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#ff0000]">HIGHLIGHTS</span>
            </h2>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            {/* 24 Hour Notice */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-black/40 border border-[#D4AF37]/30 backdrop-blur-sm"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#f4d03f] flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
                  24 Hour Notice = <span className="text-[#D4AF37]">No Charge</span>
                </h3>
                <p className="text-white/70 text-sm md:text-base">
                  Cancel with at least 24 hours notice and you won't be charged any cancellation fee
                </p>
              </div>
            </motion.div>

            {/* Late Cancellation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-black/40 border border-[#ff0000]/30 backdrop-blur-sm"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#ff0000] to-[#ff4444] flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
                  Late Cancellation = <span className="text-[#ff0000]">50% Charge</span>
                </h3>
                <p className="text-white/70 text-sm md:text-base">
                  Less than 24 hours notice will result in a 50% charge of your scheduled service
                </p>
              </div>
            </motion.div>

            {/* No Show */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-black/40 border border-[#ff0000]/30 backdrop-blur-sm"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#ff0000] to-[#cc0000] flex items-center justify-center">
                  <CreditCard className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
                  No Show = <span className="text-[#ff0000]">100% Charge</span>
                </h3>
                <p className="text-white/70 text-sm md:text-base">
                  Missing your appointment without notice will result in a full charge for the service
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#D4AF37]/5 to-black" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="mb-6 md:mb-8"
          >
            <Phone className="w-12 h-12 md:w-16 md:h-16 text-[#D4AF37] mx-auto" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
            Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#ff0000]">Cancel?</span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-white/70 mb-6 md:mb-8 leading-relaxed">
            Please contact us as soon as possible if you need to cancel or reschedule your appointment. 
            We appreciate your understanding and cooperation in helping us serve all our clients better.
          </p>

          <motion.a
            href="https://www.instagram.com/dolce_e_luce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
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
              <div className="relative bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] text-black font-black text-sm md:text-lg lg:text-xl px-6 py-3 md:px-10 md:py-5 lg:px-12 lg:py-6 flex items-center justify-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span>CONTACT US</span>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </section>

      {/* Bottom Message */}
      <section className="py-12 md:py-16 px-4 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div 
              className="h-[2px] w-6 md:w-8 bg-[#D4AF37]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
            <motion.div 
              className="h-[2px] w-6 md:w-8 bg-[#D4AF37]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
          </div>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-white/60 italic">
            Thank you for choosing <span className="text-[#D4AF37] font-bold">Dolce e Luce</span>
          </p>
          <p className="text-sm md:text-base text-white/40 mt-2">
            Where luxury meets excellence
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default CancellationPolicyPage;