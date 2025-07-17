import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

const Hero = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const animate = async () => {
      await document.fonts.ready;

      const split = new SplitType(headingRef.current, {
        types: 'chars',
        tagName: 'span',
      });

      // Apply gradient to each character to avoid white glitch
      split.chars.forEach((char) => {
        char.classList.add(
          'bg-gradient-to-r',
          'from-[#00E0FF]',
          'via-[#A500FF]',
          'to-[#FF4D4D]',
          'text-transparent',
          'bg-clip-text',
          'drop-shadow-[0_0_20px_rgba(255,0,255,0.3)]'
        );
      });

      // Set initial state
      gsap.set([
        ...split.chars,
        subheadingRef.current,
        paragraphRef.current,
        buttonsRef.current,
        statsRef.current,
        imageRef.current,
      ], {
        opacity: 0,
        y: 40,
      });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.4 } });

      tl.to(split.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.03,
      })
        .to(subheadingRef.current, { y: 0, opacity: 1 }, '-=1.1')
        .to(paragraphRef.current, { y: 0, opacity: 1 }, '-=1.0')
        .to(buttonsRef.current, { y: 0, opacity: 1 }, '-=0.9')
        .to(imageRef.current, { y: 0, opacity: 1 }, '-=0.8')
        .to(statsRef.current, { y: 0, opacity: 1 }, '-=0.8');
    };

    animate();
  }, []);

  return (
    <section id='home' className="relative w-full min-h-screen bg-gradient-to-br from-[#090e1b] via-[#0c1224] to-[#090d1a] text-white px-6 py-28 md:px-20 overflow-hidden font-sans">
      {/* Glow Orbs */}
      <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-indigo-600/20 blur-3xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full animate-pulse -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center z-10 relative">
        {/* LEFT */}
        <div className="space-y-6">
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight opacity-100"
          >
            Kivo AI
          </h1>
          <h2
            ref={subheadingRef}
            className="text-3xl md:text-4xl font-bold text-gray-100 leading-snug"
          >
            Unlock Limitless Automation <br /> Powered by Next-Gen AI
          </h2>
          <p ref={paragraphRef} className="text-lg text-gray-400 max-w-xl">
            Seamlessly integrate AI into your workflow. Automate everything, scale effortlessly, and innovate without limits.
          </p>

          <div ref={buttonsRef} className="flex gap-4 mt-4">
            <a
              href="#get-started"
              className="px-6 py-3 rounded-xl font-semibold bg-indigo-500 text-black shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-300"
            >
              ⚡ Get Started
            </a>
            <a
              href="#demo"
              className="px-6 py-3 rounded-xl font-medium border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-black transition-all duration-300"
            >
              🎥 Watch Demo
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div ref={imageRef} className="relative w-full h-full flex items-center justify-center">
          <img
            src="/images/hero-saas.png"
            alt="Kivo AI Showcase"
            className="relative z-10 w-full max-w-md md:max-w-lg rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.7)]"
          />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 blur-2xl rounded-full z-0" />
        </div>
      </div>

      {/* STATS */}
      <div ref={statsRef} className="mt-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.3)]">
          <div className="text-center">
            <p className="text-4xl font-extrabold text-indigo-400">125K+</p>
            <p className="text-sm text-gray-300 mt-1">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-purple-400">50+</p>
            <p className="text-sm text-gray-300 mt-1">AI Models</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-pink-400">900K</p>
            <p className="text-sm text-gray-300 mt-1">Requests / Min</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-teal-400">190+</p>
            <p className="text-sm text-gray-300 mt-1">Global Reach</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-yellow-400">99.99%</p>
            <p className="text-sm text-gray-300 mt-1">Uptime SLA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
