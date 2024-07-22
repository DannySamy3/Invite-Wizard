import React, { useEffect, useState } from "react";
import Image from "next/image";



interface Testimonial {
  id: number;
  text: string;
  name: string;
  job: string;
  img: string;
}


const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<Testimonial[]>([]);
  const [activeTestimonal, setActiveTestimonial] = useState(1);

  const persons = ["Alice Parker", "James Lee", "Emily White", "Ryan Mitchell"];
  const occupation = [
    "Software Developer at a tech company",
    "Financial Analyst in the banking sector",
    " Marketing Manager at a large corporation",
    "Electrician with his own business",
    "Financial Analyst in the banking sector",
  ];

  const image = ["/images/p-3.jpg", "/images/p-1.jpg", "/images/p-2.jpg"];

  const textArray = [
    "Discovering invite Wizard was a game-changer for our wedding planning. Designing our invitations was effortless, thanks to their intuitive interface and diverse template options. Our guests loved the personalized touch, and managing RSVPs online was a breeze. Highly recommend for anyone looking to simplify their wedding preparations!",

    "Using this web app for our wedding invitations was a dream come true! The templates were stunning, and customizing them to fit our theme was effortless. Our guests were impressed with the elegant designs. Managing RSVPs became a breeze with its user-friendly interface. I highly recommend it to anyone planning their big day!",

    "Using Invite Wizard for our wedding invitations was the best decision. The templates were stunning, and customizing them to fit our theme was effortless. Our guests were impressed with the ease of RSVPing online. It made our wedding planning stress-free and enjoyable. I highly recommend it for anyone planning their big day to use it!",
  ];

  useEffect(() => {
    const dataTestimonial = [];
    for (let i = 0; i < textArray.length; i++) {
      dataTestimonial.push({
        id: i + 1,
        text: textArray[i],
        name: persons[i],
        job: occupation[i],
        img: image[i],
      });
    }
    setTestimonial(dataTestimonial);
  }, []);

  const handleTestimonialChange = (id: number) => {
    const selectedTestimonial = testimonial.filter(
      (testimonialObj) => testimonialObj.id === id
    );

    const nextTestimonialId = selectedTestimonial[0].id;

    setActiveTestimonial(nextTestimonialId);
  };

  const nextClick = (id: number) => {
    const selectedTestimonial = testimonial.filter(
      (testimonialObj) => testimonialObj.id === id
    );

    const nextTestimonialId = selectedTestimonial[0].id;

    if (nextTestimonialId === textArray.length) setActiveTestimonial(1);
    else setActiveTestimonial(nextTestimonialId + 1);
  };

  const prevClick = (id: number) => {
    const selectedTestimonial = testimonial.filter(
      (testimonialObj) => testimonialObj.id === id
    );

    const nextTestimonialId = selectedTestimonial[0].id;

    if (nextTestimonialId === 1) setActiveTestimonial(textArray.length);
    else setActiveTestimonial(nextTestimonialId - 1);
  };

  return (
    <main className="  h-screen bg bg-gradient-to-tr from-stone-500 to-stone-300   ">
      <div className=" w-10 h-10 mb-20"></div>
      <section className="w-11/12  mx-auto bg-gradient-to-tr from-slate-200 shadow-xl rounded-xl h-82%  ">
        <div>
          <header className=" p-14">
            <p className="font-bold text-green-800 text-center mr-36%">
              NOT SURE YET?
            </p>
            <h1 className=" text-5xl font-playfair text-center">
              What our clients are saying about us?
            </h1>
          </header>

          {testimonial.map((textObj) => {
            return (
              <article
                key={textObj.id}
                className={` relative px-16 pt-11 mx-auto rounded-xl mt-7  h-96 w-6/12  gap-9 items-center  flex flex-col ${
                  textObj.id == activeTestimonal ? "" : "hidden"
                }`}
              >
                <p className=" font-montserrat leading-9 text-lg mb-3   ">
                  {textObj.text}
                </p>
                <section className=" flex mr-6  gap-6 mb-8  w-full  ">
                  {/* <div className=" w-20  h-20 rounded-full    bg-black overflow-hidden ml-2 "> */}
                  <Image
                    className=" rounded-full w-20 h-20 "
                    src={textObj.img}
                    width={150}
                    height={150}
                    alt=""
                    objectFit="contain"
                  />
                  {/* </div> */}

                  <section className=" flex flex-col gap-2 font-montserrat w-3/4">
                    <h2 className=" mt-1 mb-1 text-lg ">{textObj.name}</h2>
                    <span className=" text-sm font-semibold">
                      {textObj.job}
                    </span>
                  </section>

                  <svg
                    xmlns="http://www.w3.org/2001/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-14 h-14 cursor-pointer absolute top-46% left-20% bg-gray-200 rounded-full p-4      "
                    onClick={() => prevClick(textObj.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-14 h-14 cursor-pointer absolute top-46%  right-20% bg-gray-200 rounded-full p-4 "
                    onClick={() => nextClick(textObj.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </section>
              </article>
            );
          })}
        </div>
        <section className=" flex justify-center gap-2  ">
          {testimonial.map((textObj) => {
            return (
              <div key={textObj.id}>
                <button
                  onClick={() => handleTestimonialChange(textObj.id)}
                  className={`${
                    textObj.id == activeTestimonal ? " bg-slate-500" : ""
                  } hover:bg-slate-500  border-solid font-semibold border-2 p-1 font-montserrat text-lg border-gray-500 h-2 rounded-full flex justify-center items-center`}
                ></button>
              </div>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default Testimonial;
