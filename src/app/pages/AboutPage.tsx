import image_3e9916f012e18f7f10ced0dda0798b44949fedcb from 'figma:asset/3e9916f012e18f7f10ced0dda0798b44949fedcb.png';
import { MapPin, Heart, Users, Award } from 'lucide-react';
import logo from 'figma:asset/f50fa835ae605b4fb335012299f164217b8ed90e.png';

const teamImage = image_3e9916f012e18f7f10ced0dda0798b44949fedcb;
const leadershipImage = 'https://i.imgur.com/TDIWsOA.jpg';

export function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Neighbors serving neighbors in Eastern Kentucky
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Cross Medical Response is a locally-owned ambulance service in the communities of Campton, Jackson, and Winchester. We were founded with a simple but powerful mission: to provide exceptional emergency and non-emergency medical transport to the people of Eastern Kentucky's Appalachian region.
                </p>
                <p className="mb-4">
                  Our service area spans Breathitt County, Wolfe County, and Clark County, serving approximately 50,000+ residents across rural Eastern Kentucky. We understand the unique needs of our mountain communities because we are part of them.
                </p>
                <p>
                  Under the leadership of Director Greg Gullett, our team has grown to include highly trained EMTs, AEMTs, Paramedics, and Critical Care Paramedics who are dedicated to providing the highest level of care to our neighbors.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={leadershipImage}
                alt="Greg Gullett and Jimmy Conley of Cross Medical Response"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-br from-[#0047AB] to-[#0066FF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            To provide compassionate, professional emergency and non-emergency medical transport services to the residents of Eastern Kentucky. We are committed to being there when our neighbors need us most, delivering the highest quality of care across the rugged Appalachian terrain we call home.
          </p>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Service Area</h2>
            <p className="text-xl text-gray-600">
              Serving three counties across Eastern Kentucky
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#0066FF]">
              <MapPin className="w-12 h-12 text-[#0066FF] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Breathitt County</h3>
              <p className="text-gray-700 mb-4">Jackson, KY</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Primary service area</strong> with 24/7 emergency and non-emergency response capabilities
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#0066FF]">
              <MapPin className="w-12 h-12 text-[#0066FF] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Wolfe County</h3>
              <p className="text-gray-700 mb-4">Campton, KY</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Primary service area</strong> with 24/7 emergency and non-emergency response capabilities
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#0066FF]">
              <MapPin className="w-12 h-12 text-[#0066FF] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Clark County</h3>
              <p className="text-gray-700 mb-4">Winchester, KY</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Specialized service area</strong> dedicated to interfacility transfers from Clark Regional Hospital and support for Winchester Fire Department
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to our community
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#0066FF]">
              <div className="flex items-center gap-4 mb-4">
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Greg Gullett</h3>
                  <p className="text-gray-600">Director</p>
                </div>
              </div>
              <p className="text-gray-700">
                Greg Gullett serves as Director of Cross Medical Response, leading our team with a vision to bring exceptional medical transport services to the communities of Eastern Kentucky. With extensive experience in emergency medical services and a deep commitment to the Appalachian region, Greg guides our operations with dedication and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Station Locations */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Stations</h2>
            <p className="text-xl text-gray-600">
              Strategically located to serve our communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0047AB] shadow-md">
              <MapPin className="w-10 h-10 text-[#0047AB] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Jackson Station</h3>
              <div className="text-gray-600 space-y-1 mb-4">
                <p>3 Howell Ln</p>
                <p>Jackson, KY 41339</p>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm font-semibold text-[#0047AB]">Breathitt County Base</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0066FF] shadow-md">
              <MapPin className="w-10 h-10 text-[#0066FF] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Campton Station</h3>
              <div className="text-gray-600 space-y-1 mb-4">
                <p>364 South Washington Street</p>
                <p>Campton, KY 41301</p>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm font-semibold text-[#0066FF]">Wolfe County Base</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0047AB] shadow-md">
              <MapPin className="w-10 h-10 text-[#0047AB] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Winchester Station</h3>
              <div className="text-gray-600 space-y-1 mb-4">
                <p>Winchester, KY</p>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm font-semibold text-[#0047AB]">Clark County Base</p>
                <p className="text-sm text-gray-600 mt-1">Interfacility Transfers & Fire Department Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0047AB] to-[#0066FF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-blue-100">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Community First</h3>
              <p className="text-blue-100">
                We are neighbors serving neighbors. Our commitment to the people of Eastern Kentucky drives everything we do.
              </p>
            </div>

            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Excellence in Care</h3>
              <p className="text-blue-100">
                We maintain the highest standards of medical care and professionalism in every transport.
              </p>
            </div>

            <div className="text-center">
              <Heart className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Compassion</h3>
              <p className="text-blue-100">
                We treat every patient with dignity, respect, and the compassion they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}