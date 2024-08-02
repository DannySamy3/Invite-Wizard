import React from "react";

interface CardDetailsProps {
  data: any; // Define a more specific type if possible

  selection: {
    firstName: string;
    lastName: string;
    price: string;
    mobileNumber: string;
  };
  userData: any;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  data,
  handleGuestInput,
  selection,
  userData,
}) => {
  const handleSelection = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;

    handleGuestInput({
      ...selection,
      [name]: value,
    });
  };
  const handleSubmission = (e: any) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleSubmission(e)}
      className="    font-montserrat font-semibold text-gray-600 flex flex-col relative rounded-lg"
    >
      <section className=" flex flex-col gap-2 p-6      ">
        <label className=" ">First Name</label>
        <input
          required
          onChange={(e) => handleSelection(e)}
          value={selection.firstName}
          type="text"
          className=" rounded-md h-12 px-2 py-1 text-sm outline-none text-gray-600 leading-8"
        />
        <label className=" ">Last Name</label>
        <input
          required
          onChange={(e) => handleSelection(e)}
          value={selection.lastName}
          type="text"
          className=" rounded-md h-12 px-2 py-1 text-sm outline-none text-gray-600 leading-8"
        />
        <label className=" ">Mobile Number</label>
        <input
          required
          onChange={(e) => handleSelection(e)}
          type="text"
          value={selection.mobileNumber}
          className=" rounded-md h-12 px-2 py-1 mb-4 text-sm outline-none text-gray-600 leading-8"
        />
        <select
          name="plan"
          onChange={(e) => handleSelection(e)}
          className=" h-12 rounded-md outline-none px-2 py-1"
        >
          <option> Select Plan</option>
          <option value="singlePrice">Single</option>
          <option value="singlePrice">Double</option>
          <option value="familyPrice">Family</option>
        </select>

        <label
          className={`${
            selection.price
              ? "text-xl rounded-md  text-red-600 font-rubik my-4 text-center  bg-green-400 h-12 px-2 py-2  top-48`"
              : "hidden"
          } `}
        >
          {`Price: ${userData[selection.price] ?? ""}/=`}
        </label>
      </section>

      <button className=" bg-red-900 py-4 px-10 rounded-md   mx-6 mt-1  text-white hover:bg-green-600 hover:text-black ">
        Process Card
      </button>
    </form>
  );
};

export default CardDetails;
