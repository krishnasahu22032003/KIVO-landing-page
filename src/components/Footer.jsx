import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiGlobe,
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-b from-[#0A0E1C] via-[#0f172a] to-[#0A0E1C] text-white pt-20 pb-10 px-6 md:px-20 z-10 overflow-hidden"
    >
      {/* Glowing Orbs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-purple-600/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-cyan-400/20 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
            Kivo AI
          </h2>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Experience the intelligence of the future. Kivo AI delivers humanlike responsiveness, advanced automation, and seamless neural design.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold text-cyan-400 mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#use-cases" className="hover:text-white transition">Use Cases</a></li>
            <li><a href="#playground" className="hover:text-white transition">Neural Playground</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-cyan-400 mb-4">Connect</h4>
          <div className="flex justify-center md:justify-start space-x-6 text-xl text-gray-400">
            <a href="#" className="hover:text-white transition"><FiGithub /></a>
            <a href="#" className="hover:text-white transition"><FiTwitter /></a>
            <a href="#" className="hover:text-white transition"><FiLinkedin /></a>
            <a href="mailto:hello@kivo.ai" className="hover:text-white transition"><FiMail /></a>
            <a href="#" className="hover:text-white transition"><FiGlobe /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kivo AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
