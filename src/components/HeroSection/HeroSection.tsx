"use client";
import React, { useState, useEffect } from "react";
import Login from "../Login/Login";
import Navigation from "../navigation/Navigation";
import LearnMore from "../LearnMore/LearnMore";
import Testimonial from "../Testimonials/page";
import Subsrciption from "../Subscription/Subsrciption";

const HeroSection = () => {
  const images = [
    "bg-hero-pattern-1",
    "bg-hero-pattern-2",
    "bg-hero-pattern-3",
    "bg-hero-pattern-4",
    "bg-hero-pattern-5",
    "bg-hero-pattern-6",
    "bg-hero-pattern-7",
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [previousImage, setPreviousImage] = useState(images[0]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [loginPage, setLoginPage] = useState(false);

  const handleLoginModal = () => {
    setLoginPage(true);
  };

  // Preload images
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPreviousImage(images[currentImage]);
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images, currentImage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className={`relative w-full h-screen  ${previousImage} bg-cover bg-center`}
      >
        {loginPage && <Login handleLogin={setLoginPage} />}
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute w-full h-full ${image} bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentImage
                ? "opacity-100 animate-fadeIn"
                : "opacity-0 animate-fadeOut"
            }`}
          />
        ))}

        <div className=" w-9/12 mx-auto">
          <Navigation isLoaded={isLoaded} handleLoginModal={handleLoginModal} />

          <div
            className={`absolute top-53% text-gray-100   animate-slideUp transition-all duration-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className=" w-2/4">
              <h1 className=" font-playfair text-gray-200 text-6xl font-bold mb-6 leading-none   ">
                Personalized Invitations Made Effortless.
              </h1>

              <p className="mb-5 leading-7 text-lg text-stone-300 font-montserrat font-semibold ">
                Welcome to Invite Wizard, where creating and sharing
                unforgettable moments begins! Design stunning online invitation
                cards effortlessly and spread joy across social media with just
                a click. Join us and start crafting your perfect invitation
                today!"
              </p>

              <button className=" hover:bg-gray-300 text-black rounded-full font-semibold font-montserrat py-4 px-10 text-lg  bg-gray-200 ">
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
