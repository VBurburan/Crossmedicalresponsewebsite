import { MapPin, Heart, Users, Award } from 'lucide-react';
import { motion } from 'motion/react';

const leadershipImage = 'https://i.imgur.com/TDIWsOA.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="py-20 lg:py-24 bg-gray-950 text-white">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">About Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Neighbors serving neighbors in Eastern Kentucky
          </p>
        </motion.div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
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
            <motion.div variants={fadeIn}>
              <img
                src={leadershipImage}
                alt="Greg Gullett and Jimmy Conley of Cross Medical Response"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#0047AB] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            To provide compassionate, professional emergency and non-emergency medical transport services to the residents of Eastern Kentucky. We are committed to being there when our neighbors need us most, delivering the highest quality of care across the rugged Appalachian terrain we call home.
          </p>
        </motion.div>
      </section>

      {/* Service Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Service Area</h2>
            <p className="text-lg text-gray-600">Serving three counties across Eastern Kentucky</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { county: 'Breathitt County', city: 'Jackson, KY', type: 'Primary service area', desc: '24/7 emergency and non-emergency response capabilities' },
              { county: 'Wolfe County', city: 'Campton, KY', type: 'Primary service area', desc: '24/7 emergency and non-emergency response capabilities' },
              { county: 'Clark County', city: 'Winchester, KY', type: 'Specialized service area', desc: 'Interfacility transfers from Clark Regional Hospital and support for Winchester Fire Department' },
            ].map((area, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 rounded-xl p-7 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <MapPin className="w-6 h-6 text-[#0047AB] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{area.county}</h3>
                <p className="text-gray-500 mb-3 text-sm">{area.city}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">{area.type}</span> &mdash; {area.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Leadership</h2>
            <p className="text-lg text-gray-600">Experienced professionals dedicated to our community</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-lg bg-[#0047AB] flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Greg Gullett</h3>
                  <p className="text-[#0047AB] font-medium text-sm">Director</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Greg Gullett serves as Director of Cross Medical Response, leading our team with a vision to bring exceptional medical transport services to the communities of Eastern Kentucky. With extensive experience in emergency medical services and a deep commitment to the Appalachian region, Greg guides our operations with dedication and compassion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Station Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Stations</h2>
            <p className="text-lg text-gray-600">Strategically located to serve our communities</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: 'Jackson Station', address: '3 Howell Ln', city: 'Jackson, KY 41339', base: 'Breathitt County Base', desc: '' },
              { name: 'Campton Station', address: '364 South Washington Street', city: 'Campton, KY 41301', base: 'Wolfe County Base', desc: '' },
              { name: 'Winchester Station', address: 'Winchester, KY', city: '', base: 'Clark County Base', desc: 'Interfacility Transfers & Fire Department Support' },
            ].map((station, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 rounded-xl p-7 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <MapPin className="w-6 h-6 text-[#0047AB] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{station.name}</h3>
                <div className="text-gray-600 text-sm space-y-1 mb-3">
                  <p>{station.address}</p>
                  {station.city && <p>{station.city}</p>}
                </div>
                <p className="text-sm font-medium text-[#0047AB]">{station.base}</p>
                {station.desc && <p className="text-sm text-gray-500 mt-1">{station.desc}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0047AB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">Our Values</h2>
            <p className="text-lg text-blue-200">The principles that guide everything we do</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Users, title: 'Community First', desc: 'We are neighbors serving neighbors. Our commitment to the people of Eastern Kentucky drives everything we do.' },
              { icon: Award, title: 'Excellence in Care', desc: 'We maintain the highest standards of medical care and professionalism in every transport.' },
              { icon: Heart, title: 'Compassion', desc: 'We treat every patient with dignity, respect, and the compassion they deserve.' },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeIn} className="text-center bg-white/10 rounded-xl p-8 border border-white/15">
                <value.icon className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-blue-100 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
