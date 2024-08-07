"use client";
import React from "react";

interface NavigationProps {
  isLoaded: boolean;
  handleLoginModal: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isLoaded,
  handleLoginModal,
}) => {
  return (
    <nav
      className={`absolute mt-2 w-3/4 text-gray-900 transition-all duration-1000 flex justify-between items-center p-4 rounded-full text-lg font-semibold
  bg-gradient-to-r  bg-opacity-100

${
  isLoaded
    ? "animate-slideDown translate-y-0 opacity-100"
    : "translate-y-10 opacity-0"
}`}
    >
      <section className=" flex gap-4 items-center justify-center font-montserrat  text-gray-900 text-xl  ">
        <button>Home</button>
      </section>
      <ul className=" flex gap-4 text-gray-900 text-xl font-montserrat ">
        <button></button>
        <button>How It Works </button>
        <button>Testimonial</button>

        <button
          onClick={handleLoginModal}
          className="  p-4 text-white hover:bg-green-600 rounded-full bg-green-600"
        >
          Get Started
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
