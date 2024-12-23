import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#EAF2EA] h-52 w-full flex flex-col justify-center items-center space-y-4">
      <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 text-center">
        Find Expert Doctors For An In-Clinic Session Here
      </h1>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white w-full md:w-auto">
          <FaMapMarkerAlt className="text-green-500 mr-2" />
          <select className="outline-none bg-transparent text-gray-600 w-full md:w-auto">
            <option className="text-gray-600">Select Location</option>
            <option>Location 1</option>
            <option>Location 2</option>
          </select>
        </div>
        <div className="relative w-96">
          <input
            type="text"
            placeholder="eg. Doctor, specialisation, clinic name"
            className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none bg-white text-gray-600 pr-10"
          />
          <FaArrowRight className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
