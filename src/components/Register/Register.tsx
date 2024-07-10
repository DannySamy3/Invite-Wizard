import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <div className=" h-screen overflow-y-hidden bg-gradient-to-tl from-gray-600  ">
      <header className=" mt-6 mb-6">
        <h1 className=" text-center font-montserrat text-5xl ">
          Create Account
        </h1>
      </header>
      <article className=" grid bg-white   font-montserrat py-9 px-14 shadow-lg gap-y-5 text-normal rounded-xl h-86%  mt-5 w-9/12 mx-auto">
        <label>First Name</label>
        <input
          className=" border placeholder:text-gray-400  rounded-md  p-2 "
          type="text"
          placeholder="Enter First Name"
          required
        />
        <label>Last Name</label>
        <input
          className=" border border-s rounded-md p-2 border-gray-200 placeholder:text-gray-400    bg-white"
          type="text"
          placeholder="Enter Last Name"
          required
        />
        <label>Gender</label>
        <select className=" border border-s rounded-md p-2 border-gray-200     bg-white">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label>Country</label>
        <select className=" border border-s rounded-md p-2 border-gray-200     bg-white">
          <option>Select Country</option>
          <option>Country</option>
        </select>

        <label>Email</label>
        <input
          className=" border border-s rounded-md p-2 border-gray-200 placeholder:text-gray-400   bg-white"
          type="email"
          placeholder="Enter Email"
          required
        />

        <label>Phone</label>
        <div className=" flex gap-2">
          <select className=" border border-s rounded-md p-2 border-gray-200     bg-white">
            <option>+1</option>
            <option></option>
          </select>
          <input
            className=" border border-s rounded-md p-2 placeholder:text-gray-400 border-gray-200   bg-white w-full"
            type="text"
            required
            placeholder="Phone Number"
          />
        </div>

        <div className=" flex gap-4 mt-2 ">
          <Link
            href="./../"
            className=" bg-red-500 py-3 px-8 rounded-xl text-slate-50 "
          >
            Cancel
          </Link>
          <button
            className=" bg-green-500 p-3 rounded-xl py-3 px-8 text-slate-50 "
            type="submit"
          >
            Register
          </button>
        </div>
      </article>
    </div>
  );
};

export default Register;
