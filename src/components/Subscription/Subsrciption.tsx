import React from "react";

const Subsrciption = () => {
  return (
    <div>
      <section className="h-screen bg-gray-200 overflow-x-hidden relative">
        <header className=" p-6">
          <h1 className=" font-playfair text-5xl text-center ">
            Choose Subscription Plan that Suits Your Demands
          </h1>
        </header>

        <article className=" w-11/12 font-montserrat rounded-xl bg-stone-200  mx-auto gap-3 p-10 h-82%  ">
          <div className=" flex  gap-3">
            <div className=" flex flex-col gap-4 shadow-sm rounded-xl p-6 w-4/12 bg-stone-300 ">
              <h2 className="text-4xl font-playfair ">Free</h2>
              {/* <span className=" text-xl text-orange-400">Features</span> */}
              <ul className=" leading-10 text-normal">
                <li>Limited Card Customization✅</li>
                <li>
                  28 days access <span className=" w-8 h-8">🕛</span>{" "}
                </li>
                <li>25 Invitation Sharing ✅</li>
              </ul>
            </div>
            <div className=" flex flex-col gap-4 shadow-sm rounded-xl p-6 w-4/12 bg-stone-300 ">
              <h2 className="text-4xl font-playfair ">Premium</h2>
              {/* <span className=" text-xl text-orange-400">Features</span> */}
              <ul className=" leading-10 text-normal ">
                <li>Limited Card Customization✅</li>
                <li>
                  6 Months access <span className=" w-8 h-8">🕛</span>
                </li>
                <li>70 Invitation Sharing </li>
              </ul>
            </div>
            <div className=" flex flex-col gap-4 shadow-2xl  bg-stone-400 rounded-xl p-6 w-4/12 h-full ">
              <h2 className="text-4xl font-playfair ">Ultimate</h2>
              {/* <span className=" text-xl text-orange-400">Features</span> */}
              <ul className=" leading-10 text-normal">
                <li>Limited Card Customization❌</li>
                <li>Life Time Access✅</li>
                <li>Unlimited Invitation Sharing✅</li>
                <li>Account Reusal for other Weddings✅</li>
                <li>10% discount✅</li>
              </ul>
            </div>
          </div>

          <footer className="footer  w-full absolute bottom-0    bg-base-300 text-base-content p-10">
            <nav>
              <h6 className="footer-title text-black">Services</h6>
              <a className="link link-hover text-black">Branding</a>
              <a className="link link-hover text-black">Design</a>
              <a className="link link-hover text-black">Marketing</a>
              <a className="link link-hover text-black">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title text-black">Company</h6>
              <a className="link link-hover text-black">About us</a>
              <a className="link link-hover text-black">Contact</a>
              <a className="link link-hover text-black">Jobs</a>
              <a className="link link-hover text-black">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title text-black  ">Social</h6>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </footer>
        </article>
      </section>
    </div>
  );
};

export default Subsrciption;
