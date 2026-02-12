import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-black border-b-4 border-[#0066FF] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="https://i.imgur.com/YSQN28q.png" alt="Cross Medical Response" className="h-32 md:h-40 lg:h-48" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-[#0066FF]'
                    : 'text-white hover:text-[#0066FF]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number */}
          <a
            href="tel:606-668-9111"
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#0047AB] to-[#0066FF] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
          >
            <Phone className="w-5 h-5" />
            <span className="font-bold text-lg">606-668-9111</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center gap-2 bg-gradient-to-r from-[#0047AB] to-[#0066FF] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            <span className="font-bold text-base">MENU</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-white to-gray-50 border-t-4 border-[#0066FF] shadow-2xl">
          <div className="px-4 py-2 bg-[#0047AB] text-white text-center font-bold text-sm">
            NAVIGATE TO:
          </div>
          <nav className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 text-lg rounded-lg transition-all ${
                  isActive(item.path) 
                    ? 'bg-[#0047AB] text-white font-bold shadow-md' 
                    : 'text-gray-700 hover:bg-blue-50 font-medium border border-gray-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:606-668-9111"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0047AB] to-[#0066FF] text-white px-6 py-3 rounded-lg mt-4"
            >
              <Phone className="w-5 h-5" />
              <span className="font-bold">606-668-9111</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}