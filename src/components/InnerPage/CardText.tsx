import React from "react";
import { useState } from "react";
const CardText = ({ state, closeElement, initialData }) => {
  const [tempData, setTempData] = useState(initialData);

  const handleDataSubmission = (e) => {
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

  const handleSave = (e) => {
    e.preventDefault();
    setTempData(initialData);

    closeElement((prev) => {
      return {
        ...prev,
        text: false,
      };
    });
  };

  return (
    <div className="   font-montserrat font-semibold text-gray-500    rounded-lg">
      <form
        onSubmit={(e) => handleSave(e)}
        className=" flex flex-col gap-6p p-6    "
      >
        {/* <select
          name="headerFont"
          onChange={(e) => handleDataSubmission(e)}
          className=" h-10 rounded-md outline-none px-2 py-1"
          required
        >
          <option value=""> Header Font</option>
          <option value="Monterrasat">Monterrasat</option>
          <option value="Vidaloka">Vidaloka</option>
          <option value="Play Fair">Play Fair</option>
        </select> */}
        <select
          name="bodyFont"
          onChange={(e) => handleDataSubmission(e)}
          className=" h-10 rounded-md outline-none px-2 py-1"
          required
        >
          <option value=""> Select font</option>
          <option value="Roboto">Roboto</option>
          <option value="Monterrasat">Monterrasat</option>
          <option value="Play Fair">Play Fair</option>
        </select>

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
        <label>Description</label>
        <textarea
          name="description"
          onChange={(e) => handleDataSubmission(e)}
          value={tempData.description}
          className=" rounded-md h-16 text-sm outline-none text-gray-600 leading-8 focus: px-2 py-1"
        />
        <input
          type="submit"
          className=" bg-green-800 py-4 w-28 rounded-md    my-2 text-white hover:bg-green-500 hover:text-black "
        />
      </form>
    </div>
  );
};

export default CardText;
