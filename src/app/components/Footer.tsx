import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Heart } from 'lucide-react';
import logo from 'figma:asset/5bef32d054866d4324d094dd5f30ec97ec660bb3.png';

export function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-[#0066FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div>
            <img src="https://i.imgur.com/YSQN28q.png" alt="Cross Medical Response" className="h-32 md:h-40 lg:h-48 mb-4" />
            <p className="text-blue-100 italic mb-4 text-lg">"We're Going Places"</p>
          
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-blue-100 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-blue-100 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-blue-100 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/careers" className="block text-blue-100 hover:text-white transition-colors">
                Careers
              </Link>
              <Link to="/contact" className="block text-blue-100 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:606-668-9111" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-semibold text-lg">606-668-9111</span>
              </a>
              <div className="flex items-start gap-2 text-blue-100">
                <Mail className="w-5 h-5 mt-1" />
                <span>24/7/365 Emergency Response</span>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-bold text-xl mb-4">Our Locations</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-blue-100">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Jackson</p>
                  <p>3 Howell Ln</p>
                  <p>Jackson, KY 41339</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-blue-100">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Campton</p>
                  <p>364 South Washington St</p>
                  <p>Campton, KY 41301</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 mt-8 pt-8 text-center text-blue-100 text-sm">
          <p>&copy; {new Date().getFullYear()} Cross Medical Response. All rights reserved.</p>
          <p className="mt-2 font-semibold">Serving Breathitt, Wolfe, and Clark Counties</p>
        </div>
      </div>
    </footer>
  );
}