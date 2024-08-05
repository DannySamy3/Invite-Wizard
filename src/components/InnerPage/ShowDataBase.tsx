"use client";
import React, { useState } from "react";

import { editGuestStatus } from "@/Utils/guestController";
const ShowDataBase = ({ data, changeUser }) => {
  const [pageData, handlePageData] = useState(data);
  const handleChangeUser = async (data: any) => {
    try {
      changeUser(data);

      //  handlePlanStatus((prev)=>{
      //   return{

      //   }
      //  })

      let newStatus = data.status === "Not Paid" ? "Paid" : "Not Paid";

      let sentData = {
        guest_id: data.guest_id,
        first_name: data.first_name,
        plan: data.plan,
        inviter_id: data.inviter_id,
        status: newStatus,
        mobile_number: data.mobile_number,
      };
      const response = await editGuestStatus(sentData);

      handlePageData((prev:any) => {
        // Replace existing guest data or add updated guest data
        const updatedPageData = prev.map((item:any) =>
          item.guest_id === response.guest_id ? response : item
        );
        return updatedPageData;
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-11/12 mx-auto bg-gray-200 font-montserrat   h-screen flex flex-row gap-0 outline-none">
      {/* <head>INVITED GUEST</head> */}
      <section className=" w-full mt-16 bg-gray-300 p-6 h-5/6 mx-auto shadow-sm rounded-md overflow-y-auto">
        <article className=" grid grid-cols-6 p-4 font-semibold text-xl  bg-gradient-radial from-slate-500">
          <label>S/N</label>
          <label>Name</label>
          <label>Last Name</label>
          <label> Phone Number</label>
          <label>Plan</label>
          <label>Status</label>
        </article>

        {pageData.map((result: any, i: number) => {
          return (
            <div
              key={i}
              className=" grid grid-cols-6 px-4 my-5  py-3 rounded-md  text-lg"
            >
              <p className="">{i + 1}</p>
              <p className="text-start"> {result.first_name}</p>
              <p> {result.last_name}</p>
              <p> {result.mobile_number}</p>
              <p> {result.plan.toUpperCase()}</p>
              <button
                onClick={() => handleChangeUser(result)}
                className={` ${
                  result.status === "Not Paid"
                    ? " hover:bg-red-600"
                    : " hover:bg-green-600"
                } hover:rounded-md hover:py-3 hover:text-white`}
              >
                {result.status}
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ShowDataBase;
