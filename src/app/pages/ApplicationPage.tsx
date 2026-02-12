import { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
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

  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gray-950 text-white">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <img src="https://i.imgur.com/YSQN28q.png" alt="Cross Medical Response" className="h-20 md:h-28 mx-auto mb-5" />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Employment Application</h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Apply to join our EMS team serving Eastern Kentucky
          </p>
          <Link to="/careers" className="inline-block mt-4 text-sm text-blue-300 hover:text-white transition-colors">
            &larr; Back to Careers
          </Link>
        </motion.div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={fadeIn}
          >
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
