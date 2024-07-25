import React from "react";
import { useState } from "react";
import CardText from "./CardText";
import CardDetails from "./CardDetails";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import FirstCard from "../CardTemplates/FirstCard";
import Button from "../ReUsable/Button";
import TemplateCard1 from "../CardRenderer/TemplateCard1";
import { PDFViewer } from "@react-pdf/renderer";
import { init } from "next/dist/compiled/webpack/webpack";

const InnerPage = () => {
  const initialViewState = {
    text: false,
    details: false,
    view: false,
  };

  const initialCardData = {
    location: "",
    bodyFont: "",
    headerText: "",
    salutation: "",
    date: "",
    contact: "",
    description: "",
  };
  const [selectedElement, setSelectedElement] = useState(initialViewState);

  const [cardData, setCardData] = useState(initialCardData);

  const handleCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    const key = name as keyof typeof initialViewState;

    setSelectedElement((prev) => {
      return {
        ...initialViewState,
        [key]: !prev[key],
      };
    });
  };

  let btnStyle =
    " font-montserrat rounded-md text-lg p-2 text-start hover:bg-blue-300 outline-none ";

  return (
    <div className="bg-gray-200  h-screen overflow-y-hidden flex flex-row gap-0 outline-none">
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
                <Button
                  identifier={"text"}
                  method={handleCard}
                  selectedElement={selectedElement.text}
                >
                  Customize Text
                </Button>
                <Button
                  identifier={"details"}
                  method={handleCard}
                  selectedElement={selectedElement.details}
                >
                  Add Card Details
                </Button>

                <Button
                  identifier={"view"}
                  method={handleCard}
                  selectedElement={selectedElement.view}
                >
                  View Card
                </Button>
              </article>
            </div>
            <div className=" bg-gray-200 w-2/4 rounded-lg ">
              <header className="text-2xl text-center font-montserrat shadow-sm bg-gray-100">
                View
              </header>

              {selectedElement.text && (
                <CardText
                  state={setCardData}
                  closeElement={setSelectedElement}
                  initialData={initialCardData}
                />
              )}
              {selectedElement.details && <CardDetails />}
              {selectedElement.view && (
                <PDFViewer className=" mt-5 w-11/12 mx-auto h-88%">
                  <FirstCard cardInput={cardData} />
                </PDFViewer>
              )}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default InnerPage;
