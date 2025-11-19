import React, { useEffect } from "react";
import { Link, useLocation } from "react-router";

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="bg-linear-to-b from-base-200 to-base-300 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-5">
        <div>
          <Link
            to="/"
            className="flex items-center mb-3"
            onClick={() => {
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <span className="ml-1 inter font-bold text-5xl bg-linear-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Gamora
            </span>
          </Link>
          <p className="text-sm opacity-70 leading-relaxed text-justify">
            Discover, download and enjoy thousands of games built for
            productivity, gaming and creativity — all in one place.
          </p>
        </div>
        <div className="md:pl-20">
          <h6 className="footer-title text-lg mb-4 font-semibold tracking-wide">
            Explore
          </h6>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="link link-hover hover:text-primary transition"
                onClick={() => {
                  if (window.location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-games"
                className="link link-hover hover:text-primary transition"
                onClick={() => {
                  if (window.location.pathname === "/all-games") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                All Games
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="link link-hover hover:text-primary transition"
                onClick={() => {
                  if (window.location.pathname === "/about-us") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:pl-10">
          <h6 className="footer-title text-lg mb-4 font-semibold tracking-wide">
            Company
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover hover:text-primary transition">
                Careers
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Contact
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="footer-title text-lg mb-4 font-semibold tracking-wide">
            Stay Updated
          </h6>
          <form className="flex flex-col space-y-3">
            <label className="text-sm text-base-content/70">
              Join our newsletter
            </label>
            <div className="join w-full">
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered join-item w-full"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-gray-300 py-6 text-center text-sm text-base-content/70">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Gamora</span> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
