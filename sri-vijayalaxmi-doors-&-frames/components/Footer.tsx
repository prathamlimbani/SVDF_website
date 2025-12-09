import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wood-900 text-wood-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">SRI VIJAYALAXMI</h3>
            <p className="text-wood-300 text-sm leading-relaxed">
              Crafting your perfect space with premium doors, frames, and furniture. 
              Custom sizes available on request. Quality you can trust.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href={`tel:${CONTACT_INFO.whatsapp}`} className="flex items-center gap-3 text-wood-300 hover:text-white transition">
                <Phone size={18} />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-wood-300 hover:text-white transition">
                <Mail size={18} />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3 text-wood-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links / Info */}
          <div>
             <h4 className="text-lg font-semibold text-white mb-4">Ordering Process</h4>
             <ul className="space-y-2 text-wood-300 text-sm">
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Browse Catalog</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Add to List</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Send via WhatsApp/Email</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Advance Payment for Custom Sizes</li>
             </ul>
          </div>

        </div>
        <div className="border-t border-wood-800 mt-8 pt-8 text-center text-xs text-wood-400">
          <p>&copy; {new Date().getFullYear()} Sri Vijayalaxmi Doors & Frames. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;