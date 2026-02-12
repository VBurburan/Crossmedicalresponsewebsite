import heroBackground from '@/assets/8f7d2adefb2fd6d9633c07d1d01d2ad767a32d8d.png';
import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, AlertCircle, Ambulance, HeartPulse, Users, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Cross Medical Response Ambulance"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-20"
        >
          <div className="text-center mb-6">
            <img src="https://i.imgur.com/YSQN28q.png" alt="Cross Medical Response" className="h-36 md:h-44 lg:h-56 mx-auto mb-6" />
          </div>

          <div className="text-white text-center max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl mb-8 text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              Your trusted ambulance service serving Eastern Kentucky's Appalachian region
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <a
                href="tel:606-668-9111"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0047AB] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-bold"
              >
                <Phone className="w-5 h-5" />
                606-668-9111
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-lg border-2 border-white/50 hover:bg-white/10 transition-colors text-lg font-medium"
              >
                Our Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center justify-center gap-6 text-sm text-gray-300"
            >
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 24/7/365</span>
              <span className="text-gray-600">|</span>
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Certified Crews</span>
              <span className="text-gray-600">|</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 3 Counties</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-[#0047AB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold">3</p>
              <p className="text-sm text-blue-200">Counties Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50,000+</p>
              <p className="text-sm text-blue-200">Residents Protected</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm text-blue-200">Always Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold">365</p>
              <p className="text-sm text-blue-200">Days a Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive emergency and non-emergency medical transport across Eastern Kentucky
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: AlertCircle,
                title: 'Emergency 911',
                description: '24/7/365 rapid response to life-threatening emergencies. Dispatched through county 911 systems with air medical coordination.',
              },
              {
                icon: Ambulance,
                title: 'Medical Transport',
                description: 'Scheduled and non-emergency transport including dialysis appointments, hospital discharges, and interfacility transfers.',
              },
              {
                icon: HeartPulse,
                title: 'Critical Care Transport',
                description: "Advanced life support and critical care transport with paramedics holding Kentucky's Critical Care Endorsement.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0047AB] flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                <Link to="/services" className="text-[#0047AB] hover:text-[#003380] font-medium inline-flex items-center gap-1">
                  Learn More &rarr;
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-[#0047AB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-5">Serving Eastern Kentucky</h2>
              <p className="text-lg text-blue-100 mb-8">
                We proudly serve approximately 50,000+ residents across the rural Appalachian communities of three counties.
              </p>
              <div className="space-y-4">
                {[
                  { county: 'Breathitt County', city: 'Jackson', desc: 'Primary service area' },
                  { county: 'Wolfe County', city: 'Campton', desc: 'Primary service area' },
                  { county: 'Clark County', city: 'Winchester', desc: 'Interfacility transfers & Winchester Fire Department support' },
                ].map((area, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-200" />
                    <div>
                      <p className="font-semibold">{area.county} ({area.city})</p>
                      <p className="text-blue-200 text-sm">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <div className="bg-white/10 rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Neighbors Serving Neighbors</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  As a locally-owned ambulance service, we understand the unique needs of Eastern Kentucky families. Our crews live and work in the communities we serve, providing compassionate care with the expertise and professionalism you deserve.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-white text-[#0047AB] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0047AB] flex items-center justify-center mb-5">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Request Transport</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Need non-emergency medical transport? Contact us to schedule your appointment.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0047AB] text-white px-6 py-3 rounded-lg hover:bg-[#003d94] transition-colors font-medium"
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0047AB] flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Join Our Team</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Looking for a rewarding career in EMS? We're hiring EMTs, Paramedics, and Dispatchers.
              </p>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 bg-[#0047AB] text-white px-6 py-3 rounded-lg hover:bg-[#003d94] transition-colors font-medium"
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
