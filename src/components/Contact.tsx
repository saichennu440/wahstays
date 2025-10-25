import { Instagram, MessageCircle, Phone, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-sand-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
           Every great trip begins with a conversation. Reach out and let’s turn your stay into an unforgettable story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href="https://instagram.com/wahstays"
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Instagram size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold mb-2">
                  Follow on Instagram
                </h3>
                <p className="text-white/90 mb-3">
                  See our latest photos, stories, and get instant updates on availability.
                </p>
                <p className="font-semibold text-lg">@wahstays</p>
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/918897312137"
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold mb-2">
                  Chat on WhatsApp
                </h3>
                <p className="text-white/90 mb-3">
                  Get quick responses to your queries and book directly through WhatsApp.
                </p>
                <p className="font-semibold text-lg">+91 88973 12137</p>
              </div>
            </div>
          </a>
        </div>

        <div
          className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href="tel:+919876543210"
            className="flex items-center gap-4 bg-sand-300 hover:bg-sand-200 p-6 rounded-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-ocean-100 flex items-center justify-center group-hover:bg-ocean-200 transition-colors">
              <Phone className="text-ocean-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Call Us</p>
              <p className="font-semibold text-gray-800 text-lg">+91 88973 12137</p>
            </div>
          </a>

          <a
            href="mailto:hello@wahstays.com"
            className="flex items-center gap-4 bg-sand-300 hover:bg-sand-200 p-6 rounded-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-ocean-100 flex items-center justify-center group-hover:bg-ocean-200 transition-colors">
              <Mail className="text-ocean-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Email Us</p>
              <p className="font-semibold text-gray-800 text-lg">hello@wahstays.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
