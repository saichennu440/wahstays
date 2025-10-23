import { Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-sand-800 text-sand-100">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 text-golden-400">
              WahStays
            </h3>
            <p className="text-sand-300 mb-4">
              Experience comfort and authenticity in the heart of coastal Goa. Your perfect stay awaits.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/wahstays"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sand-700 flex items-center justify-center hover:bg-ocean-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Visit our Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sand-700 flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-golden-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Rooms', 'Amenities', 'Gallery', 'Location', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sand-300 hover:text-ocean-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-golden-400">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sand-300">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-ocean-400" />
                <span>Beach Road, Candolim, Goa 403515, India</span>
              </li>
              <li className="flex items-center gap-3 text-sand-300">
                <Phone size={20} className="flex-shrink-0 text-ocean-400" />
                <a href="tel:+919876543210" className="hover:text-ocean-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-sand-300">
                <Mail size={20} className="flex-shrink-0 text-ocean-400" />
                <a href="mailto:hello@wahstays.com" className="hover:text-ocean-400 transition-colors">
                  hello@wahstays.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand-700 mt-12 pt-8 text-center text-sand-400 text-sm">
          <p>&copy; {new Date().getFullYear()} WahStays. All rights reserved.</p>
          <p className="mt-2">Crafted with care for memorable coastal experiences.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
