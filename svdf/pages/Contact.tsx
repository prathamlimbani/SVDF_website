import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-wood-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-wood-900 mb-4">Visit Our Showroom</h1>
        <p className="text-center text-wood-600 mb-12 max-w-2xl mx-auto">
          Experience the quality of our Teak, Acacia, and Laminated doors in person. 
          We are happy to assist you with custom measurements and design selection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-wood-100">
            <h3 className="text-xl font-bold text-wood-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-wood-900">Phone / WhatsApp</p>
                  <a href={`tel:${CONTACT_INFO.whatsapp}`} className="text-wood-600 hover:text-amber-700 block mt-1">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-wood-900">Email Address</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-wood-600 hover:text-amber-700 block mt-1">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-wood-900">Showroom Address</p>
                  <p className="text-wood-600 mt-1 leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wood-900 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center">
             <h3 className="text-xl font-bold mb-6">Business Hours</h3>
             <ul className="space-y-4">
               <li className="flex justify-between border-b border-wood-700 pb-2">
                 <span>Monday - Saturday</span>
                 <span className="font-semibold">9:30 AM - 8:30 PM</span>
               </li>
               <li className="flex justify-between border-b border-wood-700 pb-2">
                 <span>Sunday</span>
                 <span className="font-semibold">10:00 AM - 2:00 PM</span>
               </li>
             </ul>

             <div className="mt-8 flex items-start gap-3 bg-wood-800 p-4 rounded-lg">
                <Clock size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <p className="text-sm text-wood-200">
                  We recommend calling ahead for custom size consultations to ensure the owner is available to assist you personally.
                </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;