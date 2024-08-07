"use client";
import React, { useState } from "react";

interface GuestData {
  guest_id: string;
  first_name: string;
  last_name: string;
  mobile_number: string;
  plan: string;
  inviter_id: string;
  status: "Paid" | "Not Paid";
}

interface ShowDataBaseProps {
  data: any;
  changeUser: any;
}

import { editGuestStatus } from "@/Utils/guestController";
const ShowDataBase: React.FC<ShowDataBaseProps> = ({ data, changeUser }) => {
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

      handlePageData((prev: any) => {
        // Replace existing guest data or add updated guest data
        const updatedPageData = prev.map((item: any) =>
          item.guest_id === response.guest_id ? response : item
        );
        return updatedPageData;
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(pageData);

  return (
    <div className="w-full mx-auto flex flex-col bg-gradient-to-tr from-slate-600 font-montserrat   h-screen  gap-0 outline-none">
      <header className=" mt-7  w-full decoration-slate-400 text-4xl text-center text-stone-600 font-playfair">
        INVITED GUEST
      </header>
      <section className="w-11/12 mt-10 bg-gray-50 p-6 h-5/6 mx-auto shadow-sm rounded-md overflow-y-auto">
        <article className=" grid grid-cols-6 p-4 font-semibold text-xl rounded-md  bg-gradient-radial from-slate-400">
          <label>S/N</label>
          <label>Name</label>
          <label>Last Name</label>
          <label> Phone Number</label>
          <label>Plan</label>
          <label>Status</label>
        </article>

        {pageData?.map((result: any, i: number) => {
          return (
            <div
              key={i}
              className="  grid grid-cols-6 px-5 my-5 hover:bg-gray-200  py-2 rounded-md  text-lg"
            >
              <p className="">{`${result.guest_id ? i + 1 : ""}`}</p>
              <p className="text-start"> {`${result?.first_name ?? ""}`}</p>
              <p> {`${result.last_name ?? ""}`}</p>
              <p> {result.mobile_number}</p>
              <p className=""> {`${result.plan ?? ""}`}</p>
              <button
                onClick={() => handleChangeUser(result)}
                className={` ${
                  result.status === "Not Paid"
                    ? " hover:bg-red-600"
                    : " hover:bg-green-600"
                } hover:rounded-md hover:py-2 hover:px-4 w-fit hover:text-white`}
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
