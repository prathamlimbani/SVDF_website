import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CONTACT_INFO, FALLBACK_IMAGE } from '../data';
import { Trash2, MessageCircle, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [customerName, setCustomerName] = useState('');

  const generateMessage = () => {
    // We use \n for newlines in the raw string, and then encode the whole thing.
    let message = `*Request for Quotation*\n\nName: ${customerName || 'Customer'}\n\nI am interested in the following items from Sri Vijayalaxmi Doors & Frames:\n\n`;
    
    cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*\n   Material: ${item.material}\n   Type: ${item.category}\n\n`;
    });

    message += `Please verify availability and provide the best price. Thank you.`;
    return message;
  };

  const handleWhatsApp = () => {
    if (!customerName) {
      alert('Please enter your name first.');
      return;
    }
    const message = generateMessage();
    // CRITICAL FIX: encodeURIComponent ensures spaces, newlines, and special chars (like &) are preserved in the URL
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    if (!customerName) {
      alert('Please enter your name first.');
      return;
    }
    const message = generateMessage();
    const subject = `Price Quotation Request from ${customerName}`;
    const url = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-wood-50 flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm max-w-md w-full">
           <div className="bg-wood-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
             <MessageCircle size={32} className="text-wood-400" />
           </div>
           <h2 className="text-2xl font-bold text-wood-900 mb-2">Your List is Empty</h2>
           <p className="text-wood-600 mb-8">Browse our catalog and add doors, frames, or beds to request a price quotation.</p>
           <Link to="/catalog" className="inline-block w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
             Browse Products
           </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wood-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-wood-900 mb-8">Request Quotation</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* List Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-wood-100 flex gap-4 items-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                  onError={(e) => e.currentTarget.src = FALLBACK_IMAGE}
                />
                <div className="flex-1">
                  <h3 className="font-bold text-wood-900">{item.name}</h3>
                  <p className="text-sm text-wood-500">{item.material} • {item.category}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-600 p-2"
                  title="Remove"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            
            <Link to="/catalog" className="block text-center text-amber-700 hover:underline mt-4 text-sm font-medium">
              + Add more items
            </Link>
          </div>

          {/* Action Box */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-md border border-wood-100 sticky top-24">
              <h3 className="font-bold text-lg text-wood-900 mb-4">Your Details</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-wood-700 mb-1">Your Name *</label>
                <input 
                  type="text" 
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full p-2 border border-wood-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <p className="text-xs text-wood-500 mb-6 leading-relaxed">
                By clicking below, you will be redirected to WhatsApp or your Email client with the list of selected items to send directly to the shop owner.
              </p>

              <div className="space-y-3">
                <button 
                  onClick={handleWhatsApp}
                  disabled={!customerName}
                  className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold text-white transition ${customerName ? 'bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg' : 'bg-gray-300 cursor-not-allowed'}`}
                >
                  <MessageCircle size={20} /> Send via WhatsApp
                </button>

                <button 
                  onClick={handleEmail}
                  disabled={!customerName}
                  className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold transition ${customerName ? 'bg-wood-800 text-white hover:bg-wood-900 shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                  <Mail size={20} /> Send via Email
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;