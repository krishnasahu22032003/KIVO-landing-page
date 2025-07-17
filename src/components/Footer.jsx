import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiDribbble } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0A0E1C] text-white py-20 px-6 md:px-24 z-10">
      {/* Glowing Backgrounds */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-120px] left-[-80px] w-[400px] h-[400px] bg-fuchsia-500/20 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-60px] w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[160px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_1px_10px_rgba(255,255,255,0.1)]">
            Kivo AI
          </h3>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Unlock next-level intelligence, productivity and creativity with a touch of innovation. Explore the future, powered by Kivo.
          </p>
        </div>

        {/* Right - Socials */}
        <div className="flex items-center space-x-6 text-2xl text-gray-400">
          <a href="#" className="hover:text-cyan-400 transition duration-300 hover:scale-125">
            <FiGithub />
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300 hover:scale-125">
            <FiLinkedin />
          </a>
          <a href="#" className="hover:text-pink-500 transition duration-300 hover:scale-125">
            <FiDribbble />
          </a>
          <a href="#" className="hover:text-sky-400 transition duration-300 hover:scale-125">
            <FiTwitter />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-white/10 w-full" />

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 tracking-wide">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Kivo AI</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
