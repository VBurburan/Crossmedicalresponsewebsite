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
      className={`sticky top-0 z-50 transition-all duration-300 bg-black border-b border-[#0066FF] ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link to="/" className="flex items-center">
            <img
              src="https://i.imgur.com/YSQN28q.png"
              alt="Cross Medical Response"
              className={`transition-all duration-300 ${
                scrolled ? 'h-16 md:h-20 lg:h-24' : 'h-20 md:h-28 lg:h-32'
              }`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium px-4 py-2 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'text-white bg-[#0047AB]'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <a
            href="tel:606-668-9111"
            className="hidden lg:flex items-center gap-2 bg-[#0047AB] text-white px-5 py-2.5 rounded-lg hover:bg-[#003d94] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold">606-668-9111</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center gap-2 bg-[#0047AB] text-white px-4 py-2 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="font-semibold text-sm">MENU</span>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <div className="bg-gray-950 border-t border-gray-800">
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#0047AB] text-white font-semibold'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:606-668-9111"
              className="flex items-center justify-center gap-2 bg-[#0047AB] text-white px-6 py-3 rounded-lg mt-3"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">606-668-9111</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
