import { Briefcase, Award, Heart, Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0047AB]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
        >
          <img src="https://i.imgur.com/YSQN28q.png" alt="Cross Medical Response" className="h-32 md:h-40 lg:h-48 mx-auto mb-8" />
          <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-4">Career Opportunities</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Build a rewarding career in emergency medical services
          </p>
        </motion.div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {[
              { icon: Heart, title: 'Make a Difference', desc: 'Serve your community and save lives every day in Eastern Kentucky.' },
              { icon: Award, title: 'Grow Your Career', desc: 'Advance from EMT to Paramedic to Critical Care with our team.' },
              { icon: Users, title: 'Join a Family', desc: 'Work alongside dedicated professionals who have your back.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0047AB] to-[#0066FF] flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-br from-[#001a3f] via-[#0047AB] to-[#0066FF] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
        >
          <Briefcase className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Apply Now</h2>
          <p className="text-lg text-blue-100 mb-8">
            Ready to join our team? Click below to complete our application form.
          </p>
          <a
            href="https://vburburan.app.n8n.cloud/form/cmr-job-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#0047AB] px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
          >
            Open Application Form
          </a>
        </motion.div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-3">Open Positions</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">We're looking for dedicated professionals to join our team</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Emergency Medical Technician (EMT)',
                requirements: ['Current Kentucky EMT certification', 'Valid driver\'s license', 'BLS certification'],
                gradient: 'from-[#0047AB] to-[#003380]',
              },
              {
                title: 'Advanced Emergency Medical Technician (AEMT)',
                requirements: ['Current Kentucky AEMT certification', 'Valid driver\'s license', 'BLS and ACLS certification'],
                gradient: 'from-[#0066FF] to-[#0047AB]',
              },
              {
                title: 'Paramedic',
                requirements: ['Current Kentucky Paramedic license', 'Valid driver\'s license', 'ACLS and PALS certification'],
                gradient: 'from-[#0047AB] to-[#003380]',
              },
              {
                title: 'Critical Care Paramedic',
                requirements: ['Current Kentucky Paramedic license', 'Kentucky Critical Care Endorsement', 'Valid driver\'s license'],
                gradient: 'from-[#0066FF] to-[#0047AB]',
              },
              {
                title: 'Emergency Medical Dispatcher',
                requirements: ['High school diploma or equivalent', 'Strong communication skills', 'Ability to multitask under pressure'],
                gradient: 'from-[#003380] to-[#0047AB]',
              },
            ].map((position, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#0066FF]/20 transition-all duration-500 hover-lift relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${position.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{position.title}</h3>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Requirements:</p>
                  <ul className="space-y-2 text-gray-600">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                        </div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
