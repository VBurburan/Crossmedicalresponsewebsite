import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-blue-900/20 border-b-2 border-[#0066FF]'
          : 'bg-black border-b-4 border-[#0066FF] shadow-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="https://i.imgur.com/YSQN28q.png"
              alt="Cross Medical Response"
              className={`transition-all duration-500 ${
                scrolled ? 'h-20 md:h-24 lg:h-28' : 'h-32 md:h-40 lg:h-48'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-lg font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                  isActive(item.path)
                    ? 'text-white bg-[#0066FF]/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#0066FF] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Phone Number - Desktop */}
          <a
            href="tel:606-668-9111"
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#0047AB] to-[#0066FF] text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 animate-pulse-emergency"
          >
            <Phone className="w-5 h-5" />
            <span className="font-bold text-lg">606-668-9111</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center gap-2 bg-gradient-to-r from-[#0047AB] to-[#0066FF] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            <span className="font-bold text-base">MENU</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-b from-gray-900 to-black border-t border-[#0066FF]/30">
          <nav className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 text-lg rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-[#0047AB] to-[#0066FF] text-white font-bold shadow-lg shadow-blue-500/20'
                    : 'text-gray-300 hover:bg-white/5 font-medium'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:606-668-9111"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0047AB] to-[#0066FF] text-white px-6 py-4 rounded-xl mt-4 shadow-lg shadow-blue-500/20"
            >
              <Phone className="w-5 h-5" />
              <span className="font-bold">606-668-9111</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
