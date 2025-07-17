import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBrain, FaProjectDiagram } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate content
    gsap.fromTo(
      contentRef.current,
      { x: 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate image with parallax scale effect
    gsap.fromTo(
      imageRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate each card individually
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0, rotateX: -15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.1,
          delay: i * 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section
    id='about'
      ref={containerRef}
      className="relative bg-[#0A0E1C] text-white py-28 px-6 md:px-20 font-sans overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-fuchsia-500/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[280px] h-[280px] bg-cyan-500/20 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left - Glowing Card Image */}
        <div ref={imageRef} className="w-full relative group">
          <div className="rounded-3xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-[#1d2233] to-[#101624] shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_50px_#6ee7b7]">
            <img
              src="/images/about-ai.png"
              alt="About Kivo AI"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Right - Heading + Description */}
        <div ref={contentRef}>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 text-transparent bg-clip-text mb-6">
            Meet Kivo AI
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            More than a tool — Kivo AI is a digital mind. It adapts, evolves, and integrates deeply with your vision, helping you build, innovate, and lead with intelligence.
          </p>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {[
              {
                icon: <FaBrain size={30} className="text-cyan-400" />,
                title: 'Cognitive Adaptation',
                desc: 'Kivo AI thinks with you, tailoring insights in real-time using contextual data learning.',
              },
              {
                icon: <FaProjectDiagram size={30} className="text-pink-400" />,
                title: 'Neural Sync',
                desc: 'Seamlessly aligns with your workflows — no lag, no limits. Just intelligence.',
              },
            ].map((card, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="p-6 rounded-2xl bg-[#131b2c] hover:bg-[#1a2337] transition-all duration-300 border border-white/10 shadow-[0_0_30px_#111827] hover:shadow-[0_0_40px_#6ee7b7]/20 backdrop-blur-md"
              >
                <div className="mb-4">{card.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{card.title}</h4>
                <p className="text-sm text-gray-400">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
