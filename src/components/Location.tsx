// import { MapPin, Navigation } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';

// const Location = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} id="location" className="section-padding bg-sand-100">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
//             Find Us in Goa
//           </h2>
//           <p className="text-lg text-gray-500 max-w-2xl mx-auto">
//             Conveniently located in the heart of Candolim, steps away from the beach
//             and close to all major attractions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//           <div
//             className={`space-y-6 transition-all duration-700 ${
//               isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
//             }`}
//           >
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-full bg-ocean-100 flex items-center justify-center flex-shrink-0">
//                   <MapPin className="text-ocean-600" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-display font-semibold text-gray-800 mb-2">
//                     Our Address
//                   </h3>
//                   <p className="text-gray-500 leading-relaxed">
//                     WahStays<br />
//                     Beach Road, Near Fort Aguada<br />
//                     Candolim, North Goa<br />
//                     Goa 403515, India
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-full bg-golden-100 flex items-center justify-center flex-shrink-0">
//                   <Navigation className="text-orange-500" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-display font-semibold text-gray-800 mb-2">
//                     Getting Here
//                   </h3>
//                   <ul className="text-gray-500 space-y-2">
//                     <li>• 45 km from Goa International Airport (Dabolim)</li>
//                     <li>• 15 km from Panaji, the state capital</li>
//                     <li>• 5 minutes walk to Candolim Beach</li>
//                     <li>• Easy access to popular restaurants and nightlife</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-ocean-50 border-2 border-ocean-200 p-6 rounded-xl">
//               <p className="text-sand-700 text-sm leading-relaxed">
//                 <strong className="text-ocean-700">Pro Tip:</strong> We're located in the quieter part of Candolim,
//                 offering a peaceful retreat while still being close to all the action. The beach,
//                 restaurants, shops, and major attractions are all within easy reach.
//               </p>
//             </div>
//           </div>

//           <div
//             className={`transition-all duration-700 ${
//               isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
//             }`}
//             style={{ transitionDelay: '200ms' }}
//           >
//             <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.5708967234695!2d73.76169931484126!3d15.517857089193973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc08fb43dba5d%3A0x5c3e5b5a7a7b5c3e!2sCandolim%20Beach!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
//                 width="100%"
//                 height="500"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="WahStays Location Map"
//                 className="w-full"
//               ></iframe>
//             </div>

//             <a
//               href="https://www.google.com/maps/search/?api=1&query=Candolim+Beach+Goa"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-4 inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700 font-semibold transition-colors"
//             >
//               <Navigation size={18} />
//               <span>Open in Google Maps</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Location;
