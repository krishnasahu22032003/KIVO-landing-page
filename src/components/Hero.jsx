import { FaMicrosoft } from 'react-icons/fa';
import {
  SiApple,
  SiGoogle,
  SiOpenai,
} from 'react-icons/si';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#090e1b] via-[#0c1224] to-[#090d1a] text-white px-6 py-28 md:px-20 overflow-hidden font-sans">

      {/* Background Glows */}
      <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-indigo-600/20 blur-3xl rounded-full animate-pulse -z-10"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full animate-pulse -z-10"></div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center z-10 relative">

        {/* LEFT: TEXT */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text leading-tight tracking-tight">
            Kivo AI
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 leading-snug">
            Unlock Limitless Automation <br />
            Powered by Next-Gen AI
          </h2>
          <p className="text-lg text-gray-400 max-w-xl">
            Seamlessly integrate AI into your workflow. Automate everything, scale effortlessly, and innovate without limits. Designed for creators, developers, and businesses alike.
          </p>

          <div className="flex gap-4 mt-4">
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

        {/* RIGHT: IMAGE + EFFECT */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/images/hero-saas.png"
            alt="Kivo AI Showcase"
            className="relative z-10 w-full max-w-md md:max-w-lg rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.7)]"
          />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 blur-2xl rounded-full z-0"></div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="mt-28 md:mt-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.3)]">
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
        </div>
      </div>

    </section>
  );
};

export default Hero;
