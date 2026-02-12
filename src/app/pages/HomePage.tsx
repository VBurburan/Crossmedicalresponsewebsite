import image_8f7d2adefb2fd6d9633c07d1d01d2ad767a32d8d from 'figma:asset/8f7d2adefb2fd6d9633c07d1d01d2ad767a32d8d.png';
import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, Heart, AlertCircle, Ambulance, HeartPulse, Users } from 'lucide-react';
import logo from 'figma:asset/5bef32d054866d4324d094dd5f30ec97ec660bb3.png';

const heroImage = 'https://images.unsplash.com/photo-1721411480070-fcb558776d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJ1bGFuY2UlMjBlbWVyZ2VuY3klMjBtZWRpY2FsfGVufDF8fHx8MTc2OTE2MjA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[700px] lg:min-h-[800px] bg-black">
        <div className="absolute inset-0 opacity-60">
          <img
            src={image_8f7d2adefb2fd6d9633c07d1d01d2ad767a32d8d}
            alt="Cross Medical Response Ambulance"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-16">
          <div className="text-center mb-8">
            <img src={logo} alt="Cross Medical Response - We're Going Places" className="h-40 md:h-48 lg:h-64 mx-auto mb-8" />
          </div>
          
          <div className="text-white text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white font-semibold drop-shadow-lg bg-black/70 px-1 py-0 rounded-xl inline-block mt-16">
              Your trusted ambulance service serving Eastern Kentucky's Appalachian region
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="tel:606-668-9111"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0047AB] px-10 py-5 rounded-xl hover:bg-gray-100 transition-all shadow-2xl text-xl font-bold"
              >
                <Phone className="w-7 h-7" />
                606-668-9111
              </a>
              
            </div>
            
            {/* 24/7/365 Badge */}
            
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive emergency and non-emergency medical transport across Eastern Kentucky
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Emergency 911 */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0047AB] shadow-md hover:shadow-lg transition-shadow">
              <AlertCircle className="w-12 h-12 text-[#0047AB] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Emergency 911</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                24/7/365 rapid response to life-threatening emergencies. Dispatched through county 911 systems with air medical coordination.
              </p>
              <Link to="/services" className="text-[#0066FF] hover:text-[#0047AB] font-semibold inline-flex items-center gap-2">
                Learn More →
              </Link>
            </div>

            {/* Medical Transport */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0066FF] shadow-md hover:shadow-lg transition-shadow">
              <Ambulance className="w-12 h-12 text-[#0066FF] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Medical Transport</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Scheduled and non-emergency transport including dialysis appointments, hospital discharges, and interfacility transfers.
              </p>
              <Link to="/services" className="text-[#0066FF] hover:text-[#0047AB] font-semibold inline-flex items-center gap-2">
                Learn More →
              </Link>
            </div>

            {/* Critical Care */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0047AB] shadow-md hover:shadow-lg transition-shadow">
              <HeartPulse className="w-12 h-12 text-[#0047AB] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Critical Care Transport</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced life support and critical care transport with paramedics holding Kentucky's Critical Care Endorsement.
              </p>
              <Link to="/services" className="text-[#0066FF] hover:text-[#0047AB] font-semibold inline-flex items-center gap-2">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0047AB] to-[#0066FF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Serving Eastern Kentucky</h2>
              <p className="text-xl text-blue-100 mb-6">
                We proudly serve approximately 50,000+ residents across the rural Appalachian communities of three counties.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Breathitt County (Jackson)</p>
                    <p className="text-blue-100">Primary service area</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Wolfe County (Campton)</p>
                    <p className="text-blue-100">Primary service area</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Clark County (Winchester)</p>
                    <p className="text-blue-100">Interfacility transfers & Winchester Fire Department support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/30">
                <h3 className="text-2xl font-semibold mb-4">Neighbors Serving Neighbors</h3>
                <p className="text-blue-100 mb-6">
                  As a locally-owned ambulance service, we understand the unique needs of Eastern Kentucky families. Our crews live and work in the communities we serve, providing compassionate care with the expertise and professionalism you deserve.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-white text-[#0047AB] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Request Transport */}
            <div className="bg-white rounded-lg p-8 border-2 border-[#0066FF] shadow-md hover:shadow-lg transition-shadow">
              <Phone className="w-12 h-12 text-[#0066FF] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Transport</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Need non-emergency medical transport? Contact us to schedule your appointment.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-6 py-3 rounded-lg hover:bg-[#0047AB] transition-colors font-semibold"
              >
                Contact Us
              </Link>
            </div>

            {/* Join Our Team */}
            <div className="bg-white rounded-lg p-8 border-2 border-[#0047AB] shadow-md hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-[#0047AB] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Looking for a rewarding career in EMS? We're hiring EMTs, Paramedics, and Dispatchers.
              </p>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 bg-[#0047AB] text-white px-6 py-3 rounded-lg hover:bg-[#0066FF] transition-colors font-semibold"
              >
                View Openings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}