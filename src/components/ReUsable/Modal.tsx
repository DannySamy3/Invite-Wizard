import React from "react";
import Router from "next/navigation";
import { useRouter } from "next/navigation";

interface props {
  name: string;
  text: string;
}

const Modal: React.FC<props> = ({ name, text }) => {
  const route = useRouter();

  const moveToHomePage = () => {
    route.push("../../");
  };
  return (
    <div className="fixed h-screen inset-0 z-10 flex items-center justify-center font-montserrat">
      <div className="absolute inset-0 bg-black opacity-95 "></div>
      <dialog
        className=" mx-auto  w-1/4 h-1/4  bg-gradient-to-tr from-slate-500   flex flex-col items-center justify-center gap-1 rounded-2xl font-medium font-roboto p-4 border-1 border-base-200 h-224 shadow-2xl z-20"
        open
      >
        <p className=" text-center text-xl font-semibold text-green-900 ">
          {text}
        </p>

        <button
          onClick={moveToHomePage}
          className=" rounded-lg text-lg bg-blue-500 py-4 px-10 mt-4"
        >
          {name}
        </button>
      </dialog>
    </div>
  );
};

export default Modal;
