import { Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
const FloatingSocial = () => {
  const [instagramHovered, setInstagramHovered] = useState(false);
  const [whatsappHovered, setWhatsappHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDc5MTk1MDI3Nzk0MDE3?story_media_id=3681385017469871536&igsh=MW9nMWI3NTA1MGV5eA=="
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        onMouseEnter={() => setInstagramHovered(true)}
        onMouseLeave={() => setInstagramHovered(false)}
        aria-label="Visit our Instagram"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-float">
          <Instagram size={24} />
        </div>

        <div
          className={`absolute right-16 top-1/2 -translate-y-1/2 bg-sand-800 text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-lg transition-all duration-300 ${
            instagramHovered
              ? 'opacity-100 translate-x-0 visible'
              : 'opacity-0 translate-x-4 invisible'
          }`}
        >
          <span className="font-medium">Follow on Instagram</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-sand-800"></div>
        </div>
      </a>

      <a
        href="https://wa.me/918897312137"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        onMouseEnter={() => setWhatsappHovered(true)}
        onMouseLeave={() => setWhatsappHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-float" style={{ animationDelay: '500ms' }}>
          <FaWhatsapp size={24}  />
        </div>

        <div
          className={`absolute right-16 top-1/2 -translate-y-1/2 bg-sand-800 text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-lg transition-all duration-300 ${
            whatsappHovered
              ? 'opacity-100 translate-x-0 visible'
              : 'opacity-0 translate-x-4 invisible'
          }`}
        >
          <span className="font-medium">Chat on WhatsApp</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-sand-800"></div>
        </div>
      </a>
    </div>
  );
};

export default FloatingSocial;
