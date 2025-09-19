import { Link } from 'react-router-dom';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    
    // Simulate loading state
    setTimeout(() => {
      addToCart(product);
      setIsAdding(false);
    }, 300);
  };

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2 hover:scale-[1.02]">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-3xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          {/* Enhanced Like Button */}
          <button
            onClick={handleLike}
            className="absolute top-4 right-4 p-2.5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 border border-white/20"
          >
            {isLiked ? (
              <HeartIconSolid className="w-5 h-5 text-red-500 animate-pulse" />
            ) : (
              <HeartIcon className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors duration-200" />
            )}
          </button>
          
          {/* Enhanced Stock Badge */}
          {!product.inStock && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg backdrop-blur-sm">
              Out of Stock
            </div>
          )}
          
          {/* Enhanced Quick Add Button */}
          {product.inStock && (
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 backdrop-blur-sm text-white py-3.5 px-4 rounded-2xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 transform translate-y-4 group-hover:translate-y-0 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl border border-white/20"
            >
              {isAdding ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <ShoppingCartIcon className="w-5 h-5" />
                  <span className="font-bold tracking-wide">Quick Add</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              {product.category}
            </span>
            {product.rating >= 4.5 && (
              <div className="flex items-center space-x-1">
                <span className="text-xs font-medium text-yellow-600">Popular</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
          
          {/* Product Name */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400' 
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm font-medium text-gray-900">
                {product.rating}
              </span>
              <span className="ml-1 text-sm text-gray-500">
                ({product.reviews})
              </span>
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.price > 20 && (
                <span className="text-sm text-green-600 font-medium">
                  Free shipping
                </span>
              )}
            </div>
            
            {product.inStock ? (
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isAdding ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <ShoppingCartIcon className="w-4 h-4" />
                    <span className="hidden sm:block">Add</span>
                  </>
                )}
              </button>
            ) : (
              <span className="text-red-500 font-medium bg-red-50 px-4 py-2 rounded-xl">
                Sold Out
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
