"use client";
import React from "react";
import Button from "../ReUsable/Button";
import ShareButton from "../ShareButton/ShareButton";

interface SelectedElement {
  text?: string;
  more?: string;
  details?: string;
  view?: string;
}

// Define the interface for the props of InviteeTools
interface InviteeToolsProps {
  domain: any;
  handleCard: any;
  selectedElement: any;
}

const InviteeTools: React.FC<InviteeToolsProps> = ({
  domain,
  handleCard,
  selectedElement,
}) => {
  return (
    <div>
      {domain === "user" && (
        <article className=" flex flex-col gap-3   py-3 px-1">
          <Button
            identifier={"text"}
            method={handleCard}
            selectedElement={selectedElement.text}
          >
            Customize Text
          </Button>

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

          {/* <Button
            identifier={"share"}
            method={handleCard}
            selectedElement={selectedElement.more}
          >
            Share Card
          </Button> */}
        </article>
      )}

      {domain === "invited"  && (
        <div className=" flex flex-col gap-4 p-2 mt-1">
          <Button
            identifier={"details"}
            method={handleCard}
            selectedElement={selectedElement.details}
          >
            Add Card Details
          </Button>
          {/* <Button
            // identifier={"details"}
            method={handleCard}
            selectedElement={""}
          >
            View Card
          </Button> */}
        </div>
      )}
    </div>
  );
};

export default InviteeTools;
