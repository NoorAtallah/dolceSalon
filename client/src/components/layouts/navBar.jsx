"use client"

import * as React from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { 
  Calendar,
  Menu,
  X,
  Crown,
  Sparkles,
  Phone,
  MapPin
} from 'lucide-react';

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
  { label: "Cancelation Policy", href: "/policy" },
];

const SalonNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname() || "/";
  const { scrollY } = useScroll();
  
  // Transform navbar on scroll
  const navbarBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.85)"]
  );
  
  const navbarBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(16px)"]
  );

  const navbarBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(212, 175, 55, 0)", "rgba(212, 175, 55, 0.2)"]
  );

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: navbarBg,
          backdropFilter: navbarBlur,
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        {/* Top Info Bar - Only visible when not scrolled */}
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          animate={{
            height: scrolled ? 0 : "auto",
            opacity: scrolled ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden border-b border-[#D4AF37]/20"
        >
          <div className="container mx-auto px-6 py-2">
            <div className="flex flex-wrap justify-between items-center text-xs md:text-sm">
              <div className="flex items-center gap-6 text-white/70">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 text-[#D4AF37]" />
                  <span>(407) 451-7828</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-[#D4AF37]" />
                  <span>12926 Tanja King Blvd</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <span className="hidden md:inline">Open daily: 10AM–6pm</span>
                <span className="text-[#D4AF37]">•</span>
                <span className="flex items-center gap-1">
                  <Crown className="h-3 w-3 text-[#D4AF37]" />
                  Premium Salon
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Navbar */}
        <motion.div
          style={{
            borderBottomColor: navbarBorder,
          }}
          className="border-b"
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#ff0000] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-[#D4AF37] to-[#f4d03f] rounded-full p-2">
                    <img
                      src="/images/2.png"
                      alt="Dolce e Luce Salon Logo"
                      className="h-10 w-10 md:h-12 md:w-12 object-contain"
                    />
                  </div>
                </motion.div>
                <div>
                  <h1 className="text-2xl font-black text-white tracking-tight">
                    Dolce e Luce 
                    {/* <span className="bg-gradient-to-r from-[#D4AF37] to-[#ff0000] bg-clip-text text-transparent ml-2">
                      SALON
                    </span> */}
                  </h1>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">Where Passion Meets Fashion</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link key={item.href} href={item.href}>
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative px-5 py-2 group"
                      >
                        <span
                          className={`text-sm font-bold tracking-wide transition-colors relative z-10 ${
                            isActive
                              ? "text-[#D4AF37]"
                              : "text-white/80 group-hover:text-white"
                          }`}
                        >
                          {item.label}
                        </span>
                        
                        {/* Hover Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-[#ff0000]/10 opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.05 }}
                        />
                        
                        {/* Active Indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/50 bg-[#D4AF37]/10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        
                        {/* Bottom Line */}
                        <motion.div
                          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#ff0000] transition-all ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              {/* Book Online Button & Mobile Menu */}
              <div className="flex items-center gap-4">
                {/* Desktop Book Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="hidden lg:block"
                >
                  <Link href="https://www.vagaro.com/dolceeluce?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGny8AvlZhq4LbwBQg0pz2PyblKixwsr0zbzqdeW19Mipj3yK76MEJCIB12EAg_aem_KftGRU_--qPn16UeGL1gIw">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] px-6 py-3 text-sm font-black text-black shadow-lg overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <Calendar className="h-4 w-4 relative z-10" />
                      <span className="relative z-10">Book Online</span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-2 w-2 rounded-full bg-black relative z-10"
                      />
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden relative w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#ff0000]/20 border border-[#D4AF37]/30 flex items-center justify-center text-white backdrop-blur-md"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-black via-black/95 to-black border-l border-[#D4AF37]/20 overflow-y-auto"
            >
              {/* Close Button */}
              <div className="absolute top-6 right-6 z-10">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#ff0000]/20 border-2 border-[#D4AF37]/50 flex items-center justify-center text-white hover:bg-[#D4AF37]/30 transition-all"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Mobile Menu Header */}
              <div className="p-6 pt-20 border-b border-[#D4AF37]/20">
                {/* Mobile Quick Info */}
                <div className="space-y-3 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#D4AF37]" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#D4AF37]" />
                    <span>Downtown Location</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Crown className="h-4 w-4 text-[#D4AF37]" />
                    <span>Mon-Sat: 9AM-8PM</span>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="p-6 space-y-2">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={item.href} onClick={() => setIsOpen(false)}>
                        <motion.div
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative px-6 py-4 rounded-2xl transition-all ${
                            isActive
                              ? "bg-gradient-to-r from-[#D4AF37]/20 to-[#ff0000]/20 border-2 border-[#D4AF37]/50"
                              : "bg-white/5 border-2 border-white/10 hover:border-[#D4AF37]/30"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-lg font-bold ${
                                isActive ? "text-[#D4AF37]" : "text-white"
                              }`}
                            >
                              {item.label}
                            </span>
                            {isActive && (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="h-2 w-2 rounded-full bg-[#D4AF37]"
                              />
                            )}
                          </div>
                          {isActive && (
                            <motion.div
                              layoutId="activeMobile"
                              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D4AF37]/10 to-[#ff0000]/10"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Book Button */}
              <div className="p-6 border-t border-[#D4AF37]/20">
                <Link href="/book" onClick={() => setIsOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] px-8 py-5 text-lg font-black text-black shadow-2xl overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <Calendar className="h-6 w-6 relative z-10" />
                    <span className="relative z-10">Book Online</span>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-2 w-2 rounded-full bg-black relative z-10"
                    />
                  </motion.button>
                </Link>

                {/* Mobile Social Links */}
                <div className="mt-6 flex justify-center gap-4">
                  {["Instagram", "Facebook", "Twitter"].map((social, i) => (
                    <motion.a
                      key={social}
                      href="#"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
                    >
                      <span className="text-xs font-bold">{social[0]}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-20 right-10 w-40 h-40 bg-[#D4AF37] rounded-full blur-3xl opacity-10 pointer-events-none" />
              <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#ff0000] rounded-full blur-3xl opacity-10 pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SalonNavbar;