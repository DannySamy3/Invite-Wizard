"use client";
import React from "react";

import Link from "next/link";

const Navigation = ({ isLoaded, handleLoginModal }) => {
  return (
    <nav
      className={`absolute mt-2 w-3/4 text-black transition-all duration-1000 flex justify-between items-center p-4 rounded-full text-lg font-semibold
bg-gradient-to-tr from-neutral-500

00 bg-opacity-100 ${
        isLoaded
          ? "animate-slideDown translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <section className=" flex gap-4 items-center justify-center  text-white text-xl  ">
        <div className="  border-2 font-montserrat   w-18 flex justify-center items-center h-16 rounded-full p-3 ">
          Icon
        </div>
        <button>Home</button>
      </section>
      <ul className=" flex gap-4 text-white text-xl font-montserrat ">
        <button></button>
        <button>How It Works </button>
        <button>Testimonial</button>

        <button
          onClick={handleLoginModal}
          className=" bg-white p-4 text-black hover:bg-gray-200 rounded-full"
        >
          Register
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
