import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import FirstCard from "../CardTemplates/FirstCard";

const PreviewUserCard = ({ cardInput, preview, view, qrCode, cardData }) => {
  return (
    <div className=" ">
      <div className="absolute inset-0 bg-black opacity-75 "></div>
      <dialog
        className=" mx-auto mt-14   w-9/12 h-5/6  bg-gradient-to-tr from-stone-600   flex flex-col items-center justify-center gap-1 rounded-2xl font-medium font-roboto p-4 border-1 border-base-200 h-224 shadow-2xl z-20"
        open
      >
        <PDFViewer className=" w-11/12 h-full rounded-xl my-4">
          <FirstCard
            cardInput={cardInput}
            preview={preview}
            qrCode={qrCode}
            guestCardData={cardData}
          />
        </PDFViewer>

        <button
          onClick={() => {
            view(false);
          }}
          className=" py-3 px-12 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Close
        </button>
      </dialog>
    </div>
  );
};

export default PreviewUserCard;
