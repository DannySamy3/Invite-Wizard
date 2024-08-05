"use client";
import React from "react";
import { useState, useEffect } from "react";
import CustomizeCard1 from "./CustomizeCard1";
import CustomizeCard2 from "./CustomizeCard2";
import CardDetails from "./CardDetails";
import ShowDataBase from "./ShowDataBase";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import FirstCard from "../CardTemplates/FirstCard";
import InviteeTools from "./InviteeTools";
import { userInfo, inputCardData, fetchQRCode } from "@/Utils/userController";
import { fetchGuestData } from "@/Utils/guestController";
import { addPlans } from "@/Utils/priceController";
import PreviewUserCard from "./PreviewUserCard";
import { fetchCardAndUserData } from "@/Utils/guestController";

import { PDFViewer } from "@react-pdf/renderer";

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
  let guestData = true;
  const [tempData, setTempData] = useState(initialCardData);
  const [guestSelection, setGuestSelection] = useState(initialGuestSelection);
  const [selectedElement, setSelectedElement] = useState(initialViewState);
  const [cardData, setCardData] = useState(initialCardData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<any>({});
  const [showDataBase, setShowDataBase] = useState(false);
  const [preview, setPreview] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [guestCardJoins, setGuestCardJoins] = useState(null);
  const [dbData, setDbData] = useState(null);
  const [getGuest, setgetGuest] = useState(null);

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
  // const day = dater.toLocaleDateString("en-US", { weekday: "long" });
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

  const handleQrCode = async (data: any) => {
    try {
      const response = await fetchQRCode(data);
      const result = await response?.data;
      console.log(response);
      if (response?.statusText === "OK") {
        setQrCodeUrl(result.qrCode);
      } else {
        console.error("Error generating QR code:", result.error);
      }
    } catch (error) {
      console.error("Error fetching QR code:", error);
    }
  };
  const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTempData(initialCardData);
    setIsSubmitted(true);

    setSelectedElement((prev) => ({
      ...prev,
      text: false,
      more: false,
    }));

    const {
      greet,
      female,
      male,
      venue,
      date,
      footer,
      details,
      heading,
      familyPrice,
      singlePrice,
      doublePrice,
      mobileContact,
    } = dummydata;

    const submitDataPayload = {
      salutation: greet,
      bride: female,
      groom: male,
      venue,
      date,
      remark: footer,
      description: details,
      user_id: loggedInUser.id,
      header_text: heading,
      contacts: mobileContact,
    };

    try {
      await inputCardData(submitDataPayload);
      await addPlans({
        family: familyPrice,
        single: singlePrice,
        double: doublePrice,
        id_foreign: loggedInUser.id,
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
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

  const getLoggedUser = async () => {
    const user = await userInfo();
    setLoggedInUser(user?.data);
  };

  const addGuest = async () => {
    const { firstName, lastName, plan, mobileNumber } = guestSelection;

    const response = fetchGuestData({
      inviter_id: loggedInUser.id,
      first_name: firstName,
      last_name: lastName,
      plan: plan,
      mobile_number: mobileNumber,
      status: "Not Paid",
    });
    const guest = await response;

    const fetchCard = await fetchCardAndUserData(loggedInUser.id);
    setGuestCardJoins(fetchCard[0]);

    handleQrCode(guest.guest_id);
    setPreview(true);
  };

  useEffect(() => {
    getLoggedUser();
  }, []);

  let btnStyle =
    " font-montserrat rounded-md text-lg p-2 text-start hover:bg-blue-300 outline-none ";

  const toolStyle = ` w-11/12 mt-3 mx-auto shadow-sm rounded-md ${
    showDataBase ? "hidden" : ""
  }`;

  const handleData = async (id: any) => {
    try {
      
      const response = await fetchCardAndUserData(id);
     

      setDbData(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-200 font-montserrat   h-screen overflow-y-hidden flex flex-row gap-0 outline-none">
      <LeftNavigation
        showDb={setShowDataBase}
        handleData={handleData}
        dbShow={showDataBase}
        id={loggedInUser.id}
      />
      {showDataBase && <ShowDataBase data={dbData} changeUser={setgetGuest}  />}
      <section className={toolStyle}>
        {preview && (
          <PreviewUserCard
            cardInput={dummydata}
            view={setPreview}
            preview={isSubmitted}
            qrCode={qrCodeUrl}
            cardData={guestCardJoins}
          />
        )}

        <div className=" shadow-lg  flex flex-col gap-4 h-screen  p-10 bg-gray-300 rounded-xl mt-6">
          <p className="  text-xl font-semibold ml-1">
            {` ${
              loggedInUser.first_name
                ? "Welcome ".concat(loggedInUser.first_name)
                : ""
            } ${loggedInUser.last_name ?? ""} `}
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
                // handleShowCard={is}
              />
            </div>
            <div className=" bg-gray-200 w-2/4 rounded-lg ">
              <header className="text-2xl text-center font-montserrat shadow-sm bg-gray-100">
                View
              </header>

              {selectedElement.text && !selectedElement.more && (
                <CustomizeCard1
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
                  createGuest={addGuest}
                  data={dummydata}
                  reset={initialGuestSelection}
                  closeSection={setSelectedElement}
                  handleGuestInput={setGuestSelection}
                  selection={guestSelection}
                  userData={dummydata}
                  preview={setIsSubmitted}
                />
              )}
              {selectedElement.view && (
                <PDFViewer className=" mt-5 w-11/12 mx-auto h-88%">
                  <FirstCard
                    cardInput={dummydata}
                    preview={isSubmitted}
                    qrCode={qrCodeUrl}
                    guestCardData={guestCardJoins}
                  />
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
