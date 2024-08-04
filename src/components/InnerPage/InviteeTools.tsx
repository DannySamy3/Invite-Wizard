import React from "react";
import Button from "../ReUsable/Button";

const InviteeTools = ({ domain, handleCard, selectedElement }) => {
  return (
    <div>
      {domain === "invitee" && (
        <article className=" flex flex-col gap-3   py-3 px-1">
          <button className=" font-montserrat rounded-md text-lg p-2 text-start hover:bg-blue-300 ">
            Select Template
          </button>
          <Button
            identifier={"text"}
            method={handleCard}
            selectedElement={selectedElement.text}
          >
            Customize Text
          </Button>

          {/* <Button
                  identifier={"more"}
                  method={handleCard}
                  selectedElement={selectedElement.more}
                >
                  More Details
                </Button> */}
          {/* <Button
                  identifier={"details"}
                  method={handleCard}
                  selectedElement={selectedElement.details}
                >
                  Add Card Details
                </Button> */}

          <Button
            identifier={"view"}
            method={handleCard}
            selectedElement={selectedElement.view}
          >
            View Card
          </Button>
        </article>
      )}

      {domain === "invited" && (
        <div className=" flex flex-col gap-4 p-2 mt-1">
          <Button
            identifier={"details"}
            method={handleCard}
            selectedElement={selectedElement.details}
          >
            Add Card Details
          </Button>
          <Button
            // identifier={"details"}
            method={handleCard}
            selectedElement={""}
          >
            View Card
          </Button>
        </div>
      )}
    </div>
  );
};

export default InviteeTools;
