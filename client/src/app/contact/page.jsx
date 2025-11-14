"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MapPin, Mail, Phone, Clock, Instagram, Facebook, ArrowRight } from 'lucide-react';

const ContactUsPage = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="bg-black">
      
      {/* Section 1: Hero Title */}
      <motion.section 
        style={{ opacity: opacity1 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
      >
        {/* Background Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full"
              style={{
                top: `${i * 2}%`,
                background: i % 2 === 0 ? '#D4AF37' : '#ff0000',
              }}
            />
          ))}
        </div>

        <div className="text-center relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black leading-none tracking-tighter">
              <span className="text-white">GET IN</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#ff0000] to-[#D4AF37]">
                TOUCH
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/40 text-xl md:text-2xl mt-8 tracking-[0.3em] uppercase"
          >
            Scroll Down
          </motion.p>
          
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8"
          >
            <div className="w-[2px] h-16 bg-gradient-to-b from-[#D4AF37] to-transparent mx-auto" />
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Large Salon Image */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="max-w-7xl w-full relative"
        >
          <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
            {/* Replace with your salon image */}
            <motion.img
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80"
              alt="Dolce e Luce Salon"
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            
            {/* Text Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-8 md:left-16 right-8 md:right-16"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4">
                DOLCE <span className="text-[#D4AF37]">E</span> LUCE
              </h2>
              <p className="text-white/80 text-lg md:text-2xl">Orlando's Premier Destination</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Contact Details - Stacked */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto space-y-32">
          
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-l-4 border-[#D4AF37] pl-8 md:pl-12">
              <p className="text-white/30 text-sm uppercase tracking-[0.3em] mb-4">Location</p>
              <a 
                href="https://maps.app.goo.gl/TvK1sdv4SbLLMvef6"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 group-hover:text-[#D4AF37] transition-colors">
                  12926 Tanja King Blvd
                </h3>
                <p className="text-2xl md:text-3xl text-white/60">Orlando, Florida, USA</p>
                <div className="flex items-center gap-3 mt-6 text-[#D4AF37] group-hover:gap-6 transition-all">
                  <span className="text-lg">Get Directions</span>
                  <ArrowRight className="w-6 h-6" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-r-4 border-[#ff0000] pr-8 md:pr-12 text-right">
              <p className="text-white/30 text-sm uppercase tracking-[0.3em] mb-4">Phone</p>
              <a 
                href="tel:4074517828"
                className="group"
              >
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 group-hover:text-[#ff0000] transition-colors">
                  (407) 451-7828
                </h3>
                <p className="text-2xl md:text-3xl text-white/60">Call us today</p>
              </a>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-l-4 border-[#D4AF37] pl-8 md:pl-12">
              <p className="text-white/30 text-sm uppercase tracking-[0.3em] mb-4">Email</p>
              <a 
                href="mailto:info@dolceelucesalon.com"
                className="group"
              >
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 group-hover:text-[#D4AF37] transition-colors break-all">
                  info@dolceelucesalon.com
                </h3>
                <p className="text-2xl md:text-3xl text-white/60">Drop us a line</p>
              </a>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-r-4 border-[#ff0000] pr-8 md:pr-12 text-right">
              <p className="text-white/30 text-sm uppercase tracking-[0.3em] mb-4">Hours</p>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                9AM - 8PM
              </h3>
              <p className="text-2xl md:text-3xl text-white/60 mb-2">Monday - Saturday</p>
              <p className="text-xl md:text-2xl text-white/40">Sunday: Closed</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Section 4: Map - Full Width */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5858997476196!2d-81.20677492447624!3d28.548634575703434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ee2b1c0e05d%3A0x8f3e3e3e3e3e3e3e!2s12926%20Tanja%20King%20Blvd%2C%20Orlando%2C%20FL%2032828!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Section 5: Social & CTA */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-white/30 text-sm uppercase tracking-[0.3em] mb-12">Follow Our Journey</p>
            <div className="flex justify-center gap-8">
              <motion.a
                href="https://www.instagram.com/dolce_e_luce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group"
              >
                <Instagram className="w-16 h-16 md:w-20 md:h-20 text-white/40 group-hover:text-[#D4AF37] transition-colors" />
              </motion.a>
              <motion.a
                href="https://web.facebook.com/people/Dolce-e-Luce/61556628203646/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="group"
              >
                <Facebook className="w-16 h-16 md:w-20 md:h-20 text-white/40 group-hover:text-[#D4AF37] transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8">
              Ready to Transform?
            </h3>
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto">
              Book your appointment and experience the artistry of Dolce e Luce
            </p>
            
            <motion.a
              href="tel:4074517828"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#ff0000] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <a href="https://www.instagram.com/dolce_e_luce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"> 
                <div className="relative bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] text-black font-black text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8">
                  BOOK NOW
                </div>
                </a>
              </div>
            </motion.a>
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-32"
          >
            <p className="text-2xl md:text-4xl font-light text-white/20 italic">
              "We can't wait to meet you"
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default ContactUsPage;