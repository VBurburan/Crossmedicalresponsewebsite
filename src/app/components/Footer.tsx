import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-white border-t-2 border-[#0066FF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Tagline */}
          <div>
            <img src="https://i.imgur.com/YSQN28q.png" alt="Cross Medical Response" className="h-32 md:h-36 lg:h-40 mb-6" />
            <p className="text-blue-300 italic mb-4 text-lg font-light">"We're Going Places"</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Neighbors serving neighbors</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 line-accent">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-gray-400 hover:text-[#0066FF] transition-all duration-300 hover:translate-x-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 line-accent">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:606-668-9111" className="flex items-center gap-3 text-gray-400 hover:text-[#0066FF] transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center group-hover:bg-[#0066FF]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#0066FF]" />
                </div>
                <span className="font-semibold text-lg text-white">606-668-9111</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#0066FF]" />
                </div>
                <span>24/7/365 Emergency Response</span>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-bold text-xl mb-6 line-accent">Our Locations</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#0066FF]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Jackson</p>
                  <p className="text-sm">3 Howell Ln, Jackson, KY 41339</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#0066FF]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Campton</p>
                  <p className="text-sm">364 South Washington St, Campton, KY 41301</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Cross Medical Response. All rights reserved.</p>
            <p className="text-gray-500 text-sm font-medium">Serving Breathitt, Wolfe, and Clark Counties</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
