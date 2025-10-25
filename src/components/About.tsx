import { Heart, Users, Home, Award, MapPin, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  const values = [
    {
      icon: <Heart size={32} />,
      title: 'Authentic Hospitality',
      description: 'We believe in treating every guest like family, offering warm Goan hospitality that makes you feel at home.',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Comfort First',
      description: 'Every detail is designed with your comfort in mind, from plush bedding to thoughtfully curated amenities.',
    },
    {
      icon: <MapPin size={32} />,
      title: 'Prime Location',
      description: 'Perfectly positioned between beach tranquility and vibrant Goan culture, offering the best of both worlds.',
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Service',
      description: 'Our dedicated team ensures your stay exceeds expectations with attention to every detail.',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sand-800 mb-4">
            About WahStays
          </h2>
          <p className="text-lg text-sand-600 max-w-2xl mx-auto">
            Your authentic coastal retreat in the heart of Goa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="WahStays beachfront property"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-ocean-500/10 rounded-2xl -z-10"></div>
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-3xl font-display font-bold text-sand-800">
              Where Comfort Meets Coastal Charm
            </h3>

            <p className="text-sand-700 leading-relaxed text-lg">
              At WahStay, travel isn’t about finding a room, it’s about discovering a story. We bring together Stays, Adventures, and Events to craft unforgettable experiences wherever you go.

            </p>

            <p className="text-sand-700 leading-relaxed text-lg">
              We’re starting our journey in Goa, curating cozy stays and offbeat adventures that help you feel the true vibe of the city from hidden beaches and local Cafés to vibrant cultural events. Whether you’re a solo explorer, a couple chasing sunsets, or a group of friends seeking thrill and comfort, WahStay makes sure your trip feels real, effortless, and memorable.

            </p>

            <p className="text-sand-700 leading-relaxed text-lg">
              As we grow, WahStay will bring this experience driven travel concept to more cities, connecting travelers to the heartbeat of every destination.

Stay. Explore. Experience.
            </p>

            <div className="flex items-center gap-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">5+</div>
                <div className="text-sm text-sand-600">Years Experience</div>
              </div>
              <div className="h-16 w-px bg-sand-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">1000+</div>
                <div className="text-sm text-sand-600">Happy Guests</div>
              </div>
              <div className="h-16 w-px bg-sand-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">4.8</div>
                <div className="text-sm text-sand-600">Guest Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-sand-800 text-center mb-12">
            What We Stand For
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group bg-sand-50 p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-gray-800 mb-4 transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h4 className="text-xl font-display font-semibold text-sand-800 mb-3 group-hover:text-gray-800 transition-colors">
                  {value.title}
                </h4>
                <p className="text-sand-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`bg-gradient-to-br from-gray-800 to-orange-400 rounded-2xl p-8 md:p-12 text-white text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <Users size={48} className="mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl font-display font-bold mb-4">
            Our Promise to You
          </h3>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            At WahStays, we're not just providing accommodation — we're creating experiences.
            Every member of our team is dedicated to ensuring your Goa getaway is everything
            you dreamed it would be. From the moment you arrive until your reluctant departure,
            we're here to make your stay unforgettable.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-display font-bold text-sand-800 mb-6">
            Ready to Experience WahStays?
          </h3>
          <p className="text-sand-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied guests who've made WahStays their home away from home in Goa.
            Your perfect coastal retreat is just a message away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/wahstays"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Follow Our Journey
            </a>
            <a
              href="https://wa.me/918897312137"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
