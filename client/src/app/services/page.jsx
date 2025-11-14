"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Scissors, Sparkles, Droplet, Palette, Wand2, Heart, 
  Users, Baby, Waves, Crown, Filter, Search, X,
  Clock, DollarSign, Star, TrendingUp, Award, Zap
} from 'lucide-react';

const ServicesPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [priceRange, setPriceRange] = React.useState({ min: 0, max: 500 });
  const [durationFilter, setDurationFilter] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("popular");
  const [showFilters, setShowFilters] = React.useState(false);

  const allServices = [
    // Haircuts
    { id: 1, name: "Cut & Blow Dry", price: 80, duration: 60, category: "Haircuts", icon: Scissors, popular: true, image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80" },
    { id: 2, name: "Cut & Blow Dry Textured Hair", price: 120, duration: 75, category: "Haircuts", icon: Scissors, image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80" },
    { id: 3, name: "Blow Dry", price: 45, duration: 30, category: "Haircuts", icon: Scissors, popular: true, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
    { id: 4, name: "Blow Dry Textured Hair", price: 60, duration: 45, category: "Haircuts", icon: Scissors, image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" },
    { id: 5, name: "Add Flat Iron/Curling Iron", price: 15, duration: 15, category: "Haircuts", icon: Scissors, image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80" },
    { id: 6, name: "Blow Dry with Extensions", price: 65, duration: 45, category: "Haircuts", icon: Scissors, image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600&q=80" },
    { id: 7, name: "Bridal Up-do", price: 250, duration: 90, category: "Haircuts", icon: Scissors, premium: true, image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
    { id: 8, name: "Up-do/Event Styling", price: 95, duration: 60, category: "Haircuts", icon: Scissors, image: "https://images.unsplash.com/photo-1605980413706-c36dd5d3e6e1?w=600&q=80" },

    // Treatments
    { id: 9, name: "Brazilian Blowout", price: 300, duration: 120, category: "Treatments", icon: Droplet, premium: true, image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80" },
    { id: 10, name: "Brazilian Rewind Treatment", price: 60, duration: 45, category: "Treatments", icon: Droplet, image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80" },
    { id: 11, name: "B3 Brazilian Bond Builder", price: 55, duration: 30, category: "Treatments", icon: Droplet, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
    { id: 12, name: "Brazilian Split Ends", price: 50, duration: 30, category: "Treatments", icon: Droplet, image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" },
    { id: 13, name: "Deep Conditioning", price: 30, duration: 20, category: "Treatments", icon: Droplet, popular: true, image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80" },
    { id: 14, name: "Keratin Treatment", price: 275, duration: 120, category: "Treatments", icon: Droplet, premium: true, image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600&q=80" },
    { id: 15, name: "OLAPLEX", price: 50, duration: 30, category: "Treatments", icon: Droplet, popular: true, image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80" },
    { id: 16, name: "Collagen Treatment", price: 200, duration: 90, category: "Treatments", icon: Droplet, premium: true, image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
    { id: 17, name: "Kérastase Fusio-Dose", price: 45, duration: 30, category: "Treatments", icon: Droplet, image: "https://images.unsplash.com/photo-1605980413706-c36dd5d3e6e1?w=600&q=80" },
    { id: 18, name: "Kérastase Mask", price: 30, duration: 20, category: "Treatments", icon: Droplet, image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80" },

    // Color
    { id: 19, name: "Color Roots", price: 80, duration: 60, category: "Color", icon: Palette, popular: true, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
    { id: 20, name: "Color Melt", price: 95, duration: 90, category: "Color", icon: Palette, image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" },
    { id: 21, name: "Full Color", price: 130, duration: 90, category: "Color", icon: Palette, popular: true, image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80" },
    { id: 22, name: "Platinum Retouch", price: 200, duration: 120, category: "Color", icon: Palette, premium: true, image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600&q=80" },
    { id: 23, name: "Full Hi-Lights", price: 200, duration: 120, category: "Color", icon: Palette, image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80" },
    { id: 24, name: "Partial Hi-Lights", price: 160, duration: 90, category: "Color", icon: Palette, image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
    { id: 25, name: "Babylights", price: 275, duration: 150, category: "Color", icon: Palette, premium: true, image: "https://images.unsplash.com/photo-1605980413706-c36dd5d3e6e1?w=600&q=80" },
    { id: 26, name: "Partial Baby Lights", price: 200, duration: 120, category: "Color", icon: Palette, image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80" },
    { id: 27, name: "Air Touch Full", price: 275, duration: 150, category: "Color", icon: Palette, premium: true, image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80" },
    { id: 28, name: "Air Touch Partial", price: 200, duration: 120, category: "Color", icon: Palette, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
    { id: 29, name: "Full Balayage", price: 240, duration: 150, category: "Color", icon: Palette, popular: true, image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" },
    { id: 30, name: "Partial Balayage", price: 175, duration: 120, category: "Color", icon: Palette, popular: true, image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80" },
    { id: 31, name: "OMBRÉ", price: 260, duration: 150, category: "Color", icon: Palette, image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600&q=80" },
    { id: 32, name: "Toner", price: 45, duration: 30, category: "Color", icon: Palette, image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80" },
    { id: 33, name: "Frame Highlight", price: 110, duration: 75, category: "Color", icon: Palette, image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
    { id: 34, name: "Fantasy Color", price: 120, duration: 120, category: "Color", icon: Palette, image: "https://images.unsplash.com/photo-1605980413706-c36dd5d3e6e1?w=600&q=80" },

    // Nails
    { id: 35, name: "Manicure Gel", price: 35, duration: 45, category: "Nails", icon: Sparkles, popular: true, image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80" },
    { id: 36, name: "Gel X", price: 60, duration: 60, category: "Nails", icon: Sparkles, image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&q=80" },
    { id: 37, name: "Dipping Nails", price: 45, duration: 60, category: "Nails", icon: Sparkles, popular: true, image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80" },
    { id: 38, name: "Dipping with Extensions", price: 55, duration: 75, category: "Nails", icon: Sparkles, image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80" },
    { id: 39, name: "Full Set", price: 55, duration: 75, category: "Nails", icon: Sparkles, image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80" },
    { id: 40, name: "Refill", price: 45, duration: 60, category: "Nails", icon: Sparkles, image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&q=80" },
    { id: 41, name: "Nail Repair", price: 10, duration: 15, category: "Nails", icon: Sparkles, image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80" },

    // Pedicure
    { id: 42, name: "Regular Pedicure", price: 35, duration: 45, category: "Pedicure", icon: Heart, popular: true, image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80" },
    { id: 43, name: "Deep Clean Pedicure", price: 45, duration: 60, category: "Pedicure", icon: Heart, image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80" },
    { id: 44, name: "Deluxe Pedicure", price: 50, duration: 60, category: "Pedicure", icon: Heart, popular: true, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
    { id: 45, name: "Pamper Me Pedicure", price: 60, duration: 75, category: "Pedicure", icon: Heart, image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" },
    { id: 46, name: "Signature Pedicure", price: 65, duration: 75, category: "Pedicure", icon: Heart, image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80" },
    { id: 47, name: "Orange Pedicure", price: 70, duration: 75, category: "Pedicure", icon: Heart, image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600&q=80" },
    { id: 48, name: "Coffee Pedicure", price: 75, duration: 75, category: "Pedicure", icon: Heart, image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80" },
    { id: 49, name: "Reflexology Therapy", price: 85, duration: 90, category: "Pedicure", icon: Heart, premium: true, image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },

    // Waxing & Threading
    { id: 50, name: "Eyebrows (Waxing)", price: 10, duration: 10, category: "Waxing", icon: Wand2, image: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80" },
    { id: 51, name: "Lip (Waxing)", price: 7, duration: 5, category: "Waxing", icon: Wand2, image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80" },
    { id: 52, name: "Chin (Waxing)", price: 10, duration: 10, category: "Waxing", icon: Wand2, image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80" },
    { id: 53, name: "Full Face (Waxing)", price: 38, duration: 30, category: "Waxing", icon: Wand2, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
    { id: 54, name: "Eyebrows (Threading)", price: 20, duration: 15, category: "Threading", icon: Wand2, popular: true, image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" },
    { id: 55, name: "Lips (Threading)", price: 15, duration: 10, category: "Threading", icon: Wand2, image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80" },
    { id: 56, name: "Chin (Threading)", price: 20, duration: 15, category: "Threading", icon: Wand2, image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600&q=80" },
    { id: 57, name: "Full Face (Threading)", price: 50, duration: 45, category: "Threading", icon: Wand2, image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80" },
  ];

  const categories = ["Haircuts", "Treatments", "Color", "Nails", "Pedicure", "Waxing", "Threading"];

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Filter and Sort Logic
  const filteredServices = allServices
    .filter(service => {
      // Search filter
      if (searchQuery && !service.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(service.category)) {
        return false;
      }
      // Price filter
      if (service.price < priceRange.min || service.price > priceRange.max) {
        return false;
      }
      // Duration filter
      if (durationFilter === "quick" && service.duration > 30) return false;
      if (durationFilter === "medium" && (service.duration <= 30 || service.duration > 90)) return false;
      if (durationFilter === "long" && service.duration <= 90) return false;
      
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "duration") return a.duration - b.duration;
      if (sortBy === "popular") return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      return 0;
    });

  // Masonry layout helper
  const getColumnClass = (index) => {
    const patterns = ["row-span-2", "row-span-1", "row-span-1", "row-span-2"];
    return patterns[index % patterns.length];
  };

  return (
    <div className="bg-black min-h-screen">
      
      {/* Hero */}
      <section className="py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#D4AF37]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          <Crown className="w-16 h-16 text-[#D4AF37] mx-auto mb-6 mt-16" />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
          SERVICE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#ff0000]">CATALOG</span>
        </h1>
        <p className="text-lg text-white/60 mb-8">Browse our complete luxury menu</p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto relative"
        >
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-white/40" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-16 pr-6 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-6 top-1/2 -translate-y-1/2"
            >
              <X className="w-5 h-5 text-white/40 hover:text-white transition-colors" />
            </button>
          )}
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-0 z-40 bg-black/95 backdrop-blur-xl border-y border-white/10 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                  showFilters
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] text-black'
                    : 'bg-white/5 text-white border border-white/10'
                }`}
              >
                <Filter className="w-4 h-4" />
                FILTERS
              </button>

              <div className="hidden md:flex items-center gap-2 text-white/60 text-sm">
                <span>{filteredServices.length} services</span>
              </div>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white text-sm font-bold focus:outline-none focus:border-[#D4AF37] cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration: Shortest</option>
            </select>
          </div>

          {/* Expandable Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-6 pb-2 space-y-6 border-t border-white/10">
                  
                  {/* Categories */}
                  <div>
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                      Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <motion.button
                          key={category}
                          onClick={() => toggleCategory(category)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                            selectedCategories.includes(category)
                              ? 'bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] text-black'
                              : 'bg-white/5 text-white/60 border border-white/10 hover:border-[#D4AF37]'
                          }`}
                        >
                          {category}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Price Range */}
                    <div>
                      <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-[#D4AF37]" />
                        Price Range: ${priceRange.min} - ${priceRange.max}
                      </h3>
                      <div className="space-y-3">
                        <input
                          type="range"
                          min="0"
                          max="500"
                          value={priceRange.max}
                          onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                          className="w-full accent-[#D4AF37]"
                        />
                        <div className="flex gap-2">
                          {[50, 100, 200, 300].map((price) => (
                            <button
                              key={price}
                              onClick={() => setPriceRange({ min: 0, max: price })}
                              className="flex-1 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 text-xs font-bold transition-colors"
                            >
                              Under ${price}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Duration */}
                    <div>
                      <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#D4AF37]" />
                        Duration
                      </h3>
                      <div className="flex gap-2">
                        {[
                          { value: "all", label: "All" },
                          { value: "quick", label: "Quick (≤30 min)" },
                          { value: "medium", label: "Medium (31-90 min)" },
                          { value: "long", label: "Long (90+ min)" },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => setDurationFilter(option.value)}
                            className={`flex-1 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                              durationFilter === option.value
                                ? 'bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] text-black'
                                : 'bg-white/5 text-white/60 border border-white/10 hover:border-[#D4AF37]'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {(selectedCategories.length > 0 || priceRange.max < 500 || durationFilter !== "all") && (
                    <button
                      onClick={() => {
                        setSelectedCategories([]);
                        setPriceRange({ min: 0, max: 500 });
                        setDurationFilter("all");
                      }}
                      className="text-[#D4AF37] text-sm font-bold hover:text-[#f4d03f] transition-colors"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Services Masonry Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-white mb-2">No services found</h3>
              <p className="text-white/40">Try adjusting your filters</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[300px] gap-4">
              {filteredServices.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className={`group relative overflow-hidden rounded-3xl cursor-pointer ${getColumnClass(index)}`}
                  >
                    {/* Image Background */}
                    <div className="absolute inset-0">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        style={{ filter: "grayscale(100%)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-black group-hover:via-black/80 transition-all duration-500" />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-20">
                      <div className="flex flex-col gap-2">
                        {service.popular && (
                          <motion.span
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: index * 0.02 + 0.2 }}
                            className="px-3 py-1 bg-gradient-to-r from-[#ff0000] to-[#ff6b6b] text-white text-xs font-black rounded-full flex items-center gap-1 w-fit"
                          >
                            <TrendingUp className="w-3 h-3" />
                            POPULAR
                          </motion.span>
                        )}
                        {service.premium && (
                          <motion.span
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: index * 0.02 + 0.3 }}
                            className="px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] text-black text-xs font-black rounded-full flex items-center gap-1 w-fit"
                          >
                            <Award className="w-3 h-3" />
                            PREMIUM
                          </motion.span>
                        )}
                      </div>
                      
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.02 + 0.1 }}
                        className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center"
                      >
                        <ServiceIcon className="w-5 h-5 text-[#D4AF37]" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.02 + 0.2 }}
                      >
                        {/* Category Tag */}
                        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold rounded-full mb-3">
                          {service.category}
                        </span>

                        {/* Service Name */}
                        <h3 className="text-2xl font-black text-white mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors">
                          {service.name}
                        </h3>

                        {/* Info Row */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4 text-white/60 text-sm">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {service.duration} min
                            </div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between">
                          <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f4d03f]">
                            ${service.price}
                          </div>

                          <motion.a
                            href="tel:4074517828"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Zap className="w-6 h-6 text-black" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>

                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#ff0000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    />

                    {/* Border Animation */}
                    <motion.div
                      className="absolute inset-0 border-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"
                    />
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#ff0000]">Book?</span>
          </h2>
          <p className="text-xl text-white/60 mb-8">
            Call us now to schedule your luxury experience
          </p>
          <motion.a
            href="tel:4074517828"
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
              <div className="relative bg-gradient-to-r from-[#D4AF37] to-[#f4d03f] text-black font-black text-xl px-12 py-6 rounded-full flex items-center gap-4">
                <Star className="w-6 h-6" />
                (407) 451-7828
                <Star className="w-6 h-6" />
              </div>
            </div>
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesPage;