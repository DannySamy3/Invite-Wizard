import React from "react";

import LeftNavigation from "../LeftNavigation/LeftNavigation";

const InnerPage = () => {
  return (
    <div>
      <nav className=" w-full h-fit bg-gray-200">
        <LeftNavigation />
      </nav>
    </div>
  );
};

export default InnerPage;
