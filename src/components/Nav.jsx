import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { Icon } from "@iconify/react";
import gsap from "gsap";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false); //using string for bool
  const [scrolling, setScrolling] = useState(false);
  const navRef = useRef(null);
  const linkRef = useRef(null);
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  // Style for active link
  const activeLinkClass = "border-b-2 border-brown pb-1";

  useEffect(() => {
    const nav = navRef.current;
    const link = linkRef.current;
    const tline = gsap.timeline();

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    // Gsap animation
    tline
      .set(nav, {
        autoAlpha: 0,
        x: -50,
      })
      .to(nav, {
        autoAlpha: 1,
        x: 0,
        delay: 1,
        transition: 1,
      });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="nav"
      className={`z-30 nav fixed md:mb-3 top-0 w-screen text-white ${scrolling
        ? "backdrop-filter backdrop-blur-lg bg-black/40"
        : "backdrop-filter backdrop-blur-lg bg-black/40"
        }`}
    >
      <div
        ref={navRef}
        className="container flex justify-between items-center "
      >
        {/* Logo */}
        <Link to="/">
          <div className="flex flex-col items-center custom_font">
            <p className="font-medium text-3xl">Agelgil</p>
            <p className="font-medium text-xl">አግልግል</p>
          </div>
        </Link>

        <div
          ref={linkRef}
          className="space-x-5  max-lg:hidden font-medium text-lg"
        >
          <Link to="/news" className={isActive("/news") ? activeLinkClass : ""}>News</Link>
          <Link to="/product" className={isActive("/product") ? activeLinkClass : ""}>Product</Link>
          <Link to="/impact" className={isActive("/impact") ? activeLinkClass : ""}>Impact</Link>
          <Link to="/about" className={isActive("/about") ? activeLinkClass : ""}>About Us</Link>
          <Link to="/contact" className={isActive("/contact") ? activeLinkClass : ""}>Contact Us</Link>
        </div>

        {/* Working with Mobile version of nav  */}

        <div className="lg:hidden">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <Icon icon="ic:round-menu" width={30} />
          </button>
        </div>

        {/* Menu to be toggled */}
      </div>

      {showMenu && (
        <div className=" block md:hidden font-medium text-lg container">
          <div>
            <Link className={isActive("/news") ? activeLinkClass : ""} to="/news" onClick={() => setShowMenu(false)}>
              News
            </Link>
          </div>
          <div>
            <Link className={isActive("/product") ? activeLinkClass : ""} to="/product" onClick={() => setShowMenu(false)}>
              Our products
            </Link>
          </div>
          <div>
            <Link className={isActive("/impact") ? activeLinkClass : ""} to="/impact" onClick={() => setShowMenu(false)}>Our Impact</Link>
          </div>
          <div>
            <Link className={isActive("/about") ? activeLinkClass : ""} to="/about" onClick={() => setShowMenu(false)}>About Us</Link>
          </div>
          <div>
            <Link className={isActive("/contact") ? activeLinkClass : ""} to="/contact" onClick={() => setShowMenu(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
