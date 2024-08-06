import React from "react";

interface CardDetailsProps {
  data: any;
  selection: {
    firstName: string;
    lastName: string;
    price: string;
    mobileNumber: string;
  };
  userData: any;
  handleGuestInput: (callback: (prev: any) => any) => void;
  createGuest: () => void;
  reset: any;
  closeSection: (callback: (prev: any) => any) => void;
  preview: any;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  handleGuestInput,
  selection,
  userData,
  createGuest,
  reset,
  closeSection,
  preview,
}) => {
  const handleSelection = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;

    handleGuestInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmission = (e: React.MouseEvent<HTMLButtonElement>) => {
    createGuest();
    handleGuestInput(reset);
    preview(true);
    closeSection((prev) => {
      return {
        ...prev,
        details: false,
      };
    });
  };

  return (
    <div className="font-montserrat font-semibold text-gray-600 flex flex-col relative rounded-lg">
      <section className="flex flex-col gap-2 p-6">
        <label>First Name</label>
        <input
          name="firstName"
          required
          onChange={(e) => handleSelection(e)}
          value={selection.firstName}
          type="text"
          className="rounded-md h-12 px-2 py-1 text-sm outline-none text-gray-600 leading-8"
        />
        <label>Last Name</label>
        <input
          name="lastName"
          required
          onChange={(e) => handleSelection(e)}
          value={selection.lastName}
          type="text"
          className="rounded-md h-12 px-2 py-1 text-sm outline-none text-gray-600 leading-8"
        />
        <label>Mobile Number</label>
        <input
          name="mobileNumber"
          required
          onChange={(e) => handleSelection(e)}
          type="text"
          value={selection.mobileNumber}
          className="rounded-md h-12 px-2 py-1 mb-4 text-sm outline-none text-gray-600 leading-8"
        />
        <select
          name="plan"
          onChange={(e) => handleSelection(e)}
          className="h-12 rounded-md outline-none px-2 py-1"
        >
          <option>Select Plan</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="family">Family</option>
        </select>

        <label
          className={`${
            selection.price
              ? "text-xl rounded-md text-red-600 font-rubik my-4 text-center bg-green-400 h-12 px-2 py-2 top-48"
              : "hidden"
          }`}
        >
          {`Price: ${userData[selection.price] ?? ""}/=`}
        </label>
      </section>

      <button
        onClick={(e) => handleSubmission(e)}
        className="bg-red-900 cursor-pointer py-4 px-10 rounded-md mx-6 mt-1 text-white hover:bg-green-600 hover:text-black"
      >
        Process
      </button>
    </div>
  );
};

export default CardDetails;
