import logo from 'figma:asset/f50fa835ae605b4fb335012299f164217b8ed90e.png';

export function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-black">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <img src={logo} alt="Cross Medical Response" className="h-32 md:h-40 lg:h-48 mb-6" />
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Build a rewarding career in emergency medical services
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Apply Now</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to join our team? Click below to complete our application form.
          </p>
          <a
            href="https://vburburan.app.n8n.cloud/form/cmr-job-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0047AB] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0066FF] transition-colors shadow-lg"
          >
            Open Application Form
          </a>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              We're looking for dedicated professionals to join our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EMT */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0047AB] shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Medical Technician (EMT)</h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-semibold text-gray-900">Requirements:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Current Kentucky EMT certification</li>
                  <li>• Valid driver's license</li>
                  <li>• BLS certification</li>
                </ul>
              </div>
            </div>

            {/* AEMT */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0066FF] shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Emergency Medical Technician (AEMT)</h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-semibold text-gray-900">Requirements:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Current Kentucky AEMT certification</li>
                  <li>• Valid driver's license</li>
                  <li>• BLS and ACLS certification</li>
                </ul>
              </div>
            </div>

            {/* Paramedic */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0047AB] shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Paramedic</h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-semibold text-gray-900">Requirements:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Current Kentucky Paramedic license</li>
                  <li>• Valid driver's license</li>
                  <li>• ACLS and PALS certification</li>
                </ul>
              </div>
            </div>

            {/* Critical Care Paramedic */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0066FF] shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Critical Care Paramedic</h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-semibold text-gray-900">Requirements:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Current Kentucky Paramedic license</li>
                  <li>• Kentucky Critical Care Endorsement </li>
                  <li>• Valid driver's license</li>
                </ul>
              </div>
            </div>

            {/* Dispatcher */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#0047AB] shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Medical Dispatcher</h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-semibold text-gray-900">Requirements:</p>
                <ul className="ml-4 space-y-1">
                  <li>• High school diploma or equivalent</li>
                  <li>• Strong communication skills</li>
                  <li>• Ability to multitask under pressure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}