"use client";
import React from "react";
import Link from "next/link";
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
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Our Services", href: "/services" },
        { label: "Our Portfolio", href: "/portfolio" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#D4AF37]" />,
      text: "info@dolceelucesalon.com",
      href: "mailto:info@dolceelucesalon.com",
    },
    {
      icon: <Phone size={18} className="text-[#D4AF37]" />,
      text: "(407) 451-7828",
      href: "tel:+4074517828",
    },
    {
      icon: <MapPin size={18} className="text-[#D4AF37]" />,
      text: "12926 Tanja King Blvd",
    },
    {
      icon: <Clock size={18} className="text-[#D4AF37]" />,
      text: "Mon-Sat: 9AM-8PM",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "https://web.facebook.com/people/Dolce-e-Luce/61556628203646/" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/dolce_e_luce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" },
   
  ];

  return (
    <footer className="bg-black relative h-fit overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-[#D4AF37] text-3xl font-extrabold">
               <img src="/images/2.png" alt="Dolce e Luce Logo" className="w-10 h-10 object-contain" />
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
              <span>20+ Years of Excellence</span>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
                {section.title}
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative group">
                    <Link href={link.href} className="hover:text-[#D4AF37] transition-all duration-300 flex items-center gap-2 text-white/70">
                      <span className="w-0 h-[2px] bg-[#D4AF37] group-hover:w-3 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-white text-lg font-semibold mb-6 flex items-center gap-2">
              Contact Us
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#ff0000] to-transparent"></div>
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 group">
                  <div className="mt-0.5">{item.icon}</div>
                  {item.href ? (
                    <a href={item.href} className="hover:text-[#D4AF37] transition-colors text-white/70 text-sm">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/70 text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>

           
          </div>
        </div>

        <hr className="border-t border-gray-700/50 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} className="hover:text-[#D4AF37] transition-all duration-300 hover:scale-110 transform">
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-center md:text-left text-white/60">
            &copy; {new Date().getFullYear()} Dolce e Luce. All rights reserved.
          </p>

          {/* <div className="flex gap-4 text-white/60 text-xs">
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
          </div> */}
        </div>
      </div>

      <div className="flex h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-52 -mb-16 sm:-mb-20 md:-mb-28 lg:-mb-36">
        <TextHoverEffect text="DOLCE" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default SalonFooter;