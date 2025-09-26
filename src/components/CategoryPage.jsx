import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCategoryById } from './menuData';
import { ArrowLeft, Clock, Star, Leaf, ChefHat, Heart } from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const category = getCategoryById(categoryId);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced textured background style
  const texturedBackgroundStyle = {
    backgroundColor: '#FDF8F0',
    backgroundImage: `
      repeating-linear-gradient(45deg, rgba(230, 126, 34, 0.06), rgba(230, 126, 34, 0.06) 2px, transparent 2px, transparent 12px),
      repeating-linear-gradient(-45deg, rgba(255, 180, 0, 0.04), rgba(255, 180, 0, 0.04) 2px, transparent 2px, transparent 12px),
      radial-gradient(circle at 25% 25%, rgba(230, 126, 34, 0.05) 2px, transparent 2px),
      radial-gradient(circle at 75% 75%, rgba(255, 180, 0, 0.04) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px, 20px 20px, 40px 40px, 60px 60px',
    backgroundPosition: '0 0, 10px 10px, 0 0, 30px 30px'
  };

  // If category doesn't exist, show error  
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={texturedBackgroundStyle}>
        <div 
          className={`text-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-[#E67E22]/20 max-w-md mx-4 transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          <div className="text-6xl mb-6">🍽️</div>
          <h2 className="text-3xl font-bold text-[#2D5F3F] mb-4">Category Not Found</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">The category you're looking for doesn't exist in our menu.</p>
          <Link 
            to="/menu" 
            className="inline-flex items-center bg-gradient-to-r from-[#E67E22] to-[#FFB400] hover:from-[#D35400] hover:to-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={texturedBackgroundStyle}>
      {/* Website URL */}
      <div className="absolute top-6 left-6 text-white text-sm font-medium z-50">
        WWW.MVADVENTURES.IN
      </div>

      {/* Enhanced Hero Section */}
      <div 
        className="relative h-96 flex items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 95, 63, 0.85), rgba(0, 0, 0, 0.4)), url(${category.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay Pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 20px),
              radial-gradient(circle at 30% 70%, rgba(255, 180, 0, 0.15) 2px, transparent 2px)
            `,
            backgroundSize: '40px 40px, 100px 100px'
          }}
        />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className={`absolute top-6 right-6 z-50 flex items-center text-white/90 hover:text-white transition-all duration-300 transform hover:scale-105 group ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="bg-white/20 backdrop-blur-sm group-hover:bg-white/30 p-3 rounded-full mr-3 transition-all duration-300 border border-white/20">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-semibold hidden md:inline">Back to Menu</span>
        </button>

        {/* Hero Content Container */}
        <div className="relative z-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Left Side - Content */}
            <div className="flex-1 text-white text-center lg:text-left">
              {/* Category Badge */}
              <div className={`inline-flex items-center bg-[#FFB400]/90 backdrop-blur-sm text-[#2D5F3F] px-4 py-2 rounded-full font-bold text-sm mb-4 shadow-lg transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '300ms' }}>
                <ChefHat className="w-4 h-4 mr-2" />
                CATEGORY
              </div>

              {/* Main Title */}
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight transition-all duration-1000 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`} 
              style={{ 
                transitionDelay: '400ms',
                textShadow: '2px 2px 10px rgba(0,0,0,0.7)'
              }}>
                {category.name}
              </h1>

              {/* Description */}
              <p className={`text-lg md:text-xl mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-white/90 transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>
                {category.description}
              </p>

              {/* Stats Row */}
              <div className={`flex flex-wrap justify-center lg:justify-start gap-4 mb-6 transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '800ms' }}>
                
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
                  <Clock className="w-4 h-4 mr-2 text-[#FFB400]" />
                  <span className="font-semibold text-sm">{category.items.length} Items</span>
                </div>
                
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
                  <Star className="w-4 h-4 mr-2 text-[#FFB400]" />
                  <span className="font-semibold text-sm">Fresh Daily</span>
                </div>
                
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
                  <Leaf className="w-4 h-4 mr-2 text-[#FFB400]" />
                  <span className="font-semibold text-sm">Organic</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className={`transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '1000ms' }}>
                <button
                  onClick={() => {
                    const menuSection = document.getElementById('menu-items');
                    menuSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-[#E67E22] to-[#FFB400] hover:from-[#D35400] hover:to-[#FF8C00] text-white px-8 py-3 rounded-full font-bold shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Menu Items
                </button>
              </div>
            </div>

            {/* Right Side - Decorative Image Frame */}
            <div className={`hidden lg:block flex-shrink-0 transition-all duration-1000 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`} style={{ transitionDelay: '500ms' }}>
              <div className="relative">
                <div className="w-48 h-48 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-40 h-40 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFB400] rounded-full opacity-80"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#E67E22] rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-[#FFB400]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-[#E67E22]/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Menu Items Section - No Gap, Seamless Integration */}
      <div id="menu-items" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Menu Items Grid - Reduced spacing */}
        <div className="space-y-6">
          {category.items.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#E67E22]/10 group hover:border-[#FFB400]/30 transform hover:scale-[1.02] hover:-translate-y-1 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Item Image */}
                <div className="relative lg:w-80 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Image Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Vegetarian Badge */}
                  {item.isVegetarian && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      <Leaf className="w-4 h-4" />
                    </div>
                  )}
                  
                  {/* Popular Badge */}
                  <div className="absolute top-4 left-4 bg-[#FFB400] text-white px-3 py-1 rounded-full shadow-lg font-semibold text-sm">
                    Popular
                  </div>
                </div>

                {/* Item Details */}
                <div className="flex-1 p-8 lg:p-10">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      {/* Item Name */}
                      <h3 className="text-3xl lg:text-4xl font-bold text-[#2D5F3F] mb-4 group-hover:text-[#E67E22] transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                      
                      {/* Item Description */}
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                      
                      {/* Item Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-[#E67E22]/10 text-[#E67E22] px-3 py-1 rounded-full text-sm font-medium">
                          Fresh Made
                        </span>
                        <span className="bg-[#FFB400]/10 text-[#B8860B] px-3 py-1 rounded-full text-sm font-medium">
                          Chef's Special
                        </span>
                      </div>
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="flex items-center justify-between">
                      {/* Price */}
                      <div className="text-4xl lg:text-5xl font-black text-[#E67E22] group-hover:text-[#FFB400] transition-colors duration-300">
                        ₹{item.price}
                      </div>
                      
                      {/* Add to Favorites */}
                      <button className="flex items-center gap-2 bg-[#E67E22]/10 hover:bg-[#E67E22] text-[#E67E22] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
                        <Heart className="w-5 h-5" />
                        <span className="hidden sm:inline">Favorite</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {category.items.length === 0 && (
          <div className={`text-center py-20 transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-[#E67E22]/20 max-w-md mx-auto">
              <div className="text-6xl mb-6">👨‍🍳</div>
              <h3 className="text-3xl font-bold text-[#2D5F3F] mb-4">Coming Soon</h3>
              <p className="text-gray-600 leading-relaxed">
                Our chefs are crafting amazing dishes for this category. Check back soon for delicious surprises!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gradient-to-r from-[#E67E22] to-[#FFB400] hover:from-[#D35400] hover:to-[#FF8C00] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-12"
        >
          <ArrowLeft className="w-6 h-6 rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
