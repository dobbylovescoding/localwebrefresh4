import React, { useState } from 'react';
import { Send, PhoneCall, Mail, MapPin, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // In a real implementation, you would send the form data to a server
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: '',
      });
      
      // Reset status after a few seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-[#212A31] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-[#D3D9D4] max-w-2xl mx-auto">
            Ready to improve your online presence? Contact me for a free, no-obligation consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#2E3944] rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-500 rounded-full">
                    <CheckCircle size={32} />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-[#D3D9D4]">
                  Thank you for reaching out. I'll get back to you as soon as possible!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-[#374151] border border-[#4B5563] text-white focus:outline-none focus:ring-2 focus:ring-[#124E66]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-[#374151] border border-[#4B5563] text-white focus:outline-none focus:ring-2 focus:ring-[#124E66]"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-[#374151] border border-[#4B5563] text-white focus:outline-none focus:ring-2 focus:ring-[#124E66]"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium mb-1">Business Name</label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-[#374151] border border-[#4B5563] text-white focus:outline-none focus:ring-2 focus:ring-[#124E66]"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-[#374151] border border-[#4B5563] text-white focus:outline-none focus:ring-2 focus:ring-[#124E66]"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-3 rounded-lg font-medium flex items-center justify-center ${
                    formStatus === 'submitting' 
                      ? 'bg-[#748D92] cursor-not-allowed' 
                      : 'bg-[#124E66] hover:bg-[#0d3d50] transform hover:scale-105 transition-all'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div>
            <div className="bg-[#2E3944] rounded-lg p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-[#124E66] rounded-lg mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-[#D3D9D4]">Hobsonville, Auckland, New Zealand</p>
                    <p className="text-[#748D92] mt-1">Serving North, West, and Central Auckland</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-[#124E66] rounded-lg mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:conor@localwebrefresh.co.nz" className="text-[#D3D9D4] hover:text-white transition-colors">
                      conor@localwebrefresh.co.nz
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-[#124E66] rounded-lg mr-4">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+6421123456" className="text-[#D3D9D4] hover:text-white transition-colors">
                      +64 21 123 456
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#124E66] rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Free Consultation</h3>
              <p className="text-[#D3D9D4] mb-4">
                I offer free, no-obligation consultations for businesses in North, West, and Central Auckland. We can meet in person or chat over the phone to discuss your needs.
              </p>
              <div className="bg-[#0d3d50] p-4 rounded-lg">
                <h4 className="font-medium mb-2 flex items-center">
                  <CheckCircle size={16} className="mr-2" />
                  Our Process
                </h4>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">1.</span>
                    <span>Initial consultation to understand your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">2.</span>
                    <span>Fair, transparent quote with all costs clearly outlined</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">3.</span>
                    <span>Collaborative approach throughout the project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">4.</span>
                    <span>Ongoing support and guidance after completion</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;