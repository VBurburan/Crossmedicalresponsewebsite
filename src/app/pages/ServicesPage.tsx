import { AlertCircle, Activity, HeartPulse, Ambulance, Stethoscope, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ambulanceHero from '@/assets/9df6fdc0e0ae58037d4c9280f9fd7261c94a4c95.png';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[450px] lg:h-[550px] bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ambulanceHero})`,
            backgroundColor: '#000000',
            backgroundSize: '72%',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </section>

      {/* Emergency 911 Response */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Comprehensive emergency and non-emergency medical transport
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0047AB] to-[#0066FF] rounded-2xl flex items-center justify-center shadow-lg">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Emergency 911 Response</h2>
              </div>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  When seconds count, our team is ready to respond. We provide 24/7/365 rapid response to life-threatening emergencies throughout Breathitt, Wolfe, and Clark counties.
                </p>
                <ul className="space-y-3">
                  {[
                    '24/7/365 emergency response capability',
                    'Dispatched through county 911 systems',
                    'Crews trained for rural mountain terrain navigation',
                    'Air medical coordination for trauma and critical patients',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Call 911</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Chest pain or difficulty breathing',
                  'Severe bleeding or trauma',
                  'Loss of consciousness',
                  'Stroke symptoms (F.A.S.T.)',
                  'Suspected overdose',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-24 bg-gray-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-3">Levels of Care</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Three levels of medical care tailored to your needs</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Activity,
                title: 'Basic Life Support (BLS)',
                staff: 'Staffed by certified Emergency Medical Technicians (EMTs)',
                desc: 'Essential emergency care including oxygen therapy, CPR, bleeding control, and patient monitoring.',
                gradient: 'from-[#0047AB] to-[#003380]',
              },
              {
                icon: HeartPulse,
                title: 'Advanced Life Support (ALS)',
                staff: 'Staffed by licensed Paramedics with EMT or AEMT support',
                desc: 'Advanced interventions including cardiac monitoring, IV access, intubation, and full medication administration.',
                gradient: 'from-[#0066FF] to-[#0047AB]',
              },
              {
                icon: Stethoscope,
                title: 'Critical Care Transport (CCT)',
                staff: "Staffed by Paramedics with Kentucky's Critical Care Endorsement (CCE)",
                desc: 'Highest level of care with ventilator management, specialty medications, vasoactive drips, and advanced equipment monitoring.',
                gradient: 'from-[#003380] to-[#0047AB]',
              },
            ].map((level, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#0066FF]/20 transition-all duration-500 hover-lift relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${level.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <level.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{level.title}</h3>
                <p className="text-[#0066FF] font-medium text-sm mb-4">{level.staff}</p>
                <p className="text-gray-600 leading-relaxed">{level.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Non-Emergency Medical Transport */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066FF] to-[#3b82f6]" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#3b82f6] flex items-center justify-center mb-6 shadow-lg">
                <Ambulance className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Non-Emergency Medical Transport (NEMT)</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Scheduled, non-urgent transport for patients with medical needs who require professional assistance.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Transport Types:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                      <span>Stretcher transport for patients unable to sit upright</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Services Include:</h4>
                  <ul className="space-y-2 text-gray-600">
                    {['Dialysis appointments', 'Doctor visits and therapy sessions', 'Outpatient procedures', 'Hospital discharges', 'Nursing facility transfers'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              {[
                { title: 'Door-Through-Door Assistance', desc: 'Our crews provide complete assistance from your door to your destination and back again.' },
                { title: 'Medical Equipment Accommodation', desc: 'We can safely transport patients with oxygen, portable medical equipment, and other special needs.' },
                { title: 'Insurance Accepted', desc: 'Medicaid and Medicare accepted. Recurring appointments available for dialysis and other regular treatments.' },
              ].map((item, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-lg p-8 border border-gray-100 hover:border-[#0066FF]/20 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066FF] to-[#3b82f6] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Standby */}
      <section className="py-24 bg-gray-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0047AB] to-[#0066FF] rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Event Standby Services</h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Ensure the safety of your event attendees with professional medical coverage. We provide dedicated BLS or ALS crews with an ambulance on-site.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                {[
                  'Community festivals and fairs',
                  'Sporting events and marathons',
                  'Concerts and large gatherings',
                  'Construction sites and industrial events',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] to-[#3b82f6] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all font-semibold hover:scale-105 duration-300"
              >
                Request Event Coverage
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0047AB] to-[#0066FF]" />
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Professional Standby?</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  'Immediate response to medical emergencies',
                  'Certified EMTs or Paramedics on-site',
                  'Fully equipped ambulance ready to transport',
                  'Peace of mind for event organizers and attendees',
                  'May reduce insurance costs',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">&#10003;</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#001a3f] via-[#0047AB] to-[#0066FF] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
        >
          <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-4">Get In Touch</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Medical Transport?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Contact us to schedule non-emergency transport or request event coverage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:606-668-9111"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0047AB] px-10 py-5 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 duration-300"
            >
              Call 606-668-9111
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-white px-10 py-5 rounded-xl transition-all font-semibold text-lg border-2 border-white/40 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm"
            >
              Contact Us Online
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
