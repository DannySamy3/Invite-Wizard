import React from "react";

const Subsrciption = () => {
  return (
    <div>
      <section className="h-screen bg-gray-200 ">
        <header className=" p-6">
          <h1 className=" font-playfair text-5xl text-center ">
            Choose Subscription Plan that Suits Your Demands
          </h1>
        </header>

        <article className=" w-11/12 font-montserrat rounded-xl bg-stone-200  mx-auto gap-3 p-10 h-82% ">
          <div className=" flex  gap-3">
            <div className=" flex flex-col gap-4 shadow-sm rounded-xl p-6 w-4/12 bg-stone-300 ">
              <h2 className="text-4xl font-playfair ">Basic</h2>
              {/* <span className=" text-xl text-orange-400">Features</span> */}
              <ul className=" leading-10 text-normal">
                <li> Create & Customize Cards</li>
                <li>Monthly access</li>
                <li>25 Invitation Sharing</li>
              </ul>
            </div>
            <div className=" flex flex-col gap-4 shadow-sm rounded-xl p-6 w-4/12 bg-stone-300 ">
              <h2 className="text-4xl font-playfair ">Basic</h2>
              {/* <span className=" text-xl text-orange-400">Features</span> */}
              <ul className=" leading-10 text-normal ">
                <li> Create & Customize Cards</li>
                <li>Monthly access</li>
                <li>25 Invitation Sharing</li>
              </ul>
            </div>
            <div className=" flex flex-col gap-4 shadow-2xl  bg-stone-400 rounded-xl p-6 w-4/12 ">
              <h2 className="text-4xl font-playfair ">Basic</h2>
              {/* <span className=" text-xl text-orange-400">Features</span> */}
              <ul className=" leading-10 text-normal">
                <li> Create & Customize Cards</li>
                <li>Monthly access</li>
                <li>25 Invitation Sharing</li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Subsrciption;
