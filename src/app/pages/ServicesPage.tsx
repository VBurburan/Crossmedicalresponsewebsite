import { AlertCircle, Activity, HeartPulse, Ambulance, Stethoscope, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ambulanceHero from '@/assets/9df6fdc0e0ae58037d4c9280f9fd7261c94a4c95.png';
import { motion } from 'motion/react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[250px] md:h-[400px] lg:h-[500px] bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ambulanceHero})`, backgroundColor: '#000', backgroundSize: '72%' }}
        />
        <div className="absolute inset-0 hero-overlay" />
      </section>

      {/* Services Title */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Our Services</h1>
            <p className="text-lg text-gray-600">Comprehensive emergency and non-emergency medical transport</p>
          </motion.div>

          {/* Emergency 911 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start"
          >
            <motion.div variants={fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0047AB] rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Emergency 911 Response</h2>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed">
                When seconds count, our team is ready to respond. We provide 24/7/365 rapid response to life-threatening emergencies throughout Breathitt, Wolfe, and Clark counties.
              </p>
              <ul className="space-y-2 text-gray-600">
                {[
                  '24/7/365 emergency response capability',
                  'Dispatched through county 911 systems',
                  'Crews trained for rural mountain terrain navigation',
                  'Air medical coordination for trauma and critical patients',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-red-50 rounded-xl p-7 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-5">When to Call 911</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Chest pain or difficulty breathing',
                  'Severe bleeding or trauma',
                  'Loss of consciousness',
                  'Stroke symptoms (F.A.S.T.)',
                  'Suspected overdose',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Three Levels of Medical Care</h2>
            <p className="text-lg text-gray-600">Tailored to your needs</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Activity,
                title: 'Basic Life Support (BLS)',
                staff: 'Staffed by certified Emergency Medical Technicians (EMTs)',
                desc: 'Essential emergency care including oxygen therapy, CPR, bleeding control, and patient monitoring.',
              },
              {
                icon: HeartPulse,
                title: 'Advanced Life Support (ALS)',
                staff: 'Staffed by licensed Paramedics with EMT or AEMT support',
                desc: 'Advanced interventions including cardiac monitoring, IV access, intubation, and full medication administration.',
              },
              {
                icon: Stethoscope,
                title: 'Critical Care Transport (CCT)',
                staff: "Staffed by Paramedics with Kentucky's Critical Care Endorsement (CCE)",
                desc: 'Highest level of care with ventilator management, specialty medications, vasoactive drips, and advanced equipment monitoring.',
              },
            ].map((level, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white rounded-xl p-7 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-[#0047AB] flex items-center justify-center mb-5">
                  <level.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{level.title}</h3>
                <p className="text-[#0047AB] text-sm font-medium mb-3">{level.staff}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{level.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Non-Emergency Transport */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#0047AB] flex items-center justify-center mb-5">
                <Ambulance className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Emergency Medical Transport</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Scheduled, non-urgent transport for patients with medical needs who require professional assistance.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Services Include:</h4>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  {['Dialysis appointments', 'Doctor visits and therapy sessions', 'Outpatient procedures', 'Hospital discharges', 'Nursing facility transfers'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB] mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-5">
              {[
                { title: 'Door-Through-Door Assistance', desc: 'Our crews provide complete assistance from your door to your destination and back again.' },
                { title: 'Medical Equipment Accommodation', desc: 'We can safely transport patients with oxygen, portable medical equipment, and other special needs.' },
                { title: 'Insurance Accepted', desc: 'Medicaid and Medicare accepted. Recurring appointments available for dialysis and other regular treatments.' },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Standby */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start"
          >
            <motion.div variants={fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0047AB] rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Event Standby Services</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ensure the safety of your event attendees with professional medical coverage. We provide dedicated BLS or ALS crews with an ambulance on-site.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                {['Community festivals and fairs', 'Sporting events and marathons', 'Concerts and large gatherings', 'Construction sites and industrial events'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0047AB] text-white px-6 py-3 rounded-lg hover:bg-[#003d94] transition-colors font-medium">
                Request Event Coverage
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white rounded-xl p-7 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Why Choose Professional Standby?</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                {['Immediate response to medical emergencies', 'Certified EMTs or Paramedics on-site', 'Fully equipped ambulance ready to transport', 'Peace of mind for organizers and attendees', 'May reduce insurance costs'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0047AB] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Need Medical Transport?</h2>
          <p className="text-lg text-blue-100 mb-8">Contact us to schedule non-emergency transport or request event coverage</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:606-668-9111" className="inline-flex items-center justify-center gap-2 bg-white text-[#0047AB] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg">
              Call 606-668-9111
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-lg border-2 border-white/50 hover:bg-white/10 transition-colors font-medium text-lg">
              Contact Us Online
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
