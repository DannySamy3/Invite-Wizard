"use client";
import React from "react";
import { useEffect } from "react";

const LeftNavigation = ({ showDb, handleData, id, dbShow }) => {
  useEffect(() => {
    handleData(id);
  }, [id, dbShow]);

  return (
    <div className="drawer w-0  relative">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
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
            className=" w-8 h-8"
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
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200  min-h-full w-80 p-4 font-montserrat text-black text-sm font-normal">
          {/* Sidebar content here */}
          <li className=" hover:font-bold text-lg mb-2">
            <button onClick={() => showDb(false)}>Home</button>
          </li>
          <li className=" hover:font-bold text-lg ">
            <button onClick={() => showDb(true)}> Guests</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavigation;
