'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollExpandMediaClient = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const touchStartY = useRef(0);
  const sectionRef = useRef(null);

  // Mount detection
  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!touchStartY.current) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        touchStartY.current = touchY;
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = 0;
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded && window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [mounted, scrollProgress, mediaFullyExpanded]);

  // Don't render until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#D4AF37] text-xl">Loading...</div>
      </div>
    );
  }

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  const titleWords = title ? title.split(' ') : [];
  const firstWord = titleWords[0] || '';
  const restOfTitle = titleWords.slice(1).join(' ') || '';

  return (
    <div ref={sectionRef} className="overflow-x-hidden bg-black">
      <section className="relative flex flex-col items-center justify-start min-h-screen bg-black">
        <div className="relative w-full flex flex-col items-center min-h-screen bg-black">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 h-full transition-opacity duration-100"
            style={{ opacity: 1 - scrollProgress }}
          >
            <div className="relative w-full h-full">
              <Image
                src={bgImageSrc}
                alt="Background"
                fill
                className="object-cover"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-screen relative">
              {/* Media Container */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
                style={{
                  width: `${Math.min(mediaWidth, window.innerWidth * 0.95)}px`,
                  height: `${Math.min(mediaHeight, window.innerHeight * 0.85)}px`,
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {mediaType === 'video' ? (
                  <div className="relative w-full h-full">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 bg-black/30 transition-opacity duration-200"
                      style={{ opacity: 0.5 - scrollProgress * 0.3 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div 
                      className="absolute inset-0 bg-black/50 transition-opacity duration-200"
                      style={{ opacity: 0.7 - scrollProgress * 0.3 }}
                    />
                  </div>
                )}
              </div>

              {/* Text Labels */}
              <div className="flex flex-col items-center text-center relative z-10 mt-4">
                {date && (
                  <p
                    className="text-2xl text-[#D4AF37] transition-transform duration-100"
                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  >
                    {date}
                  </p>
                )}
                {scrollToExpand && (
                  <p
                    className="text-white/60 font-medium text-center transition-transform duration-100"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {scrollToExpand}
                  </p>
                )}
              </div>

              {/* Title */}
              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col ${
                  textBlend ? 'mix-blend-difference' : ''
                }`}
              >
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white transition-transform duration-100"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </h2>
                {restOfTitle && (
                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white transition-transform duration-100"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {restOfTitle}
                  </h2>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div
              className="w-full px-8 py-10 md:px-16 lg:py-20 bg-black transition-opacity duration-700"
              style={{ opacity: showContent ? 1 : 0 }}
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMediaClient;