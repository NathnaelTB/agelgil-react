import { Icon } from '@iconify/react';
import hero from '../assets/hero.jpg';

const Contact = (props) => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full mb-20">
        <div className="absolute inset-0">
          <img src={hero} alt="Agelgil Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 container h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-2xl font-medium drop-shadow-md">
            We'd love to hear from you. Let's discuss sustainable solutions together.
          </p>
        </div>
      </div>

      <div className="container relative z-20 -mt-16">
        <div className="grid lg:grid-cols-5 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white">
          {/* Contact Info Panel (Left - 2cols) */}
          <div className="lg:col-span-2 bg-brown text-white p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

            <div>
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
              <p className="text-white/80 text-lg mb-12 leading-relaxed">
                Have a question or interested in partnering with us? Fill out the form or reach out directly.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Icon icon="ph:phone-fill" width="24" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 opacity-90">Phone</h4>
                    <p className="text-white/80">+251 936 337 889</p>
                    <p className="text-white/80">+251 966 206 636</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Icon icon="ph:envelope-simple-fill" width="24" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 opacity-90">Email</h4>
                    <a href="mailto:contact@agelgileco-package.com" className="block text-white/80 hover:text-white transition-colors">contact@agelgileco-package.com</a>
                    <a href="mailto:agelgilecopackaging@gmail.com" className="block text-white/80 hover:text-white transition-colors">agelgilecopackaging@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Icon icon="ph:map-pin-fill" width="24" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 opacity-90">Location</h4>
                    <p className="text-white/80">Lemlemitu Bahir Dar Commercial Center</p>
                    <p className="text-white/80">Bahir Dar, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-6 opacity-90">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/agelgil-eco-packaging/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-brown transition-all duration-300">
                  <Icon icon="mdi:linkedin" width="20" />
                </a>
                <a href="mailto:contact@agelgileco-package.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-brown transition-all duration-300">
                  <Icon icon="mdi:email" width="20" />
                </a>
                <a href="https://m.me/agelgil.packaging" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-brown transition-all duration-300">
                  <Icon icon="ic:baseline-facebook" width="20" />
                </a>
                <a href="https://api.whatsapp.com/message/UGIQ5QDVEFG5A1" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-brown transition-all duration-300">
                  <Icon icon="logos:whatsapp-icon" width="20" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Panel (Right - 3cols) */}
          <div className="lg:col-span-3 bg-white p-12 lg:p-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h3>
            <form action="https://formsubmit.co/afomia@agelgileco-package.com" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Your Name</label>
                  <input type="text" name="Name" id="name" placeholder="Enter your name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-colors" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                  <input type="email" name="Email" id="email" placeholder="Enter your email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-colors" required />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-2">Subject</label>
                <input type="text" name="Subject" id="subject" placeholder="How can we help?" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-colors" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                <textarea name="Message" id="message" rows="5" placeholder="Write your message here..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-colors resize-none" required></textarea>
              </div>

              <button type="submit" className="w-full md:w-auto px-8 py-4 bg-brown text-white font-bold rounded-lg hover:bg-brown/90 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Find Us Here</h2>
            <p className="text-gray-600 text-lg">Visit our office at Lemlemitu Bahir Dar Commercial Center</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-[400px]">
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{
                __html: props.mapFrame || '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.793744652486!2d37.38283331410521!3d11.597155649984646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644d2105156686d%3A0x6d85942438171164!2sBahir%20Dar!5e0!3m2!1sen!2set!4v1634567890123!5m2!1sen!2set" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;