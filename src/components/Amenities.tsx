import { Wifi, Wind, Coffee, Car, Utensils, Waves, Shield, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Amenity {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    icon: <Wifi size={32} />,
    title: 'High-Speed WiFi',
    description: 'Complimentary high-speed internet throughout the property',
  },
  {
    icon: <Wind size={32} />,
    title: 'Air Conditioning',
    description: 'Climate-controlled rooms for your comfort',
  },
  {
    icon: <Coffee size={32} />,
    title: 'Complimentary Breakfast',
    description: 'Start your day with a delicious breakfast spread',
  },
  {
    icon: <Car size={32} />,
    title: 'Free Parking',
    description: 'Secure on-site parking for all guests',
  },
  {
    icon: <Utensils size={32} />,
    title: 'In-Room Dining',
    description: 'Enjoy meals in the comfort of your room',
  },
  {
    icon: <Waves size={32} />,
    title: 'Beach Access',
    description: 'Just steps away from beautiful Goa beaches',
  },
  {
    icon: <Shield size={32} />,
    title: '24/7 Security',
    description: 'Round-the-clock security for your peace of mind',
  },
  {
    icon: <Clock size={32} />,
    title: 'Flexible Check-in',
    description: 'Early check-in and late check-out available',
  },
];

const AmenityCard = ({ amenity, index }: { amenity: Amenity; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-gray-800 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        {amenity.icon}
      </div>
      <h3 className="text-xl font-display font-semibold text-gray-800 mb-2 group-hover:text-gray-800 transition-colors">
        {amenity.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {amenity.description}
      </p>
    </div>
  );
};

const Amenities = () => {
  return (
    <section id="amenities" className="section-padding bg-sand-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Amenities & Facilities
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay in Goa.
            We've thought of every detail to ensure your experience is exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <AmenityCard key={amenity.title} amenity={amenity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
