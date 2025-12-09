import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, FALLBACK_IMAGE } from '../data';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Check, Plus, ShoppingBag } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-wood-50">
        <h2 className="text-2xl font-bold text-wood-800 mb-4">Product Not Found</h2>
        <Link to="/catalog" className="text-amber-600 hover:underline">Back to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wood-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-wood-100 overflow-hidden">
        
        <div className="p-4 border-b border-wood-100">
           <button onClick={() => navigate(-1)} className="flex items-center text-wood-600 hover:text-wood-900 transition">
             <ArrowLeft size={20} className="mr-2" /> Back
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image Section */}
          <div className="bg-gray-50 p-4 md:p-8 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-[500px] w-auto object-contain rounded-lg shadow-lg"
              onError={(e) => e.currentTarget.src = FALLBACK_IMAGE}
            />
          </div>

          {/* Details Section */}
          <div className="p-6 md:p-10 flex flex-col">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-3">
                {product.category} &bull; {product.material}
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-wood-900 mb-4">
                {product.name}
              </h1>
              <p className="text-wood-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-8 bg-wood-50 p-6 rounded-xl">
              <h3 className="font-bold text-wood-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-wood-700">
                    <Check size={18} className="mr-2 text-green-600 mt-1 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto space-y-4">
               {product.isCustomizable && (
                 <div className="text-sm text-amber-700 bg-amber-50 p-3 rounded border border-amber-100 mb-4">
                   <strong>Note:</strong> Custom sizes are available upon request. Advance payment is required for all custom orders.
                 </div>
               )}
               
               <div className="flex flex-col sm:flex-row gap-4">
                 <button 
                   onClick={() => addToCart(product)}
                   className="flex-1 bg-wood-900 text-white py-4 px-6 rounded-lg hover:bg-wood-800 transition font-bold flex items-center justify-center gap-2"
                 >
                   <Plus size={20} /> Add to Quote List
                 </button>
                 <Link 
                   to="/cart"
                   className="flex-1 border-2 border-wood-900 text-wood-900 py-4 px-6 rounded-lg hover:bg-wood-50 transition font-bold flex items-center justify-center gap-2"
                 >
                   <ShoppingBag size={20} /> Go to List
                 </Link>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;