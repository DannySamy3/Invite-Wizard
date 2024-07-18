import React from "react";
import { useState } from "react";
import CardText from "./CardText";
import CardDetails from "./CardDetails";
import LeftNavigation from "../LeftNavigation/LeftNavigation";

const InnerPage = () => {
  // const [cardPreview, setCardPreview] = useState({sectionText:false});
  const initial = {
    text: false,
    details: false,
    view: false,
  };
  const [selectedElement, setSelectedElement] = useState(initial);
  const handleCardText = (e) => {
    const { name } = e.target;

    console.log(name);
    setSelectedElement((prev) => {
      return {
        ...initial,
        [name]: !prev[name],
      };
    });
  };

  console.log(selectedElement)

  let btnStyle =
    " font-montserrat rounded-md text-lg p-2 text-start hover:bg-blue-300 outline-none ";

  return (
    <div className="bg-gray-200  h-screen flex flex-row gap-0 outline-none">
      <LeftNavigation />
      <section className=" w-11/12     mx-auto shadow-sm rounded-md">
        <div className=" shadow-lg  flex flex-col gap-4 h-screen p-10 bg-gray-300 rounded-xl mt-6">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            eligendi amet debitis blanditiis corrupti quia, aut rem sint veniam
            ratione natus mollitia dolorum dolorem rerum error tenetur,
            voluptate minima! Assumenda?
          </p>

          <section className=" flex gap-7 bg-100 mt-9 h-3/4 ">
            <div className=" bg-gray-200 w-2/4 rounded-xl ">
              <header className="text-2xl text-center font-montserrat shadow-sm bg-gray-100 rounded-l-xl">
                Tool Box
              </header>
              <article className=" flex flex-col gap-3   py-3 px-1">
                <button className=" font-montserrat rounded-md text-lg p-2 text-start hover:bg-blue-300 ">
                  Select Template
                </button>
                <button
                  name="text"
                  onClick={(e) => handleCardText(e)}
                  className={`${
                    selectedElement.text
                      ? btnStyle.concat(" bg-blue-300 font-semibold")
                      : btnStyle
                  }`}
                >
                  Customize Text
                </button>
                <button
                  name="details"
                  onClick={(e) => handleCardText(e)}
                  className={`${
                    selectedElement.details
                    ? btnStyle.concat(" bg-blue-300 font-semibold")
                      : btnStyle
                  }`}
                >
                  Add Card Details
                </button>
                <button className=" font-montserrat rounded-md text-lg p-2 text-start hover:bg-blue-300 outline-none   ">
                  View Card
                </button>
              </article>
            </div>
            <div className=" bg-gray-200 w-2/4 rounded-lg ">
              <header className="text-2xl text-center font-montserrat shadow-sm bg-gray-100">
                View
              </header>

              {selectedElement.text && <CardText />}
              {selectedElement.details && <CardDetails />}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default InnerPage;
