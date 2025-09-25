import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCategoryById } from './menuData';
import { ArrowLeft, Clock, Star, Leaf } from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = getCategoryById(categoryId);

  // If category doesn't exist, show error
  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Category Not Found</h2>
          <p className="text-gray-600 mb-6">The category you're looking for doesn't exist.</p>
          <Link 
            to="/menu" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-colors duration-200"
          >
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-orange-600 hover:text-orange-700 mb-4 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Menu
            </button>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                  {category.name}
                </h1>
                <p className="text-lg text-gray-600 mb-4 max-w-2xl">
                  {category.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{category.items.length} items available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {category.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-32 sm:h-40 md:h-48"
            >
              <div className="flex flex-row">
                {/* Item Image */}
                <div className="relative w-32 sm:w-48 md:w-64 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Vegetarian Badge */}
                  {item.isVegetarian && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full shadow-md">
                      <Leaf className="w-3 h-3" />
                    </div>
                  )}
                </div>

                {/* Item Details */}
                <div className="flex-1 p-3 sm:p-4 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 leading-tight">
                    {item.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500">
                    ${item.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no items) */}
        {category.items.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Clock className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We're working on adding delicious items to this category. Check back soon!
            </p>
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;