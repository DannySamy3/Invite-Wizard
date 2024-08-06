import React from "react";
import { useState, useEffect } from "react";

interface CustomizeCard1Props {
  
  handleDataSubmission: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  tempData: {
    headerText: string;
    salutation: string;
    bride: string;
    groom: string;
    location: string;
    date: string;
    contact: string;
    description: string;
  };
  nextPage: (callback: (prev: any) => any) => void;
  defaultView: any;
}

const CustomizeCard1: React.FC<CustomizeCard1Props> = ({
  handleDataSubmission,
  tempData,
  nextPage,
  defaultView,
}) => {
  const [enable, setEnable] = useState(false);

  const { headerText, salutation, bride, groom, location, date, contact } =
    tempData;

  const checkInputData = () => {
    if (
      headerText &&
      salutation &&
      bride &&
      groom &&
      location &&
      date &&
      contact
    )
      setEnable(true);
  };

  useEffect(() => {
    checkInputData();
  }, [headerText, salutation, bride, groom, location, date, contact]);

  return (
    <div className="   font-montserrat font-semibold text-gray-500    rounded-lg">
      <div className=" flex flex-col gap-6p px-6 py-2    ">
        <label>Header Text</label>
        <input
          type="text"
          name="headerText"
          value={headerText}
          onChange={(e) => {
            handleDataSubmission(e);
          }}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1 "
          required
        />

        <label>Salutation</label>
        <input
          name="salutation"
          onChange={(e) => {
            handleDataSubmission(e);
          }}
          type="text"
          value={salutation}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />

        <label>Bride's Name </label>
        <input
          name="bride"
          onChange={(e) => {
            handleDataSubmission(e);
          }}
          type="text"
          value={bride}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />

        <label>Groom's Name</label>
        <input
          name="groom"
          onChange={(e) => {
            handleDataSubmission(e);
          }}
          type="text"
          value={groom}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />

        <label>Location / Venue</label>
        <input
          name="location"
          onChange={(e) => {
            handleDataSubmission(e);
          }}
          type="text"
          value={location}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />

        <label>Date</label>
        <input
          name="date"
          onChange={(e) => {
            handleDataSubmission(e);
          }}
          type="date"
          value={date}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />
        <label>Contacts</label>
        <input
          name="contact"
          onChange={(e) => {
            handleDataSubmission(e);
          }}
          type="text"
          value={contact}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />

        <button
          disabled={!enable}
          onClick={() =>
            nextPage(() => {
              return {
                ...defaultView,
                more: true,
                text: true,
              };
            })
          }
          className={`py-4 w-28 rounded-md my-2 text-white ${
            enable
              ? "bg-green-800 hover:bg-green-500 hover:text-black"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomizeCard1;
