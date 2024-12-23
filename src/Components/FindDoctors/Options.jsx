import { MdOutlineCancel } from "react-icons/md";

const Options = () => {
  return (
    <div className="mt-5">
      <div className="flex gap-12 flex-wrap items-center justify-center ml-0 lg:ml-28 m-0 lg:mr-28">
        <select className="outline-none bg-[#F3F3F3] text-gray-600 w-40 px-6 py-2 border border-gray-300 rounded-md">
          <option className="text-gray-600">Expertise</option>
          <option>Location 1</option>
          <option>Location 2</option>
        </select>
        <select className="outline-none bg-[#F3F3F3] text-gray-600 w-40 px-6 py-2 border border-gray-300 rounded-md">
          <option className="text-gray-600">Gender</option>
          <option>Location 1</option>
          <option>Location 2</option>
        </select>
        <select className="outline-none bg-[#F3F3F3] text-gray-600 w-40 px-6 py-2 border border-gray-300 rounded-md">
          <option className="text-gray-600">Fees</option>
          <option>Location 1</option>
          <option>Location 2</option>
        </select>
        <select className="outline-none bg-[#F3F3F3] text-gray-600 w-40 px-6 py-2 border border-gray-300 rounded-md">
          <option className="text-gray-600">Languages</option>
          <option>Location 1</option>
          <option>Location 2</option>
        </select>
        <select className="outline-none bg-[#DCEEDC] text-[#3A643B]  w-40 px-6 py-2 border border-gray-300 rounded-md">
          <option className="text-gray-600">All filters</option>
          <option>Location 1</option>
          <option>Location 2</option>
        </select>
      </div>
      <hr className="mt-5 border-gray-300 " />

      <div className="flex flex-wrap p-3 lg:p-0 mt-10 gap-5 justify-start lg:justify-end pr-0 lg:pr-28">
        <div className="px-4 py-2  rounded-2xl bg-[#DCEEDC] flex items-center justify-center gap-2">
          {" "}
          <p>Hair care </p>{" "}
          <span className="text-gray-400 ">
            <MdOutlineCancel />
          </span>
        </div>
        <div className="px-4 py-2  rounded-2xl bg-[#DCEEDC] flex items-center justify-center gap-2">
          {" "}
          <p>Female </p>{" "}
          <span className="text-gray-400 ">
            <MdOutlineCancel />
          </span>
        </div>
        <div className="px-4 py-2  rounded-2xl bg-[#DCEEDC] flex items-center justify-center gap-2">
          {" "}
          <p>Hindi </p>{" "}
          <span className="text-gray-400 ">
            <MdOutlineCancel />
          </span>
        </div>
        <div className="px-4 py-2  rounded-2xl bg-[#DCEEDC] flex items-center justify-center gap-2">
          {" "}
          <p>Rs.0-Rs.500 </p>{" "}
          <span className="text-gray-400 ">
            <MdOutlineCancel />
          </span>
        </div>
        <div className="px-4 py-2  rounded-2xl bg-[#DCEEDC] flex items-center justify-center gap-2">
          {" "}
          <p>Hair care </p>{" "}
          <span className="text-gray-400 ">
            <MdOutlineCancel />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Options;
