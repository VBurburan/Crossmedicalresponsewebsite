import { Briefcase, Award, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-24 bg-gray-950 text-white">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <img src="https://i.imgur.com/YSQN28q.png" alt="Cross Medical Response" className="h-28 md:h-36 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Join Our Team</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Build a rewarding career in emergency medical services
          </p>
        </motion.div>
      </section>

      {/* Why Join */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Heart, title: 'Make a Difference', desc: 'Serve your community and save lives every day in Eastern Kentucky.' },
              { icon: Award, title: 'Grow Your Career', desc: 'Advance from EMT to Paramedic to Critical Care with our team.' },
              { icon: Users, title: 'Join a Family', desc: 'Work alongside dedicated professionals who have your back.' },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="text-center">
                <div className="w-12 h-12 rounded-lg bg-[#0047AB] flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-[#0047AB] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h2 className="text-3xl font-bold mb-3">Apply Now</h2>
          <p className="text-blue-100 mb-6">Ready to join our team? Click below to complete our application form.</p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 bg-white text-[#0047AB] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Open Application Form
          </Link>
        </motion.div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Open Positions</h2>
            <p className="text-lg text-gray-600">We're looking for dedicated professionals to join our team</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { title: 'Emergency Medical Technician (EMT)', requirements: ['Current Kentucky EMT certification', 'Valid driver\'s license', 'BLS certification'] },
              { title: 'Advanced Emergency Medical Technician (AEMT)', requirements: ['Current Kentucky AEMT certification', 'Valid driver\'s license', 'BLS and ACLS certification'] },
              { title: 'Paramedic', requirements: ['Current Kentucky Paramedic license', 'Valid driver\'s license', 'ACLS and PALS certification'] },
              { title: 'Critical Care Paramedic', requirements: ['Current Kentucky Paramedic license', 'Kentucky Critical Care Endorsement', 'Valid driver\'s license'] },
              { title: 'Emergency Medical Dispatcher', requirements: ['High school diploma or equivalent', 'Strong communication skills', 'Ability to multitask under pressure'] },
            ].map((position, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white rounded-xl p-7 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{position.title}</h3>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Requirements:</p>
                <ul className="space-y-1.5 text-gray-600 text-sm">
                  {position.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB] mt-1.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
