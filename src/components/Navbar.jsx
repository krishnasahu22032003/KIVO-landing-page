import React, { useRef, useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import ThemeToggle from './ThemeToggle';


const navItems = ["Home", "About", "Features", "Pricing", "Contact"];

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { y: currentScrollY } = useWindowScroll();
  const navContainerRef = useRef(null);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 h-16 border-none sm:inset-x-6 duration-700 top-4 z-50 transition-all"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full p-4 items-center justify-between">
          <div className="flex gap-7 items-center">
            <a href="#home">
              <img src="/images/logo.png" alt="logo" className="w-25 h-25" />
            </a>
          </div>

          <div className="hidden md:flex h-full items-center gap-1">
            <div className="flex gap-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn text-white hover:text-p3 transition"
                >
                  {item}
                </a>
              ))}
            </div>
            <ThemeToggle/>
            <div className="flex gap-3 ml-4">
              <a
                href="#signin"
                className="px-5 py-2 text-sm font-medium rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:shadow-lg transition-all duration-200"
              >
                Sign In
              </a>
              <a
                href="#signup"
                className="px-5 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#5D5FEF] via-[#9B66FF] to-[#14B8A6] text-white shadow-xl hover:brightness-125 hover:scale-[1.05] transition-all duration-200"
              >
                Sign Up
              </a>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-2xl text-white"
          >
            {mobileOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white/10 backdrop-blur-md text-white px-6 py-4 shadow-xl rounded-b-xl z-40 border border-white/10">
            <div className="flex flex-col gap-4 text-base">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-p3 font-medium transition"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t mt-4 border-white/20">
                <a
                  href="#signin"
                  className="px-5 py-2 text-sm font-medium rounded-xl border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:shadow-md transition-all duration-200 text-center"
                >
                  Sign In
                </a>
                <a
                  href="#signup"
                  className="px-5 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#5D5FEF] via-[#9B66FF] to-[#14B8A6] text-white text-center shadow-lg hover:brightness-125 hover:scale-[1.05] transition-all duration-200"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
