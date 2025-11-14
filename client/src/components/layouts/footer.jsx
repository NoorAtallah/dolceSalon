"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Clock,
  Scissors,
} from "lucide-react";
import { FooterBackgroundGradient } from "./Footerbackgroundgradient";
import { TextHoverEffect } from "./exthovereffect";

function SalonFooter() {
  // Footer link data
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#about" },
        { label: "Our Services", href: "#services" },
        { label: "Our Portfolio", href: "#portfolio" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { label: "Hair Styling", href: "#" },
        { label: "Hair Coloring", href: "#" },
        { label: "Spa Treatments", href: "#" },
        { label: "Bridal Services", href: "#" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#D4AF37]" />,
      text: "hello@dolceeluce.com",
      href: "mailto:hello@dolceeluce.com",
    },
    {
      icon: <Phone size={18} className="text-[#D4AF37]" />,
      text: "(555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin size={18} className="text-[#D4AF37]" />,
      text: "Downtown Location",
    },
    {
      icon: <Clock size={18} className="text-[#D4AF37]" />,
      text: "Mon-Sat: 9AM-8PM",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-black relative h-fit overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-[#D4AF37] text-3xl font-extrabold">
                <Scissors className="h-8 w-8" />
              </span>
              <span className="text-white text-3xl font-bold">
                Dolce<span className="text-[#D4AF37]"> e </span>Luce
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Where beauty transforms into art. Experience luxury and elegance with our award-winning team of master stylists.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
              <span>15+ Years of Excellence</span>
            </div>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
                {section.title}
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative group">
                    <a
                      href={link.href}
                      className="hover:text-[#D4AF37] transition-all duration-300 flex items-center gap-2 text-white/70 hover:text-[#D4AF37]"
                    >
                      <span className="w-0 h-[2px] bg-[#D4AF37] group-hover:w-3 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
              Contact Us
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#ff0000] to-transparent"></div>
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 group">
                  <div className="mt-0.5">{item.icon}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#D4AF37] transition-colors text-white/70 text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/70 text-sm">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* Book Now Button */}
            <button className="mt-6 w-full bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] text-black font-bold py-3 px-6 rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 text-sm">
              Book Appointment
            </button>
          </div>
        </div>

        <hr className="border-t border-gray-700/50 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#D4AF37] transition-all duration-300 hover:scale-110 transform"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-white/60">
            &copy; {new Date().getFullYear()} Dolce e Luce. All rights reserved.
          </p>

          {/* Additional Links */}
          <div className="flex gap-4 text-white/60 text-xs">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Text hover effect - Responsive for all screens */}
      <div className="flex h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-52 -mb-16 sm:-mb-20 md:-mb-28 lg:-mb-36">
        <TextHoverEffect text="DOLCE" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default SalonFooter;