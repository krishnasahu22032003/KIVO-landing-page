import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheckCircle } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    title: 'Free',
    price: '0',
    features: ['Basic AI access', 'Community support', 'Limited insights'],
    gradient: 'from-[#1f1c2c] to-[#928DAB]',
  },
  {
    title: 'Pro',
    price: '19',
    features: ['Advanced AI access', 'Priority support', 'Workflow integration'],
    gradient: 'from-[#0f2027] to-[#2c5364]',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    features: ['Full AI suite', 'Custom integrations', 'Dedicated success team'],
    gradient: 'from-[#000428] to-[#004e92]',
  },
];

const Pricing = () => {
  const cardsRef = useRef([]);
  const headingRef = useRef();
  const paraRef = useRef();

  useEffect(() => {
    // Heading Animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50, scale: 0.9, rotateX: 10 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Paragraph Animation
    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: paraRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Card Animations (repeat on scroll)
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, rotateX: 20, skewY: 5 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          skewY: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
          delay: i * 0.1,
        }
      );
    });
  }, []);

  return (
    <section id='pricing' className="relative bg-[#090B1C] text-white py-28 px-6 md:px-20 overflow-hidden z-0">
      {/* Background Glow */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[180px] top-[-50px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[150px] bottom-[-80px] right-[-120px]" />
      </div>

      {/* Heading */}
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Our AI Plans
        </h2>
        <p
          ref={paraRef}
          className="text-gray-400 mt-6 text-lg leading-relaxed"
        >
          Choose the level of intelligence you need. Scale up when you're ready.
          Every plan is backed by the power of Kivo AI.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className={`group relative bg-gradient-to-br ${plan.gradient} p-8 rounded-3xl transition-transform duration-500 hover:scale-[1.03] hover:rotate-1 hover:shadow-[0_0_80px_rgba(0,255,255,0.2)] backdrop-blur-md border border-white/10`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/40 transition-all duration-300 pointer-events-none" />

            <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md">
              {plan.title}
            </h3>

            <p className="text-5xl font-extrabold text-white mb-6 drop-shadow-md">
              {plan.price === 'Custom' ? (
                <span className="text-xl">Contact Us</span>
              ) : (
                <>
                  ${plan.price}
                  <span className="text-base text-gray-300 font-medium"> /mo</span>
                </>
              )}
            </p>

            <ul className="space-y-4 text-white mb-6 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-300 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className="w-full py-3 cursor-pointer rounded-xl font-semibold transition-all duration-300 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
            >
              {plan.price === 'Custom' ? 'Request Demo' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
