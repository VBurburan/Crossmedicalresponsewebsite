import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="https://i.imgur.com/YSQN28q.png" alt="Cross Medical Response" className="h-28 mb-4" />
            <p className="text-gray-400 italic">"We're Going Places"</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Quick Links</h3>
            <nav className="space-y-2.5">
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
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Contact</h3>
            <div className="space-y-4">
              <a href="tel:606-668-9111" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#0066FF]" />
                <span className="font-semibold text-white">606-668-9111</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-[#0066FF]" />
                <span>24/7/365 Emergency Response</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Locations</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Jackson</p>
                  <p className="text-sm">3 Howell Ln, Jackson, KY 41339</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Campton</p>
                  <p className="text-sm">364 South Washington St, Campton, KY 41301</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Cross Medical Response. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Serving Breathitt, Wolfe, and Clark Counties</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
