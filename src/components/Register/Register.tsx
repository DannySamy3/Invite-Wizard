"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { countryInfo } from "@/Utils/countryInfo";
import { createUser } from "@/Utils/userController";
import Modal from "../ReUsable/Modal";

const Register = () => {
  const initials = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  };
  const [inputData, setInputData] = useState(initials);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = (e: any, data: any) => {
    e.preventDefault();

    createUser(data);
    setInputData(initials);
    setSubmitted(true);
  };

  const { first_name, last_name, phone_number, email, password } = inputData;

  return (
    <form className=" h-screen overflow-y-hidden bg-gradient-to-tl from-gray-600  ">
      {submitted && <Modal />}
      <header className=" mt-6 mb-6">
        <h1 className=" text-center font-montserrat text-5xl ">
          Create Account
        </h1>
      </header>
      <article className=" grid bg-white   font-montserrat py-7 px-14 shadow-lg gap-y-3 text-normal rounded-xl h-86%  mt-5 w-9/12 mx-auto">
        <label>First Name</label>
        <input
          name="first_name"
          onChange={(e) => handleChange(e)}
          value={first_name}
          className=" border placeholder:text-gray-400  rounded-md  p-2 "
          type="text"
          placeholder="Enter First Name"
          required
        />
        <label>Last Name</label>
        <input
          name="last_name"
          value={last_name}
          onChange={(e) => handleChange(e)}
          className=" border border-s rounded-md p-2 border-gray-200 placeholder:text-gray-400    bg-white"
          type="text"
          placeholder="Enter Last Name"
          required
        />
        <label>Gender</label>
        <select
          name="gender"
          onChange={(e) => handleChange(e)}
          className=" border border-s rounded-md p-2 border-gray-200     bg-white"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label>Country</label>
        <select
          name="country"
          onChange={(e) => handleChange(e)}
          className=" border border-s rounded-md p-2 border-gray-200     bg-white"
        >
          <option>Select Country</option>
          {countryInfo.map((country, index) => {
            return (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            );
          })}
        </select>

        <label>Email</label>
        <input
          value={email}
          name="email"
          onChange={(e) => handleChange(e)}
          className=" border border-s rounded-md p-2 border-gray-200 placeholder:text-gray-400   bg-white"
          type="email"
          placeholder="Enter Email"
          required
        />
        <label>Password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
          className=" border border-s rounded-md p-2 border-gray-200 placeholder:text-gray-400   bg-white"
          type="password"
          placeholder="Enter Password"
          required
        />

        <label>Phone</label>
        <div className=" flex gap-2">
          {/* <select className=" border border-s rounded-md p-2 border-gray-200     bg-white">
            <option value={"+1"}>+1</option>
            {countryInfo.map((country)=>{
              return <option></option>
            })}
          </select> */}
          <input
            name="phone_number"
            onChange={(e) => handleChange(e)}
            value={phone_number}
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
            onClick={(e) => submit(e, inputData)}
            className=" bg-green-500 p-3 rounded-xl py-3 px-8 text-slate-50 "
            type="submit"
          >
            Register
          </button>
        </div>
      </article>
    </form>
  );
};

export default Register;
