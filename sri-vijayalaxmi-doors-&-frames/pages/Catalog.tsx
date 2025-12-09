import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { Category, Material } from '../types';
import { Filter, Search, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedMaterial, setSelectedMaterial] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesMaterial = selectedMaterial === 'All' || product.material === selectedMaterial;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesMaterial && matchesSearch;
  });

  const updateCategory = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="min-h-screen bg-wood-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-serif font-bold text-wood-900">Product Catalog</h1>
          
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search doors, beds..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-wood-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Search className="absolute left-3 top-2.5 text-wood-400" size={18} />
          </div>

          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-wood-200"
          >
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className={`w-full md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-wood-100 sticky top-24">
              <h3 className="font-bold text-lg mb-4 text-wood-800">Filter By</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-sm text-wood-600 mb-2 uppercase tracking-wide">Category</h4>
                <div className="space-y-2">
                  <button 
                    onClick={() => updateCategory('All')}
                    className={`block w-full text-left px-3 py-1.5 rounded transition ${selectedCategory === 'All' ? 'bg-amber-100 text-amber-800 font-medium' : 'text-wood-600 hover:bg-wood-50'}`}
                  >
                    All Products
                  </button>
                  {Object.values(Category).map(cat => (
                    <button 
                      key={cat}
                      onClick={() => updateCategory(cat)}
                      className={`block w-full text-left px-3 py-1.5 rounded transition ${selectedCategory === cat ? 'bg-amber-100 text-amber-800 font-medium' : 'text-wood-600 hover:bg-wood-50'}`}
                    >
                      {cat}s
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-wood-600 mb-2 uppercase tracking-wide">Material</h4>
                <select 
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full p-2 border border-wood-200 rounded bg-white text-wood-800"
                >
                  <option value="All">All Materials</option>
                  {Object.values(Material).map(mat => (
                    <option key={mat} value={mat}>{mat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-wood-200">
                <p className="text-wood-500 text-lg">No products found matching your criteria.</p>
                <button 
                  onClick={() => {updateCategory('All'); setSelectedMaterial('All'); setSearchQuery('');}}
                  className="mt-4 text-amber-600 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-wood-100 flex flex-col overflow-hidden group">
                    <Link to={`/product/${product.id}`} className="relative h-64 overflow-hidden bg-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      {product.isCustomizable && (
                        <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                          Custom Size
                        </span>
                      )}
                    </Link>
                    
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded uppercase tracking-wider">
                          {product.category}
                        </span>
                        <span className="text-xs text-wood-500">{product.material}</span>
                      </div>
                      
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-lg font-bold text-wood-900 leading-tight mb-2 hover:text-amber-700 transition">
                          {product.name}
                        </h3>
                      </Link>
                      
                      <p className="text-wood-600 text-sm line-clamp-2 mb-4 flex-1">
                        {product.description}
                      </p>

                      <div className="mt-auto flex gap-2">
                        <button 
                          onClick={() => addToCart(product)}
                          className="flex-1 bg-wood-900 text-white py-2 px-4 rounded hover:bg-amber-700 transition flex items-center justify-center gap-2 text-sm font-medium"
                        >
                          <Plus size={16} /> Add to List
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Catalog;