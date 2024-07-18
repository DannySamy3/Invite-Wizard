import React from "react";

const CardText = () => {
  return (
    <div className="   font-montserrat font-semibold text-gray-500    rounded-lg">
      <section className=" flex flex-col gap-3 p-6    ">
        <select className=" h-10 rounded-md outline-none px-2 py-1">
          <option> Header Font</option>
          <option>Monterrasat</option>
          <option>Vidaloka</option>
          <option>Play Fair</option>
        </select>
        <select className=" h-10 rounded-md outline-none px-2 py-1">
          <option > Body font</option>
          <option>Roboto</option>
          <option>Monterrasat</option>
          <option>Play Fair</option>
        </select>

        <label>Header Text</label>
        <textarea className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1" />

        <label>Location / Venue</label>
        <input type="text" className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1" />
        <label>Contacts</label>
        <input type="text" className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1" />
        <label>Description</label>
        <textarea className=" rounded-md h-24 text-sm outline-none text-gray-600 leading-8 focus: px-2 py-1" />
      </section>

      <button className=" bg-green-800 py-4 px-10 rounded-md mx-6 my-2 text-white hover:bg-green-500 hover:text-black ">Save</button>
    </div>
  );
};

export default CardText;
