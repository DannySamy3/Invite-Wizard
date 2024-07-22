"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const LearnMore = () => {
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFirstSection(true);
    }, 6000);

    const timer2 = setTimeout(() => {
      setShowSecondSection(true); // Show second section after 10 seconds
      // Scroll to the second section smoothly when it becomes visible
      secondSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 12000);

    const timer3 = setTimeout(() => {
      setShowThirdSection(true); // Show third section after 15 seconds
    }, 15000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <article className="mx-auto w-full h-screen p-7 bg-gradient-to-tr overflow-x-hidden  from-slate-600">
      <header className="mb-10 text-center">
        <h1 className="font-playfair text-6xl mb-3">How it Works</h1>
        <p className="font-montserrat text-normal mb-2 font-medium leading-10">
          Discover how Invite Wizard simplifies your experience in just a few
          easy steps
        </p>
      </header>

      <section className=" flex flex-col gap-10 w-66.3p mx-auto  ">
        <section className=" flex gap-10 ml-32  ">
          <Image
            src="/images/signup.jpg"
            className=" rounded-2xl shadow-lg w-5/12 animate-slideInFromLeft "
            width={300}
            height={100}
            alt=""
          />

          <div className="  shadow-md w-5/12 rounded-2xl px-8 py-4 bg-gray-300 leading-10 animate-slideInFromRight   ">
            <h1 className=" text-center font-medium font-playfair text-3xl mb-5">
              Register & Login
            </h1>

            <p className=" leading-8  font-medium   font-montserrat ">
              To access the features and content on our site, we require all
              users to register or log in. Registration is quick and easy, your
              privacy and security are important to us, and your information
              will be kept confidential.
            </p>
          </div>
        </section>
        <section
          className={`flex gap-10 ml-32 ${showFirstSection ? "" : "hidden"}`}
        >
          <div className=" shadow-md w-5/12 rounded-2xl px-8 py-4 bg-gray-300 leading-10 animate-slideInFromLeft   ">
            <h1 className=" text-center font-playfair font-medium text-3xl mb-5">
              "As unique as your love story"
            </h1>

            <p className=" leading-8 font-medium font-montserrat ">
              Craft a personalized wedding card that captures the essence of
              your special day. Customize every detail to create a cherished
              keepsake. Our cards feature scannable QR codes, adding modern
              authentication features to ensure your invitations are
              authentic...
            </p>
          </div>

          <Image
            src="/images/card.jpg"
            className=" rounded-2xl shadow-lg  w-5/12 animate-slideInFromRight "
            width={300}
            height={100}
            alt=""
          />
        </section>

        <section
          ref={secondSectionRef} // Attach the ref here
          className={`flex gap-10 ml-32 ${showSecondSection ? "" : "hidden"}`}
        >
          <Image
            src="/images/announce.jpg"
            className="rounded-2xl shadow-lg w-5/12 animate-slideInFromLeft"
            width={300}
            height={100}
            alt=""
          />
          <div className="shadow-md w-5/12 rounded-2xl px-8 py-4 bg-gray-300 leading-10 animate-slideInFromRight">
            <h1 className=" text-center font-playfair font-medium text-3xl mb-5">
              Share the Excitement
            </h1>
            <p className=" leading-8 font-medium font-montserrat ">
              Spread the word about your wedding or special event with ease by
              sharing your beautifully crafted cards via social media. Let
              everyone know about your celebration with just a few taps,
              ensuring your event is well-attended and memorable.
            </p>
          </div>
        </section>

        <section
          ref={secondSectionRef} // Attach the ref here
          className={`flex gap-10 ml-32 ${showSecondSection ? "" : "hidden"}`}
        >
          <div className=" shadow-md w-5/12 rounded-2xl px-8 py-4 bg-gray-300 leading-10 animate-slideInFromLeft   ">
            <h1 className=" text-center font-playfair font-medium text-3xl mb-5">
              QR Code Entry Authentication
            </h1>
            <p className=" leading-8 font-medium font-montserrat ">
              Simply scan the QR code on your card upon arrival at the event
              venue to authenticate your attendance and streamline your entry
              process. This innovative feature ensures that every guest enjoys a
              hassle-free and memorable experience, right from the moment they
              arrive.
            </p>
          </div>

          <Image
            src="/images/scan.jpg"
            className="rounded-2xl shadow-lg w-5/12 animate-slideInFromRight"
            width={300}
            height={100}
            alt=""
          />
        </section>
      </section>
    </article>
  );
};

export default LearnMore;
