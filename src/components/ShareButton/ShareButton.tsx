import React from "react";

interface ShareButtonProps {
  id: number;
  userType: any;
  display: any;
  handleCard: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedElement: {
    share: boolean;
  };
}

const ShareButton: React.FC<ShareButtonProps> = ({
  userType,
  display,
  handleCard,
  selectedElement,
  id,
}) => {
  const urlString = "invited";
  const baseUrl = "http://localhost:3001/innerHomePage";
  const shareUrl = `${baseUrl}?userType=${
    userType === `user` ? `${urlString.concat(` ${id}`)}` : "user"
  }&id=${id}`;

  const handleShare = (e: any) => {
    handleCard(e);
    if (navigator.share) {
      navigator
        .share({
          title: "Check this out!",
          text: `Here is a link for ${
            userType === "invited" ? "user" : "invited"
          }.`,
          url: shareUrl,
        })
        .then(() => console.log("Share was successful."))
        .catch((error) => console.error("Share failed:", error));
    } else {
      window.prompt("Copy this link and share:", shareUrl);
    }
  };
  let style = `${
    display === "invited" ? "hidden" : ""
  } font-montserrat  rounded-md   ml-1 text-lg p-2 text-start hover:bg-blue-300 outline-none hover:w-full`;
  return (
    <button
      name="share"
      className={
        selectedElement.share
          ? style.concat("bg-blue-300  font-semibold w-full")
          : style
      }
      onClick={(e) => handleShare(e)}
    >
      Share
    </button>
  );
};

export default ShareButton;
