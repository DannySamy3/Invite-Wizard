import React from "react";
import { useState } from "react";

interface CustomizeCard1Props {
  handleSave: (e: React.FormEvent<HTMLFormElement>) => void;
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
  handleSave,
  handleDataSubmission,
  tempData,
  nextPage,
  defaultView,
}) => {
  return (
    <div className="   font-montserrat font-semibold text-gray-500    rounded-lg">
      <form
        onSubmit={(e) => handleSave(e)}
        className=" flex flex-col gap-6p px-6 py-2    "
      >
        <label>Header Text</label>
        <input
          type="text"
          name="headerText"
          value={tempData.headerText}
          onChange={(e) => handleDataSubmission(e)}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1 "
          required
        />

        <label>Salutation</label>
        <input
          name="salutation"
          onChange={(e) => handleDataSubmission(e)}
          type="text"
          value={tempData.salutation}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />

        <label>Bride's Name </label>
        <input
          name="bride"
          onChange={(e) => handleDataSubmission(e)}
          type="text"
          value={tempData.bride}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />

        <label>Groom's Name</label>
        <input
          name="groom"
          onChange={(e) => handleDataSubmission(e)}
          type="text"
          value={tempData.groom}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />

        <label>Location / Venue</label>
        <input
          name="location"
          onChange={(e) => handleDataSubmission(e)}
          type="text"
          value={tempData.location}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />

        <label>Date</label>
        <input
          name="date"
          onChange={(e) => handleDataSubmission(e)}
          type="date"
          value={tempData.date}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />
        <label>Contacts</label>
        <input
          name="contact"
          onChange={(e) => handleDataSubmission(e)}
          type="text"
          value={tempData.contact}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />

        <button
          onClick={() =>
            nextPage(() => {
              return {
                ...defaultView,
                more: true,
                text: true,
              };
            })
          }
          className=" bg-green-800 py-4 w-28 rounded-md    my-2 text-white hover:bg-green-500 hover:text-black "
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default CustomizeCard1;
