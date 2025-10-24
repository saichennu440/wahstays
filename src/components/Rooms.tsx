import { Users, Wifi, Wind, Coffee, Sparkles, Instagram, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface Room {
  id: string;
  name: string;
  image: string;
  description: string;
  maxOccupancy: number;
  features: string[];
  badge?: string;
}

const rooms: Room[] = [
  {
    id: 'deluxe',
    name: 'Deluxe Ocean View',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spacious room with stunning ocean views and modern amenities. Perfect for couples seeking a romantic getaway.',
    maxOccupancy: 2,
    features: ['Ocean View', 'King Bed', 'Private Balcony', 'WiFi'],
    badge: 'Popular',
  },
  {
    id: 'suite',
    name: 'Premium Suite',
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxurious suite with separate living area and premium furnishings. Ideal for extended stays and families.',
    maxOccupancy: 4,
    features: ['Living Room', 'King + Twin', 'Kitchenette', 'WiFi'],
    badge: 'Limited',
  },
  {
    id: 'garden',
    name: 'Garden View Room',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cozy room overlooking lush tropical gardens. A peaceful retreat for relaxation and tranquility.',
    maxOccupancy: 2,
    features: ['Garden View', 'Queen Bed', 'Patio Access', 'WiFi'],
  },
  {
    id: 'family',
    name: 'Family Suite',
    image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spacious accommodation perfect for families. Multiple sleeping areas and child-friendly amenities included.',
    maxOccupancy: 6,
    features: ['2 Bedrooms', 'Kids Area', 'Dining Space', 'WiFi'],
  },
];

const RoomCard = ({ room, index }: { room: Room; index: number }) => {
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
      className={`group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {room.badge && (
        <div className="absolute top-4 right-4 z-10 bg-golden-400 text-sand-900 px-3 py-1 rounded-full text-sm font-semibold animate-pulse-soft">
          {room.badge}
        </div>
      )}

      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-display font-bold text-sand-800 mb-2 group-hover:text-ocean-600 transition-colors">
          {room.name}
        </h3>

        <p className="text-sand-600 mb-4 line-clamp-2">
          {room.description}
        </p>

        <div className="flex items-center gap-2 text-sand-700 mb-4">
          <Users size={18} className="text-gray-800" />
          <span className="text-sm font-medium">Up to {room.maxOccupancy} guests</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {room.features.map((feature) => (
            <span
              key={feature}
              className="text-xs bg-sand-100 text-sand-700 px-3 py-1 rounded-full font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDc5MTk1MDI3Nzk0MDE3?story_media_id=3681385017469871536&igsh=MW9nMWI3NTA1MGV5eA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaWhatsapp size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Rooms = () => {
  return (
    <section id="rooms" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sand-800 mb-4">
            Our Rooms
          </h2>
          <p className="text-lg text-sand-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of rooms, each designed to provide
            comfort and tranquility during your Goa getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
