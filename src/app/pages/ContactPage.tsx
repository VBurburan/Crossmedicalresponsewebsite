import { useState } from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
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

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const N8N_WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL_HERE';

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          inquiryType: formData.inquiryType,
          message: formData.message,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
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
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">We're here to help 24/7/365</p>
        </motion.div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold mb-1">For Life-Threatening Emergencies</h2>
          <p className="text-lg font-semibold mb-2">CALL 911 IMMEDIATELY</p>
          <p className="text-sm text-red-200">Do not use this contact form for emergency situations.</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14"
          >
            <motion.div variants={fadeIn} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed">
                  For non-emergency transport requests, event coverage, or general inquiries, please contact us using the information below or fill out the form.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#0047AB] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href="tel:606-668-9111" className="text-[#0047AB] font-bold text-lg">606-668-9111</a>
                    <p className="text-sm text-gray-500">Available 24/7/365</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#0047AB] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Availability</h3>
                    <p className="text-gray-600">24 Hours a Day, 7 Days a Week, 365 Days a Year</p>
                    <p className="text-sm text-gray-500">Including all holidays</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#0047AB] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Message Us</h3>
                    <p className="text-gray-600 text-sm">Use the form and we'll respond as soon as possible.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <p className="text-green-800 font-medium text-sm">Thank you! We'll get back to you shortly.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <p className="text-red-800 font-medium text-sm">Error submitting. Please call us at 606-668-9111.</p>
                  </div>
                )}

                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="mt-1.5" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(606) 555-1234" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select inquiry type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="transport">Request Non-Emergency Transport</SelectItem>
                      <SelectItem value="event">Event Standby Coverage</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Please provide details about your inquiry..." className="mt-1.5" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#0047AB] hover:bg-[#003d94] text-white py-5 text-base disabled:opacity-50 rounded-lg">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                <p className="text-xs text-gray-500 text-center">We typically respond within 24 hours during business days.</p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Station Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Locations</h2>
            <p className="text-lg text-gray-600">Visit us at any of our three stations</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Jackson Station', base: 'Breathitt County Base', address: '3 Howell Ln', city: 'Jackson, KY 41339', extra: '' },
              { name: 'Campton Station', base: 'Wolfe County Base', address: '364 South Washington Street', city: 'Campton, KY 41301', extra: '' },
              { name: 'Winchester Station', base: 'Clark County Base', address: 'Winchester, KY', city: '', extra: 'Interfacility transfers & Winchester Fire Dept. support' },
            ].map((station, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white rounded-xl p-7 border border-gray-200 hover:shadow-md transition-shadow">
                <MapPin className="w-6 h-6 text-[#0047AB] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{station.name}</h3>
                <p className="text-sm font-medium text-[#0047AB] mb-2">{station.base}</p>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>{station.address}</p>
                  {station.city && <p>{station.city}</p>}
                  {station.extra && <p className="text-gray-500 mt-2">{station.extra}</p>}
                </div>
                <a href="tel:606-668-9111" className="inline-flex items-center gap-1.5 mt-4 text-[#0047AB] text-sm font-medium">
                  <Phone className="w-3.5 h-3.5" /> 606-668-9111
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0047AB] text-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="w-10 h-10 mx-auto mb-4 text-blue-200" />
          <h2 className="text-2xl font-bold mb-3">24/7/365 Emergency Availability</h2>
          <p className="text-blue-100 mb-6">We're always here when you need us</p>
          <a href="tel:606-668-9111" className="inline-flex items-center justify-center gap-2 bg-white text-[#0047AB] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg">
            <Phone className="w-5 h-5" /> Call 606-668-9111
          </a>
        </motion.div>
      </section>
    </div>
  );
}
