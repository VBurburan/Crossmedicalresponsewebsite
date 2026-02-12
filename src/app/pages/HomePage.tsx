import heroBackground from '@/assets/8f7d2adefb2fd6d9633c07d1d01d2ad767a32d8d.png';
import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, AlertCircle, Ambulance, HeartPulse, Users, Shield, Star, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export function HomePage() {
  const counties = useCountUp(3);
  const residents = useCountUp(50000, 2500);
  const availability = useCountUp(24);
  const response = useCountUp(365);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[700px] lg:min-h-[800px] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Cross Medical Response Ambulance"
            className="w-full h-full object-cover scale-105"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-8"
          >
            <img src="https://i.imgur.com/YSQN28q.png" alt="Cross Medical Response - We're Going Places" className="h-40 md:h-48 lg:h-64 mx-auto mb-8 drop-shadow-2xl" />
          </motion.div>

          <div className="text-white text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-white font-semibold drop-shadow-lg glass-dark px-6 py-3 rounded-2xl inline-block mt-8"
            >
              Your trusted ambulance service serving Eastern Kentucky's Appalachian region
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <a
                href="tel:606-668-9111"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0047AB] px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all shadow-2xl text-xl font-bold animate-pulse-emergency hover:scale-105"
              >
                <Phone className="w-7 h-7" />
                606-668-9111
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 bg-transparent text-white px-10 py-5 rounded-2xl border-2 border-white/40 hover:bg-white/10 transition-all text-xl font-semibold backdrop-blur-sm hover:border-white/70"
              >
                Our Services
              </Link>
            </motion.div>

            {/* 24/7/365 Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center gap-6 text-sm text-white/80"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24/7/365</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Certified Crews</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>3 Counties</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-6 bg-white border-b border-gray-100 relative -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { ref: counties.ref, count: counties.count, suffix: '', label: 'Counties Served', icon: MapPin },
              { ref: residents.ref, count: residents.count, suffix: '+', label: 'Residents Protected', icon: Users },
              { ref: availability.ref, count: availability.count, suffix: '/7', label: 'Hours Available', icon: Clock },
              { ref: response.ref, count: response.count, suffix: '', label: 'Days a Year', icon: Activity },
            ].map((stat, index) => (
              <div
                key={index}
                ref={stat.ref}
                className="text-center py-6"
              >
                <stat.icon className="w-8 h-8 text-[#0066FF] mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-gray-900 counter-number">
                  {stat.count.toLocaleString()}{stat.suffix}
                </p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive emergency and non-emergency medical transport across Eastern Kentucky
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: AlertCircle,
                title: 'Emergency 911',
                description: '24/7/365 rapid response to life-threatening emergencies. Dispatched through county 911 systems with air medical coordination.',
                color: '#0047AB',
                gradient: 'from-[#0047AB] to-[#003380]',
              },
              {
                icon: Ambulance,
                title: 'Medical Transport',
                description: 'Scheduled and non-emergency transport including dialysis appointments, hospital discharges, and interfacility transfers.',
                color: '#0066FF',
                gradient: 'from-[#0066FF] to-[#0047AB]',
              },
              {
                icon: HeartPulse,
                title: 'Critical Care Transport',
                description: "Advanced life support and critical care transport with paramedics holding Kentucky's Critical Care Endorsement.",
                color: '#0047AB',
                gradient: 'from-[#003380] to-[#0047AB]',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#0066FF]/20 hover-lift relative overflow-hidden"
              >
                {/* Gradient accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link to="/services" className="text-[#0066FF] hover:text-[#0047AB] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-gradient-to-br from-[#001a3f] via-[#0047AB] to-[#0066FF] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-3">Our Coverage</p>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Serving Eastern Kentucky</h2>
              <p className="text-xl text-blue-200 mb-8">
                We proudly serve approximately 50,000+ residents across the rural Appalachian communities of three counties.
              </p>
              <div className="space-y-5">
                {[
                  { county: 'Breathitt County', city: 'Jackson', desc: 'Primary service area' },
                  { county: 'Wolfe County', city: 'Campton', desc: 'Primary service area' },
                  { county: 'Clark County', city: 'Winchester', desc: 'Interfacility transfers & Winchester Fire Department support' },
                ].map((area, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{area.county} ({area.city})</p>
                      <p className="text-blue-200 text-sm">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="glass rounded-2xl p-10">
                <Star className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Neighbors Serving Neighbors</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  As a locally-owned ambulance service, we understand the unique needs of Eastern Kentucky families. Our crews live and work in the communities we serve, providing compassionate care with the expertise and professionalism you deserve.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-white text-[#0047AB] px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Request Transport */}
            <motion.div
              variants={fadeInUp}
              className="group bg-white rounded-2xl p-10 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover-lift relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066FF] to-[#3b82f6] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#3b82f6] flex items-center justify-center mb-6 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Transport</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Need non-emergency medical transport? Contact us to schedule your appointment.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] to-[#3b82f6] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all font-semibold hover:scale-105 duration-300"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Join Our Team */}
            <motion.div
              variants={fadeInUp}
              className="group bg-white rounded-2xl p-10 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover-lift relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0047AB] to-[#0066FF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0047AB] to-[#0066FF] flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Looking for a rewarding career in EMS? We're hiring EMTs, Paramedics, and Dispatchers.
              </p>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0047AB] to-[#0066FF] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all font-semibold hover:scale-105 duration-300"
              >
                View Openings
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
