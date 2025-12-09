import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, DoorOpen, BedDouble, Frame, ShieldCheck, PenTool, Truck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section - Business Professional Look */}
      <div className="relative h-[650px] flex items-center justify-center bg-wood-950 text-white overflow-hidden">
        {/* Background Image - Tree/Wood Texture as requested */}
        <div className="absolute inset-0">
           <img 
             src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1920" 
             alt="Premium Wood Texture" 
             className="w-full h-full object-cover opacity-30"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-wood-950/80 via-wood-900/60 to-wood-950/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-full text-center z-10">
          
          {/* Main Logo Simulation (Gold on Wood) */}
          <div className="animate-fade-in-up mb-12 p-8 border border-amber-600/30 rounded-2xl bg-wood-950/40 backdrop-blur-sm shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              
              {/* Shield Icon / Emblem */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-amber-100 via-amber-400 to-amber-600 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg flex items-center justify-center shadow-lg">
                   <DoorOpen size={48} className="text-wood-950" strokeWidth={2.5} />
                </div>
              </div>

              {/* Text Logo */}
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-400 to-amber-200 tracking-wide drop-shadow-sm uppercase">
                  Sri Vijayalaxmi
                </h1>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-amber-500 tracking-widest uppercase mt-2 mb-3 drop-shadow-md">
                  Doors & Frames
                </h2>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-3"></div>
                <p className="text-amber-200/90 tracking-[0.2em] text-xs md:text-sm uppercase font-medium">
                  Crafting Your Perfect Space
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-100">
            <Link 
              to="/catalog" 
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded shadow-lg hover:shadow-amber-600/40 font-bold transition flex items-center justify-center gap-2 tracking-wide uppercase text-sm border border-amber-500/50"
            >
              View Catalog <ArrowRight size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-wood-900/50 hover:bg-wood-800 border border-amber-700/50 text-amber-100 rounded font-bold transition uppercase text-sm backdrop-blur-sm"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Features Strip */}
      <div className="bg-wood-50 border-y border-wood-200 relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-white transition">
            <div className="bg-amber-100 p-3 rounded-full text-amber-800">
               <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-wood-900">Premium Quality</h4>
              <p className="text-sm text-wood-600">Teak, Acacia & Treated Wood</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-white transition">
            <div className="bg-amber-100 p-3 rounded-full text-amber-800">
               <PenTool size={24} />
            </div>
            <div>
              <h4 className="font-bold text-wood-900">Custom Manufacturing</h4>
              <p className="text-sm text-wood-600">Made to your exact measurements</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-white transition">
            <div className="bg-amber-100 p-3 rounded-full text-amber-800">
               <Truck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-wood-900">Delivery Available</h4>
              <p className="text-sm text-wood-600">Direct from factory to site</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="py-20 px-4 max-w-7xl mx-auto w-full bg-white">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-900 mb-4">Product Showcase</h2>
           <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
           <p className="mt-4 text-wood-600 max-w-2xl mx-auto">Explore our extensive collection of doors, frames, and furniture designed to elevate your space.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <CategoryCard 
            icon={<DoorOpen size={32} />}
            title="Premium Doors"
            desc="Laminated, Teak & Membrane"
            link="/catalog?category=Door"
            image="https://images.unsplash.com/photo-1517646331032-9e8563c523ac?auto=format&fit=crop&q=80&w=500"
          />
          
          <CategoryCard 
            icon={<Frame size={32} />}
            title="Wooden Frames"
            desc="Solid Teak & Window Frames"
            link="/catalog?category=Frame"
            image="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=500"
          />
          
          <CategoryCard 
            icon={<BedDouble size={32} />}
            title="Luxury Beds"
            desc="King & Queen Size Storage Beds"
            link="/catalog?category=Bed"
            image="https://images.unsplash.com/photo-1505691938895-1cd10279e8ee?auto=format&fit=crop&q=80&w=500"
          />
          
          <CategoryCard 
            icon={<Box size={32} />}
            title="Mattresses"
            desc="Comfort & Orthopedic"
            link="/catalog?category=Mattress"
            image="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=500"
          />

        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-wood-900 py-16 px-4 border-t border-amber-900/50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-amber-100 mb-2">Ready to Upgrade Your Home?</h3>
            <p className="text-wood-300">Browse our designs and create your quotation list instantly.</p>
          </div>
          <Link to="/catalog" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded text-lg font-semibold transition whitespace-nowrap shadow-lg">
            Start Browsing
          </Link>
        </div>
      </div>

    </div>
  );
};

const CategoryCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, link: string, image: string }> = ({ icon, title, desc, link, image }) => (
  <Link to={link} className="group relative h-80 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500 border border-wood-100">
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-wood-950/90 via-wood-950/40 to-transparent"></div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition duration-300">
      <div className="text-amber-400 mb-3 bg-wood-950/30 w-fit p-2 rounded-lg backdrop-blur-sm border border-amber-500/20">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-1 font-serif">{title}</h3>
      <p className="text-wood-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition duration-300 delay-100">{desc}</p>
      <span className="text-amber-400 font-medium text-sm flex items-center gap-2 uppercase tracking-wider">
        View <ArrowRight size={16} />
      </span>
    </div>
  </Link>
);

export default Home;