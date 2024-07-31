import React from "react";
import { useState } from "react";
import CustomizeCard1 from "./CustomizeCard1";
import CustomizeCard2 from "./CustomizeCard2";
import CardDetails from "./CardDetails";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import FirstCard from "../CardTemplates/FirstCard";
import Button from "../ReUsable/Button";

import { PDFViewer } from "@react-pdf/renderer";
import { init } from "next/dist/compiled/webpack/webpack";

const InnerPage = () => {
  const initialViewState = {
    text: false,
    details: false,
    view: false,
    more: false,
  };

  const date = new Date("2026-07-24");
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const year = date.toLocaleString("en-US", { year: "numeric" });
  const month = date
    .toLocaleDateString("en-US", { month: "long" })
    .toLocaleUpperCase();
  const dayOfMonth = date.getDate();

  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "ST";
      case 2:
        return "ND";
      case 3:
        return "RF";
      default:
        return "TH";
    }
  };

  const fullDate = `${month} ${dayOfMonth}${getOrdinalSuffix(
    dayOfMonth
  )} ${year}`;

  const dummydata = {
    location: "Okinawa ",
    headerText: "Ndugu Kaka Au Dada",
    salutation: "The family of Ms.Lutufyo likes to invite you to ",
    date: fullDate,
    contact: "0655312125",
    description:
      "orem ipsum dolor sit amet, consectetur adipisicing elit. Dolor enim molestiae repellat ex sapiente delectus placeat quos nulla quia iure, aliquam ipsam animi sunt tempora culpa eius molestias quibusdam asperiores ",
    bride: "Violeth",
    groom: "daniel",
  };
  const initialCardData = {
    location: "",
    // bodyFont: "",
    headerText: "",
    salutation: "",
    date: "",
    contact: "",
    description: "",
    bride: "",
    groom: "",
  };

  const collectData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    state((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setTempData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    setTempData(initialData);

    closeElement((prev) => {
      return {
        ...prev,
        text: false,
      };
    });
  };

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

  const [tempData, setTempData] = useState(initialCardData);
  const [selectedElement, setSelectedElement] = useState(initialViewState);
  const [cardData, setCardData] = useState(initialCardData);

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

                {/* <Button
                  identifier={"more"}
                  method={handleCard}
                  selectedElement={selectedElement.more}
                >
                  More Details
                </Button> */}
                {/* <Button
                  identifier={"details"}
                  method={handleCard}
                  selectedElement={selectedElement.details}
                >
                  Add Card Details
                </Button> */}

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

              {selectedElement.text && !selectedElement.more && (
                <CustomizeCard1
                  handleSave={submitData}
                  handleDataSubmission={collectData}
                  tempData={tempData}
                  nextPage={setSelectedElement}
                  defaultView={initialViewState}
                />
              )}
              {selectedElement.more && (
                <CustomizeCard2
                  handleDataSubmission={collectData}
                  tempData={tempData}
                  handleSave={submitData}
                  defaultView={initialViewState}
                  previousPage={setSelectedElement}
                />
              )}
              {selectedElement.details && <CardDetails />}
              {selectedElement.view && (
                <PDFViewer className=" mt-5 w-11/12 mx-auto h-88%">
                  <FirstCard cardInput={dummydata} />
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
