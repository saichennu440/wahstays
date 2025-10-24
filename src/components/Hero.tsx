import { Instagram, MessageCircle, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    const roomsSection = document.querySelector('#rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 animate-fade-in">
          <span className=" mb-2">Wah</span>
          <span className=" text-orange-400"> Stays</span>
        </h1>

        <p
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-up"
          style={{ animationDelay: '200ms' }}
        >
          Experiences that makes you go "Wah"
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '400ms' }}
        >
          <a
            href="https://instagram.com/wahstays"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Instagram size={20} />
            <span>Follow on Instagram</span>
          </a>

          <a
            href="https://wa.me/918897312137"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <FaWhatsapp size={20} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white animate-float cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2 transition-colors"
        aria-label="Scroll to rooms section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
