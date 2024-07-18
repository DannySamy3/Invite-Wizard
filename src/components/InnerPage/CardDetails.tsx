import React from 'react'

const CardDetails = () => {
  return (
    <div className="    font-montserrat font-semibold text-gray-600 flex flex-col      rounded-lg">
    <section className=" flex flex-col gap-4 p-6    ">
      <select className=" h-12 rounded-md outline-none px-2 py-1">
        <option> Select Plan</option>
        <option>Sigle</option>
        <option>Double</option>
        <option>Family</option>
        <option>Relative</option>
      </select>
      <select className=" h-12 rounded-md outline-none px-2 py-1">
        <option >Price</option>
        
      </select>

      {/* <label>Header Text</label>
      <textarea className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8" /> */}

      {/* <label>Body Text</label>
      <textarea className=" rounded-md h-32 text-sm outline-none text-gray-600 leading-8" /> */}
      <label>How Many Cards?</label>
      <input type='number' className=" rounded-md h-12 text-sm outline-none text-gray-600 leading-8" />
    </section>

    <button className=" bg-red-900 py-4 px-10 rounded-md   mx-6 my-2 text-white hover:bg-green-600 hover:text-black ">Process Card</button>
  </div>
  )
}

export default CardDetails
