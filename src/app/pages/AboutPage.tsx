import teamImage from '@/assets/3e9916f012e18f7f10ced0dda0798b44949fedcb.png';
import { MapPin, Heart, Users, Award } from 'lucide-react';
import { motion } from 'motion/react';

const leadershipImage = 'https://i.imgur.com/TDIWsOA.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
        >
          <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-4">Who We Are</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Neighbors serving neighbors in Eastern Kentucky
          </p>
        </motion.div>
      </section>

      {/* Company History */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-3">Our History</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  Cross Medical Response is a locally-owned ambulance service in the communities of Campton, Jackson, and Winchester. We were founded with a simple but powerful mission: to provide exceptional emergency and non-emergency medical transport to the people of Eastern Kentucky's Appalachian region.
                </p>
                <p>
                  Our service area spans Breathitt County, Wolfe County, and Clark County, serving approximately 50,000+ residents across rural Eastern Kentucky. We understand the unique needs of our mountain communities because we are part of them.
                </p>
                <p>
                  Under the leadership of Director Greg Gullett, our team has grown to include highly trained EMTs, AEMTs, Paramedics, and Critical Care Paramedics who are dedicated to providing the highest level of care to our neighbors.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0047AB]/20 to-[#0066FF]/20 rounded-2xl blur-xl" />
              <img
                src={leadershipImage}
                alt="Greg Gullett and Jimmy Conley of Cross Medical Response"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover relative"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gradient-to-br from-[#001a3f] via-[#0047AB] to-[#0066FF] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
        >
          <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-4">Our Purpose</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            To provide compassionate, professional emergency and non-emergency medical transport services to the residents of Eastern Kentucky. We are committed to being there when our neighbors need us most, delivering the highest quality of care across the rugged Appalachian terrain we call home.
          </p>
        </motion.div>
      </section>

      {/* Service Area */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-3">Coverage Area</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Service Area</h2>
            <p className="text-xl text-gray-600">Serving three counties across Eastern Kentucky</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { county: 'Breathitt County', city: 'Jackson, KY', type: 'Primary service area', desc: '24/7 emergency and non-emergency response capabilities' },
              { county: 'Wolfe County', city: 'Campton, KY', type: 'Primary service area', desc: '24/7 emergency and non-emergency response capabilities' },
              { county: 'Clark County', city: 'Winchester, KY', type: 'Specialized service area', desc: 'Interfacility transfers from Clark Regional Hospital and support for Winchester Fire Department' },
            ].map((area, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 border border-gray-100 hover:border-[#0066FF]/20 transition-all duration-500 hover-lift relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0047AB] to-[#0066FF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0047AB] to-[#0066FF] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.county}</h3>
                <p className="text-gray-500 mb-4">{area.city}</p>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    <strong>{area.type}</strong> &mdash; {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-gray-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-3">Our Team</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to our community</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0047AB] to-[#0066FF]" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0047AB] to-[#0066FF] flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Greg Gullett</h3>
                  <p className="text-[#0066FF] font-medium">Director</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Greg Gullett serves as Director of Cross Medical Response, leading our team with a vision to bring exceptional medical transport services to the communities of Eastern Kentucky. With extensive experience in emergency medical services and a deep commitment to the Appalachian region, Greg guides our operations with dedication and compassion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Station Locations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-3">Find Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Stations</h2>
            <p className="text-xl text-gray-600">Strategically located to serve our communities</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: 'Jackson Station', address: '3 Howell Ln', city: 'Jackson, KY 41339', base: 'Breathitt County Base', desc: '' },
              { name: 'Campton Station', address: '364 South Washington Street', city: 'Campton, KY 41301', base: 'Wolfe County Base', desc: '' },
              { name: 'Winchester Station', address: 'Winchester, KY', city: '', base: 'Clark County Base', desc: 'Interfacility Transfers & Fire Department Support' },
            ].map((station, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#0066FF]/20 transition-all duration-500 hover-lift relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-[#0047AB] to-[#0066FF]' : 'from-[#0066FF] to-[#3b82f6]'} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0047AB] to-[#0066FF] flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{station.name}</h3>
                <div className="text-gray-600 space-y-1 mb-4">
                  <p>{station.address}</p>
                  {station.city && <p>{station.city}</p>}
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-[#0066FF]">{station.base}</p>
                  {station.desc && <p className="text-sm text-gray-500 mt-1">{station.desc}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-[#001a3f] via-[#0047AB] to-[#0066FF] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-4">What Drives Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-blue-200">The principles that guide everything we do</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Users, title: 'Community First', desc: 'We are neighbors serving neighbors. Our commitment to the people of Eastern Kentucky drives everything we do.' },
              { icon: Award, title: 'Excellence in Care', desc: 'We maintain the highest standards of medical care and professionalism in every transport.' },
              { icon: Heart, title: 'Compassion', desc: 'We treat every patient with dignity, respect, and the compassion they deserve.' },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center glass rounded-2xl p-10">
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-blue-100 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
