import { useState } from 'react';
import { Briefcase, Award, Heart, Users } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Checkbox } from '@/app/components/ui/checkbox';
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

export function CareersPage() {
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

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
          >
            <div className="text-center mb-10">
              <Briefcase className="w-10 h-10 text-[#0047AB] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Employment Application</h2>
              <p className="text-gray-600">Apply to join our EMS team serving Eastern Kentucky.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-5">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <p className="text-green-800 font-medium text-sm">Your application has been submitted. We'll be in touch soon!</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <p className="text-red-800 font-medium text-sm">Error submitting application. Please try again or call us at 606-668-9111.</p>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    className="mt-1.5"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
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
                    <Label htmlFor="phone">Phone Number *</Label>
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

                {/* City & ZIP */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
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
                    <Label htmlFor="zip">ZIP Code *</Label>
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

                {/* Position Applying For */}
                <div>
                  <Label htmlFor="position">Position Applying For *</Label>
                  <Select value={formData.position} onValueChange={(value) => setFormData({ ...formData, position: value })}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select a position" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EMT">EMT</SelectItem>
                      <SelectItem value="AEMT">AEMT</SelectItem>
                      <SelectItem value="Paramedic">Paramedic</SelectItem>
                      <SelectItem value="Critical Care Paramedic">Critical Care Paramedic</SelectItem>
                      <SelectItem value="Dispatcher">Dispatcher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Certifications */}
                <div>
                  <Label htmlFor="certifications">Certifications</Label>
                  <Input
                    id="certifications"
                    value={formData.certifications}
                    onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                    placeholder="BLS, ACLS, PALS, etc."
                    className="mt-1.5"
                  />
                </div>

                {/* License Number & Years of Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="licenseNumber">Kentucky License Number</Label>
                    <Input
                      id="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                      placeholder="License #"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="yearsExperience">Years of Experience</Label>
                    <Input
                      id="yearsExperience"
                      value={formData.yearsExperience}
                      onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                      placeholder="e.g. 3"
                      className="mt-1.5"
                    />
                  </div>
                </div>

                {/* Current Employer */}
                <div>
                  <Label htmlFor="currentEmployer">Current Employer</Label>
                  <Input
                    id="currentEmployer"
                    value={formData.currentEmployer}
                    onChange={(e) => setFormData({ ...formData, currentEmployer: e.target.value })}
                    placeholder="Current or most recent employer"
                    className="mt-1.5"
                  />
                </div>

                {/* Preferred Stations */}
                <div>
                  <Label>Preferred Stations</Label>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 mt-2">
                    {['Breathitt', 'Wolfe', 'Clark'].map((station) => (
                      <label key={station} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                          checked={formData.preferredStations.includes(station)}
                          onCheckedChange={() => handleStationToggle(station)}
                        />
                        <span className="text-sm text-gray-700">{station}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Shift Preference */}
                <div>
                  <Label htmlFor="shiftPreference">Shift Preference</Label>
                  <Select value={formData.shiftPreference} onValueChange={(value) => setFormData({ ...formData, shiftPreference: value })}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select shift preference" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Day">Day</SelectItem>
                      <SelectItem value="Night">Night</SelectItem>
                      <SelectItem value="24 Hour">24 Hour</SelectItem>
                      <SelectItem value="Rotating">Rotating</SelectItem>
                      <SelectItem value="Flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Available Start Date */}
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

                {/* Additional Comments */}
                <div>
                  <Label htmlFor="additionalComments">Additional Comments</Label>
                  <Textarea
                    id="additionalComments"
                    rows={4}
                    value={formData.additionalComments}
                    onChange={(e) => setFormData({ ...formData, additionalComments: e.target.value })}
                    placeholder="Anything else you'd like us to know..."
                    className="mt-1.5"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0047AB] hover:bg-[#003d94] text-white py-5 text-base disabled:opacity-50 rounded-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
                <p className="text-xs text-gray-500 text-center">We review all applications and will contact qualified candidates.</p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
