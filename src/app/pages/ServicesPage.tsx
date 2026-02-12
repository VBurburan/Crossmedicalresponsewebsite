import { AlertCircle, Activity, HeartPulse, Ambulance, Stethoscope, Calendar, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from 'figma:asset/f50fa835ae605b4fb335012299f164217b8ed90e.png';
import ambulanceHero from 'figma:asset/9df6fdc0e0ae58037d4c9280f9fd7261c94a4c95.png';

export function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[275px] md:h-[450px] lg:h-[550px] bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${ambulanceHero})`, 
            backgroundColor: '#000000',
            backgroundSize: '72%'
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </section>

      {/* Emergency 911 Response */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Services Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Comprehensive emergency and non-emergency medical transport
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#0047AB] rounded-full flex items-center justify-center">
                  <AlertCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Emergency 911 Response</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  When seconds count, our team is ready to respond. We provide 24/7/365 rapid response to life-threatening emergencies throughout Breathitt, Wolfe, and Clark counties.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0047AB] mt-1 font-bold">•</span>
                    <span>24/7/365 emergency response capability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0047AB] mt-1 font-bold">•</span>
                    <span>Dispatched through county 911 systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0047AB] mt-1 font-bold">•</span>
                    <span>Crews trained for rural mountain terrain navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0047AB] mt-1 font-bold">•</span>
                    <span>Air medical coordination for trauma and critical patients</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 border-2 border-[#0047AB] shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">When to Call 911</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-[#0047AB] mt-0.5 flex-shrink-0" />
                  <span>Chest pain or difficulty breathing</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-[#0047AB] mt-0.5 flex-shrink-0" />
                  <span>Severe bleeding or trauma</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-[#0047AB] mt-0.5 flex-shrink-0" />
                  <span>Loss of consciousness</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-[#0047AB] mt-0.5 flex-shrink-0" />
                  <span>Stroke symptoms (F.A.S.T.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-[#0047AB] mt-0.5 flex-shrink-0" />
                  <span>Suspected overdose</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Three levels of medical care tailored to your needs</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* BLS */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0047AB] shadow-md">
              <Activity className="w-12 h-12 text-[#0047AB] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Life Support (BLS)</h3>
              <p className="text-gray-600 mb-4">
                Staffed by certified Emergency Medical Technicians (EMTs)
              </p>
              <div className="text-gray-600">
                <p>Essential emergency care including oxygen therapy, CPR, bleeding control, and patient monitoring.</p>
              </div>
            </div>

            {/* ALS */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0066FF] shadow-md">
              <HeartPulse className="w-12 h-12 text-[#0066FF] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Life Support (ALS)</h3>
              <p className="text-gray-600 mb-4">
                Staffed by licensed Paramedics with EMT or AEMT support
              </p>
              <div className="text-gray-600">
                <p>Advanced interventions including cardiac monitoring, IV access, intubation, and full medication administration.</p>
              </div>
            </div>

            {/* CCT */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0047AB] shadow-md">
              <Stethoscope className="w-12 h-12 text-[#0047AB] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Critical Care Transport (CCT)</h3>
              <p className="text-gray-600 mb-4">
                Staffed by Paramedics with Kentucky's Critical Care Endorsement (CCE)
              </p>
              <div className="text-gray-600">
                <p>Highest level of care with ventilator management, specialty medications, vasoactive drips, and advanced equipment monitoring.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Non-Emergency Medical Transport */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#0066FF]">
              <Ambulance className="w-12 h-12 text-[#0066FF] mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Non-Emergency Medical Transport (NEMT)</h2>
              <p className="text-gray-600 mb-6">
                Scheduled, non-urgent transport for patients with medical needs who require professional assistance.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Transport Types:</h4>
                  <ul className="space-y-1 text-gray-600 ml-4">
                    <li>• Stretcher transport for patients unable to sit upright</li>
         
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Services Include:</h4>
                  <ul className="space-y-1 text-gray-600 ml-4">
                    <li>• Dialysis appointments</li>
                    <li>• Doctor visits and therapy sessions</li>
                    <li>• Outpatient procedures</li>
                    <li>• Hospital discharges</li>
                    <li>• Nursing facility transfers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#0066FF]">
                <h4 className="font-semibold text-gray-900 mb-2">Door-Through-Door Assistance</h4>
                <p className="text-gray-600">
                  Our crews provide complete assistance from your door to your destination and back again.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#0066FF]">
                <h4 className="font-semibold text-gray-900 mb-2">Medical Equipment Accommodation</h4>
                <p className="text-gray-600">
                  We can safely transport patients with oxygen, portable medical equipment, and other special needs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#0066FF]">
                <h4 className="font-semibold text-gray-900 mb-2">Insurance Accepted</h4>
                <p className="text-gray-600">
                  Medicaid and Medicare accepted. Recurring appointments available for dialysis and other regular treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Standby */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#0047AB] rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Event Standby Services</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Ensure the safety of your event attendees with professional medical coverage. We provide dedicated BLS or ALS crews with an ambulance on-site.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1 font-bold">•</span>
                  <span>Community festivals and fairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1 font-bold">•</span>
                  <span>Sporting events and marathons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1 font-bold">•</span>
                  <span>Concerts and large gatherings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] mt-1 font-bold">•</span>
                  <span>Construction sites and industrial events</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-6 py-3 rounded-lg hover:bg-[#0047AB] transition-colors font-semibold"
              >
                Request Event Coverage
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 border-2 border-[#0047AB]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Professional Standby?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] font-bold mt-0.5">✓</span>
                  <span>Immediate response to medical emergencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] font-bold mt-0.5">✓</span>
                  <span>Certified EMTs or Paramedics on-site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] font-bold mt-0.5">✓</span>
                  <span>Fully equipped ambulance ready to transport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] font-bold mt-0.5">✓</span>
                  <span>Peace of mind for event organizers and attendees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0047AB] font-bold mt-0.5">✓</span>
                  <span>May reduce insurance costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0047AB] to-[#0066FF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Medical Transport?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us to schedule non-emergency transport or request event coverage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:606-668-9111"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0047AB] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Call 606-668-9111
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0066FF] text-white px-8 py-4 rounded-lg hover:bg-[#0047AB] transition-colors font-semibold border-2 border-white"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}