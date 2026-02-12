import { useState } from 'react';
import { Briefcase, User, Phone, Mail, MapPin, Award, ChevronLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { motion } from 'motion/react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function ApplicationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    zip: '',
    position: '',
    certifications: '',
    licenseNumber: '',
    yearsExperience: '',
    currentEmployer: '',
    preferredStations: [] as string[],
    shiftPreference: '',
    availableStartDate: '',
    additionalComments: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleStationToggle = (station: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredStations: prev.preferredStations.includes(station)
        ? prev.preferredStations.filter((s) => s !== station)
        : [...prev.preferredStations, station],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://vburburan.app.n8n.cloud/form/cmr-job-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          preferredStations: formData.preferredStations.join(', '),
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          city: '',
          zip: '',
          position: '',
          certifications: '',
          licenseNumber: '',
          yearsExperience: '',
          currentEmployer: '',
          preferredStations: [],
          shiftPreference: '',
          availableStartDate: '',
          additionalComments: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Application submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stations = [
    { id: 'Breathitt', label: 'Breathitt County', city: 'Jackson' },
    { id: 'Wolfe', label: 'Wolfe County', city: 'Campton' },
    { id: 'Clark', label: 'Clark County', city: 'Winchester' },
  ];

  if (submitStatus === 'success') {
    return (
      <div>
        <section className="py-20 lg:py-24 bg-gray-950 text-white">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Application Submitted</h1>
            <p className="text-lg text-gray-400 mb-8">
              Thank you for your interest in joining Cross Medical Response. We review every application carefully and will contact qualified candidates within 5-7 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0047AB] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Back to Careers
              </Link>
              <a
                href="tel:606-668-9111"
                className="inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition-colors font-medium"
              >
                <Phone className="w-4 h-4" /> 606-668-9111
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gray-950 text-white">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Link to="/careers" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-8">
            <ChevronLeft className="w-4 h-4" /> Back to Careers
          </Link>
          <div className="text-center">
            <img src="https://i.imgur.com/YSQN28q.png" alt="Cross Medical Response" className="h-20 md:h-28 mx-auto mb-5" />
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Employment Application</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Apply to join our EMS team serving Eastern Kentucky
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          >
            {/* Sidebar */}
            <motion.div variants={fadeIn} className="lg:col-span-1 space-y-6">
              <div className="bg-gray-50 rounded-xl p-7 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-5">What to Expect</h3>
                <div className="space-y-5">
                  {[
                    { step: '1', title: 'Submit Application', desc: 'Complete the form with your details and qualifications.' },
                    { step: '2', title: 'Application Review', desc: 'Our team reviews your application within 5-7 business days.' },
                    { step: '3', title: 'Interview', desc: 'Qualified candidates are contacted to schedule an interview.' },
                    { step: '4', title: 'Onboarding', desc: 'Accepted applicants begin orientation and training.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3.5">
                      <div className="w-7 h-7 rounded-full bg-[#0047AB] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0047AB]/5 rounded-xl p-7 border border-[#0047AB]/10">
                <h3 className="text-sm font-bold text-[#0047AB] uppercase tracking-wide mb-4">Questions?</h3>
                <div className="space-y-3">
                  <a href="tel:606-668-9111" className="flex items-center gap-3 text-gray-700 hover:text-[#0047AB] transition-colors">
                    <Phone className="w-4 h-4 text-[#0047AB]" />
                    <span className="text-sm font-medium">606-668-9111</span>
                  </a>
                  <Link to="/contact" className="flex items-center gap-3 text-gray-700 hover:text-[#0047AB] transition-colors">
                    <Mail className="w-4 h-4 text-[#0047AB]" />
                    <span className="text-sm font-medium">Contact Us Online</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeIn} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {submitStatus === 'error' && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-medium text-sm">There was an error submitting your application.</p>
                      <p className="text-red-600 text-xs mt-1">Please try again or call us directly at 606-668-9111.</p>
                    </div>
                  </div>
                )}

                {/* Section: Personal Information */}
                <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center gap-3 px-7 py-4 border-b border-gray-200 bg-white">
                    <div className="w-8 h-8 rounded-lg bg-[#0047AB]/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-[#0047AB]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Personal Information</h3>
                      <p className="text-xs text-gray-500">Your contact details</p>
                    </div>
                  </div>
                  <div className="p-7 space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                      <Input
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="mt-1.5"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(606) 555-1234"
                          className="mt-1.5"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
                        <Input
                          id="city"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Jackson"
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code <span className="text-red-500">*</span></Label>
                        <Input
                          id="zip"
                          required
                          value={formData.zip}
                          onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                          placeholder="41339"
                          className="mt-1.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: Professional Qualifications */}
                <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center gap-3 px-7 py-4 border-b border-gray-200 bg-white">
                    <div className="w-8 h-8 rounded-lg bg-[#0047AB]/10 flex items-center justify-center">
                      <Award className="w-4 h-4 text-[#0047AB]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Professional Qualifications</h3>
                      <p className="text-xs text-gray-500">Your experience and credentials</p>
                    </div>
                  </div>
                  <div className="p-7 space-y-4">
                    <div>
                      <Label htmlFor="position">Position Applying For <span className="text-red-500">*</span></Label>
                      <Select value={formData.position} onValueChange={(value) => setFormData({ ...formData, position: value })}>
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="EMT">Emergency Medical Technician (EMT)</SelectItem>
                          <SelectItem value="AEMT">Advanced EMT (AEMT)</SelectItem>
                          <SelectItem value="Paramedic">Paramedic</SelectItem>
                          <SelectItem value="Critical Care Paramedic">Critical Care Paramedic</SelectItem>
                          <SelectItem value="Dispatcher">Emergency Medical Dispatcher</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="certifications">Certifications</Label>
                      <Input
                        id="certifications"
                        value={formData.certifications}
                        onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                        placeholder="BLS, ACLS, PALS, PHTLS, etc."
                        className="mt-1.5"
                      />
                      <p className="text-xs text-gray-400 mt-1">Separate multiple certifications with commas</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="licenseNumber">Kentucky License Number</Label>
                        <Input
                          id="licenseNumber"
                          value={formData.licenseNumber}
                          onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                          placeholder="KY License #"
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="yearsExperience">Years of EMS Experience</Label>
                        <Input
                          id="yearsExperience"
                          value={formData.yearsExperience}
                          onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                          placeholder="e.g. 3"
                          className="mt-1.5"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="currentEmployer">Current / Most Recent Employer</Label>
                      <Input
                        id="currentEmployer"
                        value={formData.currentEmployer}
                        onChange={(e) => setFormData({ ...formData, currentEmployer: e.target.value })}
                        placeholder="Organization name"
                        className="mt-1.5"
                      />
                    </div>
                  </div>
                </div>

                {/* Section: Preferences */}
                <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center gap-3 px-7 py-4 border-b border-gray-200 bg-white">
                    <div className="w-8 h-8 rounded-lg bg-[#0047AB]/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#0047AB]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Location & Availability</h3>
                      <p className="text-xs text-gray-500">Your station and schedule preferences</p>
                    </div>
                  </div>
                  <div className="p-7 space-y-5">
                    {/* Preferred Stations as Cards */}
                    <div>
                      <Label>Preferred Stations</Label>
                      <p className="text-xs text-gray-400 mb-3">Select all that apply</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {stations.map((station) => {
                          const isSelected = formData.preferredStations.includes(station.id);
                          return (
                            <button
                              key={station.id}
                              type="button"
                              onClick={() => handleStationToggle(station.id)}
                              className={`relative flex flex-col items-center gap-1.5 p-4 rounded-lg border-2 transition-all text-center ${
                                isSelected
                                  ? 'border-[#0047AB] bg-[#0047AB]/5 shadow-sm'
                                  : 'border-gray-200 bg-white hover:border-gray-300'
                              }`}
                            >
                              {isSelected && (
                                <div className="absolute top-2 right-2">
                                  <CheckCircle2 className="w-4 h-4 text-[#0047AB]" />
                                </div>
                              )}
                              <MapPin className={`w-5 h-5 ${isSelected ? 'text-[#0047AB]' : 'text-gray-400'}`} />
                              <span className={`text-sm font-semibold ${isSelected ? 'text-[#0047AB]' : 'text-gray-700'}`}>
                                {station.label}
                              </span>
                              <span className="text-xs text-gray-500">{station.city}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="shiftPreference">Shift Preference</Label>
                        <Select value={formData.shiftPreference} onValueChange={(value) => setFormData({ ...formData, shiftPreference: value })}>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select shift preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Day">Day Shift</SelectItem>
                            <SelectItem value="Night">Night Shift</SelectItem>
                            <SelectItem value="24 Hour">24-Hour Shift</SelectItem>
                            <SelectItem value="Rotating">Rotating</SelectItem>
                            <SelectItem value="Flexible">Flexible / No Preference</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="availableStartDate">Available Start Date</Label>
                        <Input
                          id="availableStartDate"
                          type="date"
                          value={formData.availableStartDate}
                          onChange={(e) => setFormData({ ...formData, availableStartDate: e.target.value })}
                          className="mt-1.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: Additional Info */}
                <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center gap-3 px-7 py-4 border-b border-gray-200 bg-white">
                    <div className="w-8 h-8 rounded-lg bg-[#0047AB]/10 flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-[#0047AB]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Additional Information</h3>
                      <p className="text-xs text-gray-500">Anything else you'd like us to know</p>
                    </div>
                  </div>
                  <div className="p-7">
                    <Textarea
                      id="additionalComments"
                      rows={5}
                      value={formData.additionalComments}
                      onChange={(e) => setFormData({ ...formData, additionalComments: e.target.value })}
                      placeholder="Cover letter, relevant experience, why you want to join CMR, etc."
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col items-center gap-3 pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto sm:min-w-[280px] bg-[#0047AB] hover:bg-[#003d94] text-white py-5 px-10 text-base disabled:opacity-50 rounded-lg font-semibold"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </Button>
                  <p className="text-xs text-gray-500 text-center max-w-md">
                    By submitting, you confirm the information provided is accurate. We review all applications and will contact qualified candidates.
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
