import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      headingRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        delay: 0.4,
        duration: 1,
        ease: 'elastic.out(1, 0.6)',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#0A0E1C] via-[#0f172a] to-[#0A0E1C] text-white py-24 px-6 md:px-20 text-center overflow-hidden z-10"
    >
      {/* Glowing orb background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-50px] w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <h2
        ref={headingRef}
        className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent mb-6 drop-shadow-xl"
      >
        Elevate Your Vision with Kivo AI
      </h2>

      <p
        ref={paragraphRef}
        className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10"
      >
        Step into a new realm of intelligence and creativity. Let Kivo AI empower your ideas, automate brilliance, and unlock the next dimension of productivity.
      </p>

      <button
        ref={buttonRef}
        className="px-7 cursor-pointer py-3 bg-gradient-to-br from-cyan-500 to-purple-600 text-white font-medium text-lg rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-transform duration-300 hover:scale-105"
      >
        Get Started with Kivo
      </button>
    </section>
  );
};

export default CTA;
