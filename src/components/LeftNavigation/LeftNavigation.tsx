"use client";
import React from "react";
import { useEffect, useState } from "react";
import { logout } from "@/Utils/userController";

interface LeftNavigationProps {
  showDb: (show: boolean) => void;
  handleData: (id: string) => void;
  id: string;
  dbShow: boolean;
  shareType: any;
}

const LeftNavigation: React.FC<LeftNavigationProps> = ({
  showDb,
  handleData,
  id,
  dbShow,
  shareType,
}) => {
  useEffect(() => {
    handleData(id);
  }, [id, dbShow]);

  const handleLogOut = async () => {
    try {
      const response = await logout();
      if (response?.statusText === "OK") {
        window.location.href = "../";
        console.log("done");
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="drawer w-0  relative">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className=" drawer-button absolute top-2 left-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" w-8 h-8 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <ul className="menu bg-base-200   min-h-full w-80 p-4 font-montserrat text-black text-sm font-normal">
          <li className=" hover:font-bold text-lg mb-2">
            <button onClick={() => showDb(false)}>Home</button>
          </li>
          <li
            className={` hover:font-bold text-lg ${
              shareType === "invited" ? "hidden" : ""
            } `}
          >
            <button onClick={() => showDb(true)}> Guests</button>
          </li>
          <li
            className={` hover:font-bold text-lg ${
              shareType === "invited" ? "hidden" : ""
            } `}
          >
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavigation;
