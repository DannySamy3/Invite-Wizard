"use client";
import React, { useState, useEffect } from "react";
import Login from "../Login/Login";
import Navigation from "../navigation/Navigation";
import LearnMore from "../LearnMore/LearnMore";
import Testimonial from "../Testimonials/page";
import Subsrciption from "../Subscription/Subsrciption";

const HeroSection = () => {
  const images = ["bg-hero-pattern-1"];

  const [isLoaded, setIsLoaded] = useState(false);

  const [loginPage, setLoginPage] = useState(false);

  const handleLoginModal = () => {
    setLoginPage(true);
  };

 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="relative w-full h-screen bg-hero-pattern-1 bg-cover bg-center">
        {loginPage && <Login handleLogin={setLoginPage} />}

        <div className=" w-9/12 mx-auto">
          <Navigation isLoaded={isLoaded} handleLoginModal={handleLoginModal} />

          <div
            className={`absolute top-53% text-black   animate-slideUp transition-all duration-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className=" w-2/4">
              <h1 className=" font-playfair text-red-700 text-6xl font-bold mb-6 leading-none   ">
                Personalized Invitations Made Effortless.
              </h1>

              <p className="mb-5 leading-7 text-lg text-gray-800 font-montserrat font-semibold ">
                Welcome to Invite Wizard, where creating and sharing
                unforgettable moments begins! Design stunning online invitation
                cards effortlessly and spread joy across social media with just
                a click. Join us and start crafting your perfect invitation
                today!"
              </p>

              <button className=" hover:bg-gray-300 text-white rounded-full font-semibold font-montserrat py-4 px-10 text-lg bg-purple-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <LearnMore />
      <Testimonial />
      <Subsrciption />
    </div>
  );
};

export default HeroSection;
