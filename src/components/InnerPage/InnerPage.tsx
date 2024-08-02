import React from "react";
import { useState } from "react";
import CustomizeCard1 from "./CustomizeCard1";
import CustomizeCard2 from "./CustomizeCard2";
import CardDetails from "./CardDetails";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import FirstCard from "../CardTemplates/FirstCard";
import InviteeTools from "./InviteeTools";

import { PDFViewer } from "@react-pdf/renderer";
import { init } from "next/dist/compiled/webpack/webpack";
import { removeAllListeners } from "process";

const InnerPage = () => {
  const initialViewState = {
    text: false,
    details: false,
    view: false,
    more: false,
  };

  const initialCardData = {
    location: "",

    headerText: "",
    salutation: "",
    date: "",
    contact: "",
    description: "",
    bride: "",
    groom: "",
    remark: "",
    priceSingle: "",
    priceDouble: "",
    priceFamily: "",
  };

  const initialGuestSelection = {
    plan: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    price: "",
  };

  const [tempData, setTempData] = useState(initialCardData);
  const [guestSelection, setGuestSelection] = useState(initialGuestSelection);
  const [selectedElement, setSelectedElement] = useState(initialViewState);
  const [cardData, setCardData] = useState(initialCardData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    location,
    headerText,
    salutation,
    date,
    description,
    bride,
    groom,
    remark,
    contact,
    priceDouble,
    priceFamily,
    priceSingle,
  } = cardData;

  const dater = new Date(date);
  const day = dater.toLocaleDateString("en-US", { weekday: "long" });
  const year = dater.toLocaleString("en-US", { year: "numeric" });
  const month = dater
    .toLocaleDateString("en-US", { month: "long" })
    .toLocaleUpperCase();
  const dayOfMonth = dater.getDate();

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
    venue: location,
    heading: headerText,
    greet: salutation,
    date: fullDate,
    mobileContact: contact,
    details: description,
    female: bride,
    male: groom,
    footer: remark,
    singlePrice: priceSingle,
    familyPrice: priceFamily,
    doublePrice: priceDouble,
  };

  const collectData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;

    setCardData((prev) => {
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

  const submitData = (e: any) => {
    e.preventDefault();
    setTempData(initialCardData);
    setIsSubmitted(true);

    setSelectedElement((prev) => {
      return {
        ...prev,
        text: false,
        more: false,
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

  console.log(isSubmitted);

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

          <section className=" flex gap-7  mt-9 h-3/4 ">
            <div className=" bg-gray-200 w-2/4 rounded-xl ">
              <header className="text-2xl text-center font-montserrat shadow-sm bg-gray-100 rounded-l-xl">
                Tool Box
              </header>
              <InviteeTools
                handleCard={handleCard}
                selectedElement={selectedElement}
                domain={"invited"}
              />
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
              {selectedElement.details && (
                <CardDetails
                  data={dummydata}
                  handleGuestInput={setGuestSelection}
                  selection={guestSelection}
                  userData={dummydata}
                />
              )}
              {selectedElement.view && (
                <PDFViewer className=" mt-5 w-11/12 mx-auto h-88%">
                  <FirstCard cardInput={dummydata} preview={isSubmitted} />
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
