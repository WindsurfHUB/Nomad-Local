import React, { useState, useEffect } from 'react';
import { Globe, Wifi, Users, MapPin, ArrowRight, Search, Bell, MessageSquare, Heart } from 'lucide-react';

const NomadLocal = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Placeholder for your registration link
  const REGISTER_LINK = "#"; 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRegisterClick = () => {
    window.location.href = REGISTER_LINK;
  };

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-orange-500 to-rose-600 p-2 rounded-lg shadow-lg shadow-orange-500/30">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              NomadLocal
            </span>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO & PRODUCT MOCKUP */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-orange-50/30">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span className="text-xs font-bold text-orange-800 uppercase tracking-wide">Join the Waitlist</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Live locally, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600">work globally.</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The exclusive dashboard for digital nomads. Instant access to vetted housing, verified fast Wi-Fi maps, and local meetups in 400+ cities.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <button 
                  onClick={handleRegisterClick}
                  className="h-14 px-8 bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-orange-600/20 hover:shadow-orange-600/40 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Join NomadLocal
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right: Product Mockup (CSS Only) */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-pink-400/20 rounded-[2rem] blur-3xl -z-10 transform translate-x-4 translate-y-4"></div>
              
              {/* Main App Container */}
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1">
                {/* Fake Browser/App Header */}
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="hidden sm:flex bg-white border border-slate-200 rounded-lg px-3 py-1.5 items-center gap-2 w-64 shadow-sm">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-xs text-slate-400">Find cities, people, hubs...</span>
                   </div>
                   <div className="flex gap-3">
                      <Bell className="w-4 h-4 text-slate-400" />
                      <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                   </div>
                </div>

                {/* App Body */}
                <div className="flex h-[400px]">
                   {/* Sidebar */}
                   <div className="hidden sm:block w-16 md:w-48 border-r border-slate-100 p-4 bg-slate-50/50">
                      <div className="space-y-1">
                         <div className="p-2 bg-orange-100 text-orange-700 rounded-lg flex items-center gap-3">
                            <Globe className="w-4 h-4" />
                            <span className="text-sm font-bold hidden md:inline">Discover</span>
                         </div>
                         <div className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg flex items-center gap-3">
                            <MessageSquare className="w-4 h-4" />
                            <span className="text-sm font-medium hidden md:inline">Community</span>
                         </div>
                         <div className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg flex items-center gap-3">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-medium hidden md:inline">Housing</span>
                         </div>
                      </div>
                      
                      <div className="mt-8">
                         <p className="text-xs font-bold text-slate-400 uppercase mb-3 hidden md:block">Active Now</p>
                         <div className="space-y-3 hidden md:block">
                            <div className="flex items-center gap-2">
                               <div className="w-2 h-2 rounded-full bg-green-500"></div>
                               <span className="text-xs text-slate-600">Chiang Mai (412)</span>
                            </div>
                            <div className="flex items-center gap-2">
                               <div className="w-2 h-2 rounded-full bg-green-500"></div>
                               <span className="text-xs text-slate-600">Lisbon (389)</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Main Feed */}
                   <div className="flex-1 p-6 bg-slate-50/30 overflow-hidden relative">
                      <h3 className="font-bold text-slate-900 mb-4">Trending Locations</h3>
                      
                      {/* Cards Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {/* Card 1 */}
                         <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                            <div className="h-24 bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
                               <img src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=400&q=80" alt="Bangkok" className="w-full h-full object-cover" />
                               <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-bold text-green-700 flex items-center gap-1">
                                  <Wifi className="w-3 h-3" /> 150 Mbps
                               </div>
                            </div>
                            <div className="flex justify-between items-start">
                               <div>
                                  <h4 className="text-sm font-bold text-slate-800">Bangkok, TH</h4>
                                  <p className="text-xs text-slate-500">1.2k Nomads here</p>
                               </div>
                               <div className="p-1.5 bg-rose-50 rounded-full">
                                  <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                               </div>
                            </div>
                         </div>

                         {/* Card 2 */}
                         <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                            <div className="h-24 bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
                               <img src="https://images.unsplash.com/photo-1555881400-74d7acaacd81?auto=format&fit=crop&w=400&q=80" alt="Lisbon" className="w-full h-full object-cover" />
                               <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-bold text-green-700 flex items-center gap-1">
                                  <Wifi className="w-3 h-3" /> 98 Mbps
                               </div>
                            </div>
                            <div className="flex justify-between items-start">
                               <div>
                                  <h4 className="text-sm font-bold text-slate-800">Lisbon, PT</h4>
                                  <p className="text-xs text-slate-500">850 Nomads here</p>
                               </div>
                               <div className="p-1.5 bg-slate-50 rounded-full">
                                  <Heart className="w-3 h-3 text-slate-300" />
                               </div>
                            </div>
                         </div>
                      </div>

                      {/* Bottom Floating Alert */}
                      <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur text-white p-3 rounded-lg flex items-center gap-3 shadow-xl animate-in slide-in-from-bottom-4 fade-in duration-700">
                         <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4 text-white" />
                         </div>
                         <div>
                            <p className="text-xs font-medium text-slate-300">New Meetup</p>
                            <p className="text-sm font-bold">Coffee & Work @ 10am</p>
                         </div>
                         <button className="ml-auto text-xs bg-white text-slate-900 px-3 py-1.5 rounded font-bold">Join</button>
                      </div>

                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to land softly</h2>
            <p className="text-slate-600">We solve the three biggest problems for remote workers: loneliness, bad internet, and finding a place to call home.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "Instant Community",
                desc: "Don't eat alone. Connect with local nomads for lunch, coworking, and weekend trips.",
                bg: "bg-orange-500 shadow-lg shadow-orange-500/30"
              },
              {
                icon: <Wifi className="w-6 h-6 text-white" />,
                title: "Verified Workspaces",
                desc: "Never worry about a Zoom call dropping. We speed-test every cafe and coworking space.",
                bg: "bg-rose-500 shadow-lg shadow-rose-500/30"
              },
              {
                icon: <MapPin className="w-6 h-6 text-white" />,
                title: "Local Guides",
                desc: "Skip the tourist traps. Access city guides curated by nomads who have lived there for months.",
                bg: "bg-pink-600 shadow-lg shadow-pink-600/30"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA / FOOTER */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600 rounded-full blur-[120px]"></div>
         </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Ready to find your tribe?</h2>
          <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of digital nomads discovering the world together. 
            Sign up now to get early access to our beta.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleRegisterClick}
              className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-extrabold text-lg rounded-xl transition-all shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:scale-105"
            >
              Create Free Account
            </button>
          </div>
          
          <p className="mt-8 text-sm text-slate-500">
            © 2026 NomadLocal. No credit card required.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NomadLocal;