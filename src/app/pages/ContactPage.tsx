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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
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
        headers: {
          'Content-Type': 'application/json',
        },
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
        });
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
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
        >
          <img src="https://i.imgur.com/YSQN28q.png" alt="Cross Medical Response" className="h-24 md:h-32 lg:h-40 mx-auto mb-6" />
          <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            We're here to help 24/7/365
          </p>
        </motion.div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">For Life-Threatening Emergencies</h2>
            <p className="text-xl mb-4 font-semibold">CALL 911 IMMEDIATELY</p>
            <p className="text-sm text-red-200">
              Do not use this contact form for emergency situations. Always call 911 for immediate assistance.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-10">
              <div>
                <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-3">Contact Info</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For non-emergency transport requests, event coverage, or general inquiries, please contact us using the information below or fill out the form.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-5">
                {[
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: <a href="tel:606-668-9111" className="text-lg text-[#0066FF] hover:text-[#0047AB] transition-colors font-bold">606-668-9111</a>,
                    sub: 'Available 24/7/365',
                  },
                  {
                    icon: Clock,
                    title: 'Availability',
                    content: <div className="text-gray-700"><p>24 Hours a Day</p><p>7 Days a Week</p><p>365 Days a Year</p></div>,
                    sub: 'Including all holidays',
                  },
                  {
                    icon: Mail,
                    title: 'Email Inquiries',
                    content: <p className="text-gray-700">Use the contact form to send us a message and we'll respond as soon as possible.</p>,
                    sub: '',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0047AB] to-[#0066FF] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      {item.content}
                      {item.sub && <p className="text-sm text-gray-500 mt-2">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0047AB] to-[#0066FF]" />
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                    <p className="text-green-800 font-semibold">
                      Thank you for contacting us! We'll get back to you shortly.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                    <p className="text-red-800 font-semibold">
                      There was an error submitting your message. Please call us at 606-668-9111.
                    </p>
                  </div>
                )}

                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="mt-2"
                  />
                </div>

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
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(606) 555-1234"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
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
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please provide details about your inquiry..."
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#0047AB] to-[#0066FF] hover:from-[#003380] hover:to-[#0047AB] text-white py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Station Locations */}
      <section className="py-24 bg-gray-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase mb-3">Visit Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Visit us at any of our three stations across Eastern Kentucky</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: 'Jackson Station', base: 'Breathitt County Base', address: '3 Howell Ln', city: 'Jackson, KY 41339', extra: '' },
              { name: 'Campton Station', base: 'Wolfe County Base', address: '364 South Washington Street', city: 'Campton, KY 41301', extra: '' },
              { name: 'Winchester Station', base: 'Clark County Base', address: 'Winchester, KY', city: '', extra: 'Dedicated to interfacility transfers from Clark Regional Hospital and support for Winchester Fire Department' },
            ].map((station, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 border border-gray-100 hover:border-[#0066FF]/20 transition-all duration-500 hover-lift relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0047AB] to-[#0066FF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0047AB] to-[#0066FF] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{station.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="font-semibold text-[#0066FF]">{station.base}</p>
                  <p>{station.address}</p>
                  {station.city && <p>{station.city}</p>}
                  {station.extra && <p className="text-sm text-gray-500 mt-3">{station.extra}</p>}
                  <a
                    href="tel:606-668-9111"
                    className="inline-flex items-center gap-2 mt-4 text-[#0066FF] hover:text-[#0047AB] transition-colors font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    <span>606-668-9111</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Hours Banner */}
      <section className="py-20 bg-gradient-to-br from-[#001a3f] via-[#0047AB] to-[#0066FF] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
        >
          <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">24/7/365 Emergency Availability</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always here when you need us &ndash; day or night, weekends and holidays
          </p>
          <a
            href="tel:606-668-9111"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#0047AB] px-10 py-5 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 duration-300"
          >
            <Phone className="w-6 h-6" />
            Call 606-668-9111
          </a>
        </motion.div>
      </section>
    </div>
  );
}
