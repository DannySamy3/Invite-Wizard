import React from "react";

interface CustomizeCard2Props {
  handleSave: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDataSubmission: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  tempData: {
    headerText: string;
    salutation: string;
    bride: string;
    groom: string;
    location: string;
    date: string;
    contact: string;
    description: string;
  };
  defaultView: any;
  previousPage: (callback: (prev: any) => any) => void;
}

const CustomizeCard2: React.FC<CustomizeCard2Props> = ({
  handleDataSubmission,
  tempData,
  handleSave,
  defaultView,
  previousPage,
}) => {
  return (
    <div className="   font-montserrat font-semibold text-gray-500 rounded-lg">
      <form
        onSubmit={(e) => handleSave(e)}
        className=" flex flex-col gap-6p px-6 py-4    "
      >
        <label>Ending Remark</label>
        <input
          name="remarks"
          onChange={(e) => handleDataSubmission(e)}
          type="text"
          value={tempData.location}
          className=" rounded-md h-10 text-sm outline-none text-gray-600 leading-8 px-2 py-1"
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          onChange={(e) => handleDataSubmission(e)}
          value={tempData.description}
          className=" rounded-md h-20 text-sm outline-none text-gray-600 leading-8 focus: px-2 py-1"
        />

        <div className=" flex gap-3 mt-2">
          <button
            onClick={() =>
              previousPage(() => {
                return {
                  ...defaultView,
                  more: false,
                  text: true,
                };
              })
            }
            className=" bg-red-900 py-4 w-28 rounded-md    my-2 text-white hover:bg-green-500 hover:text-black "
          >
            Back
          </button>

          <input
            type="submit"
            className=" bg-green-800 py-4 w-28 rounded-md my-2 text-white hover:bg-green-600 hover:text-black "
          />
        </div>
      </form>
    </div>
  );
};

export default CustomizeCard2;