import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MenuCategories() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    // Trigger entrance animation on component mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      description: 'Morning essentials',
      itemCount: '8+ items',
      route: '/menu/breakfast',
      delay: '0ms'
    },
    {
      id: 'snacks',
      name: 'Snacks',
      description: 'Quick bites',
      itemCount: '7+ items',
      route: '/menu/snacks',
      delay: '100ms'
    },
    {
      id: 'salads',
      name: 'Salads',
      description: 'Fresh & healthy',
      itemCount: '2+ items',
      route: '/menu/salads',
      delay: '200ms'
    },
    {
      id: 'juices',
      name: 'Juices',
      description: 'Refreshing drinks',
      itemCount: '6+ items',
      route: '/menu/juices',
      delay: '300ms'
    }
  ];

  const handleCategoryClick = (route) => {
    navigate(route);
  };

  // Mobile-friendly touch handlers
  const handleTouchStart = (categoryId) => {
    setActiveCard(categoryId);
  };

  const handleTouchEnd = () => {
    // Keep the active state for a moment to show feedback
    setTimeout(() => {
      setActiveCard(null);
    }, 150);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#FDF8F0] relative overflow-hidden min-h-screen">
      
      {/* Multi-layered Dynamic Background */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(230, 126, 34, 0.06),
              rgba(230, 126, 34, 0.06) 2px,
              transparent 2px,
              transparent 12px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(255, 180, 0, 0.04),
              rgba(255, 180, 0, 0.04) 2px,
              transparent 2px,
              transparent 12px
            )
          `,
          backgroundSize: '20px 20px, 25px 25px',
          animation: 'moveStripes 25s linear infinite',
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #E67E22 1.5px, transparent 1.5px),
            radial-gradient(circle at 75% 75%, #FFB400 1px, transparent 1px),
            radial-gradient(circle at 50% 90%, #E67E22 0.8px, transparent 0.8px)
          `,
          backgroundSize: '60px 60px, 80px 80px, 40px 40px',
          animation: 'floatDots 30s ease-in-out infinite',
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-conic-gradient(
              from 0deg at 50% 50%,
              rgba(230, 126, 34, 0.05) 0deg,
              transparent 60deg,
              rgba(255, 180, 0, 0.03) 120deg,
              transparent 180deg
            )
          `,
          backgroundSize: '100px 100px',
          animation: 'rotateTexture 40s linear infinite',
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 200px 100px at 20% 30%, rgba(255, 180, 0, 0.06), transparent),
            radial-gradient(ellipse 300px 150px at 80% 70%, rgba(230, 126, 34, 0.05), transparent),
            radial-gradient(ellipse 250px 120px at 60% 20%, rgba(255, 140, 0, 0.04), transparent)
          `,
          animation: 'moveOrbs 35s ease-in-out infinite',
        }}
      />

      {/* Header Section */}
      <div className="relative z-10 text-center py-10 px-8">
        <div 
          className={`text-black text-7xl font-black mb-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
        >
          MENU
        </div>
        <div 
          className={`text-black text-2xl italic mb-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
          style={{ fontFamily: 'serif' }}
        >
          Savor perfection on every plate
        </div>
        <div 
          className={`w-0 h-1 bg-gradient-to-r from-[#FFB400] to-[#FF8C00] mx-auto rounded-full transition-all duration-1000 delay-700 ${
            isVisible ? 'w-32' : 'w-0'
          }`}
        ></div>
      </div>

      {/* Categories Grid - Mobile Optimized */}
      <div className="relative z-10 px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.route)}
              onTouchStart={() => handleTouchStart(category.id)}
              onTouchEnd={handleTouchEnd}
              className={`
                cursor-pointer transition-all duration-700 select-none
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                ${activeCard === category.id ? 'scale-[1.02] -translate-y-1' : ''}
              `}
              style={{ transitionDelay: isVisible ? category.delay : '0ms' }}
            >
              {/* Enhanced Mobile-Friendly Card */}
              <div className={`
                bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg relative overflow-hidden border-2 transition-all duration-300 ease-out
                ${activeCard === category.id 
                  ? 'border-[#FFB400] shadow-2xl bg-white/95 scale-[1.01]' 
                  : 'border-gray-200 md:hover:border-[#FFB400] md:hover:shadow-2xl md:hover:scale-[1.02] md:hover:-translate-y-1 md:hover:bg-white/95'
                }
              `}>
                
                {/* Active/Touch feedback background */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-[#FFB400]/8 to-[#E67E22]/6 transition-opacity duration-300
                  ${activeCard === category.id ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}
                `}></div>
                
                {/* Floating decorative elements - always visible on mobile for better depth */}
                <div className={`
                  absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#FFB400]/15 to-[#E67E22]/15 rounded-full transition-all duration-500 opacity-60
                  ${activeCard === category.id ? 'scale-125 rotate-12' : 'md:group-hover:scale-125 md:group-hover:rotate-12'}
                `}></div>
                <div className={`
                  absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-tl from-[#E67E22]/12 to-[#FFB400]/12 rounded-full transition-all duration-500 opacity-50
                  ${activeCard === category.id ? 'scale-110 -rotate-6' : 'md:group-hover:scale-110 md:group-hover:-rotate-6'}
                `}></div>
                
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className={`
                    transition-all duration-300
                    ${activeCard === category.id ? 'translate-x-1' : 'md:group-hover:translate-x-1'}
                  `}>
                    <h3 className={`
                      text-2xl font-bold mb-2 transition-colors duration-300
                      ${activeCard === category.id ? 'text-[#E67E22]' : 'text-black md:group-hover:text-[#E67E22]'}
                    `}>
                      {category.name}
                    </h3>
                    <p className={`
                      text-base transition-colors duration-300
                      ${activeCard === category.id ? 'text-gray-700' : 'text-gray-600 md:group-hover:text-gray-700'}
                    `}>
                      {category.description}
                    </p>
                    <p className={`
                      text-sm font-medium mt-1 transition-colors duration-300
                      ${activeCard === category.id ? 'text-[#FFB400]' : 'text-[#E67E22] md:group-hover:text-[#FFB400]'}
                    `}>
                      {category.itemCount}
                    </p>
                  </div>
                  
                  {/* Animated Arrow */}
                  <div className="relative">
                    <div className={`
                      text-[#FFB400] text-2xl transform transition-all duration-500 ease-out
                      ${activeCard === category.id ? 'translate-x-2 scale-110' : 'md:group-hover:translate-x-2 md:group-hover:scale-110'}
                    `}>
                      →
                    </div>
                  </div>
                </div>

                {/* View Menu Button */}
                <div className={`
                  pt-4 border-t-2 relative z-10 transition-colors duration-300
                  ${activeCard === category.id ? 'border-[#FFB400]/40' : 'border-gray-200 md:group-hover:border-[#FFB400]/40'}
                `}>
                  <div className="flex items-center">
                    <span className={`
                      font-medium transition-colors duration-300
                      ${activeCard === category.id ? 'text-[#FFB400]' : 'text-[#E67E22] md:group-hover:text-[#FFB400]'}
                    `}>
                      View Menu
                    </span>
                    {/* Mobile-friendly indicator dots - always show subtle animation */}
                    <div className="ml-2 flex space-x-1">
                      <div className={`
                        w-1 h-1 bg-[#FFB400] rounded-full transition-all duration-300
                        ${activeCard === category.id ? 'animate-bounce opacity-100' : 'opacity-40'}
                      `} style={{animationDelay: '0ms'}}></div>
                      <div className={`
                        w-1 h-1 bg-[#FFB400] rounded-full transition-all duration-300
                        ${activeCard === category.id ? 'animate-bounce opacity-100' : 'opacity-40'}
                      `} style={{animationDelay: '100ms'}}></div>
                      <div className={`
                        w-1 h-1 bg-[#FFB400] rounded-full transition-all duration-300
                        ${activeCard === category.id ? 'animate-bounce opacity-100' : 'opacity-40'}
                      `} style={{animationDelay: '200ms'}}></div>
                    </div>
                  </div>
                </div>

                {/* Shimmer effect for touch feedback */}
                <div className={`
                  absolute inset-0 transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent
                  ${activeCard === category.id ? 'translate-x-full' : '-translate-x-full md:group-hover:translate-x-full'}
                `}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div 
        className={`relative z-10 mt-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-[#E67E22]/50 to-transparent w-full max-w-3xl mx-auto"></div>
        <div className="bg-transparent text-gray-800 p-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
            
            {/* Logo Section - Mobile friendly */}
            <div className="flex items-center space-x-4 cursor-pointer active:scale-95 transition-transform duration-150">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-md transition-all duration-300 active:scale-110 active:shadow-lg border border-gray-200">
                <div className="text-green-600 text-2xl font-bold">🌿</div>
              </div>
              <div>
                <div className="text-green-700 text-2xl font-bold" style={{ fontFamily: 'cursive' }}>
                  Mangrove Village
                </div>
                <div className="text-gray-600 text-lg font-medium tracking-wider">
                  A d v e n t u r e s
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="active:scale-95 transition-transform duration-150">
              <div className="text-black text-xl font-bold mb-1">
                Contact us !
              </div>
              <div className="text-gray-700 text-lg font-bold">
                +91 8590678894
              </div>
            </div>

            {/* Social Media Section */}
            <div className="flex items-center space-x-3 cursor-pointer active:scale-95 transition-transform duration-150">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center transition-all duration-300 active:scale-110 active:bg-[#E67E22]">
                <span className="text-white text-sm">📷</span>
              </div>
              <span className="text-black font-medium">
                @mangrove_village
              </span>
            </div>
          </div>

          <div className="text-center text-gray-500 mt-12 text-sm">
            © {new Date().getFullYear()} Mangrove Village Adventures. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Enhanced CSS for mobile animations */}
      <style jsx>{`
        @keyframes moveStripes {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 40px 40px, -50px -50px; }
        }
        
        @keyframes floatDots {
          0%, 100% { background-position: 0 0, 30px 30px, 15px 15px; }
          25% { background-position: 20px -10px, 50px 20px, 25px 5px; }
          50% { background-position: -10px 20px, 20px 50px, 5px 25px; }
          75% { background-position: 30px 10px, 60px 10px, 35px 15px; }
        }
        
        @keyframes rotateTexture {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes moveOrbs {
          0%, 100% { background-position: 20% 30%, 80% 70%, 60% 20%; }
          25% { background-position: 30% 40%, 70% 60%, 50% 30%; }
          50% { background-position: 40% 20%, 60% 80%, 70% 10%; }
          75% { background-position: 10% 60%, 90% 40%, 40% 70%; }
        }
        
        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .select-none {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </div>
  );
}

