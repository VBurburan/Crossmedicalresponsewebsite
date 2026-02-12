import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { HomePage } from '@/app/pages/HomePage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ServicesPage } from '@/app/pages/ServicesPage';
import { CareersPage } from '@/app/pages/CareersPage';
import { ApplicationPage } from '@/app/pages/ApplicationPage';
import { ContactPage } from '@/app/pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/apply" element={<ApplicationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
