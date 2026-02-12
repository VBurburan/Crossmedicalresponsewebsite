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
import logo from 'figma:asset/f50fa835ae605b4fb335012299f164217b8ed90e.png';

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
    
    // Replace this URL with your actual n8n webhook URL
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
      <section className="relative h-[500px] bg-black">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <img src={logo} alt="Cross Medical Response" className="h-24 md:h-32 lg:h-40 mb-6" />
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-200">
              We're here to help 24/7/365
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">For Life-Threatening Emergencies</h2>
            <p className="text-xl mb-4">CALL 911 IMMEDIATELY</p>
            <p className="text-sm text-red-100">
              Do not use this contact form for emergency situations. Always call 911 for immediate assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-700 mb-8">
                  For non-emergency transport requests, event coverage, or general inquiries, please contact us using the information below or fill out the form.
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0066FF] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <a
                    href="tel:606-668-9111"
                    className="text-lg text-[#0066FF] hover:text-[#0047AB] transition-colors font-semibold"
                  >
                    606-668-9111
                  </a>
                  <p className="text-gray-600 mt-1">Available 24/7/365</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0066FF] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Availability</h3>
                  <p className="text-gray-700">24 Hours a Day</p>
                  <p className="text-gray-700">7 Days a Week</p>
                  <p className="text-gray-700">365 Days a Year</p>
                  <p className="text-sm text-gray-600 mt-2">Including all holidays</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0066FF] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Inquiries</h3>
                  <p className="text-gray-700">
                    Use the contact form to send us a message and we'll respond as soon as possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-2xl p-8 lg:p-10 border-2 border-[#0066FF]">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="text-green-800 font-semibold">
                      Thank you for contacting us! We'll get back to you shortly.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
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
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                  >
                    <SelectTrigger>
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
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0066FF] hover:bg-[#0047AB] text-white py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Station Locations */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">
              Visit us at any of our three stations across Eastern Kentucky
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Jackson Station */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#0066FF]">
              <MapPin className="w-12 h-12 text-[#0066FF] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Jackson Station</h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">Breathitt County Base</p>
                <p>3 Howell Ln</p>
                <p>Jackson, KY 41339</p>
                <a
                  href="tel:606-668-9111"
                  className="inline-flex items-center gap-2 mt-4 text-[#0066FF] hover:text-[#0047AB] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>606-668-9111</span>
                </a>
              </div>
            </div>

            {/* Campton Station */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#0066FF]">
              <MapPin className="w-12 h-12 text-[#0066FF] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Campton Station</h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">Wolfe County Base</p>
                <p>364 South Washington Street</p>
                <p>Campton, KY 41301</p>
                <a
                  href="tel:606-668-9111"
                  className="inline-flex items-center gap-2 mt-4 text-[#0066FF] hover:text-[#0047AB] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>606-668-9111</span>
                </a>
              </div>
            </div>

            {/* Winchester Station */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#0066FF]">
              <MapPin className="w-12 h-12 text-[#0066FF] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Winchester Station</h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">Clark County Base</p>
                <p>Winchester, KY</p>
                <p className="text-sm text-gray-600 mt-2">
                  Dedicated to interfacility transfers from Clark Regional Hospital and support for Winchester Fire Department
                </p>
                <a
                  href="tel:606-668-9111"
                  className="inline-flex items-center gap-2 mt-4 text-[#0066FF] hover:text-[#0047AB] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>606-668-9111</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours Banner */}
      <section className="py-12 bg-gradient-to-br from-[#0047AB] to-[#0066FF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">24/7/365 Emergency Availability</h2>
          <p className="text-xl text-blue-100 mb-6">
            We're always here when you need us – day or night, weekends and holidays
          </p>
          <a
            href="tel:606-668-9111"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0047AB] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            <Phone className="w-6 h-6" />
            Call 606-668-9111
          </a>
        </div>
      </section>
    </div>
  );
}