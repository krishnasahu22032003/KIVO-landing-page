import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Intelligent Chatbots',
    description: 'Deploy NLP-driven chat agents that learn, adapt, and delight users 24/7.',
    icon: '🤖',
    bg: 'from-purple-700 via-indigo-800 to-violet-900',
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends, identify risks, and make smarter decisions with AI.',
    icon: '📊',
    bg: 'from-green-700 via-emerald-800 to-teal-900',
  },
  {
    title: 'Vision AI',
    description: 'Unlock powerful image and video insights using computer vision models.',
    icon: '🧠',
    bg: 'from-yellow-600 via-orange-700 to-rose-800',
  },
  {
    title: 'Voice Recognition',
    description: 'Transform voice into action with real-time speech-to-intent processing.',
    icon: '🎙️',
    bg: 'from-sky-600 via-blue-700 to-indigo-800',
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    ScrollTrigger.refresh(); // Ensure triggers are refreshed

    // Animate title on scroll every time
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animate description on scroll every time
    gsap.fromTo(descRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animate each card uniquely on scroll
    cardsRef.current.forEach((card, i) => {
      const x = i % 2 === 0 ? -80 : 80;
      gsap.fromTo(card,
        { opacity: 0, y: 100, x, rotateX: 20 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          rotateX: 0,
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reset',
            once: false,
          },
        }
      );
    });
  }, []);

  return (
    <section
    id='features'
      ref={sectionRef}
      className="relative py-32 px-6 md:px-20 bg-[#0b0f1f] text-white font-sans overflow-hidden"
    >
      {/* Glowing orbs */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-pink-500/20 blur-[160px] rounded-full -z-10" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-cyan-400/20 blur-[160px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-sky-400 text-transparent bg-clip-text mb-6 tracking-wide"
        >
          Our AI Services
        </h2>
        <p
          ref={descRef}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-20"
        >
          Unlock intelligent solutions crafted to automate, accelerate, and elevate every aspect of your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`relative rounded-3xl p-8 bg-gradient-to-br ${service.bg} 
              shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-300
              hover:scale-[1.045] hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]
              backdrop-blur-md border border-white/10 group hover:brightness-110 hover:contrast-125`}
            >
              <div className="text-5xl mb-5 transition-transform duration-300 group-hover:-rotate-3 drop-shadow-xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:scale-[1.05] transition-transform duration-200">
                {service.title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
