import { AiFillStar } from "react-icons/ai";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="bg-[#FFFBF2] rounded-xl rounded-b-none overflow-hidden h-56 border" >
      {/* Background */}
      <div className="h-28 rounded-t-lg">
        <img
          src="https://i.postimg.cc/3wK55f3m/image-160.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative -mt-16 flex flex-wrap items-center space-x-6 p-6">
        {/* Profile Picture */}
        <img
          src="https://i.postimg.cc/L5qFQq2W/Ellipse-727.png"
          alt="Dr. Bruce Willis"
          className="w-32 h-32 rounded-full border-white shadow-md object-cover"
        />

        {/* Doctor Info */}
        <div className="flex-1 mt-10">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg sm:text-2xl font-bold text-[#205D3A]">
              Dr. Bruce Willis
            </h2>
            <span className="text-blue-500 text-xl">
              <IoCheckmarkDoneCircle />
            </span>
          </div>
          <p className="text-sm sm:text-base text-gray-500">Gynecologist</p>
          <div className="flex items-center space-x-1 text-yellow-500 mt-1 text-xs">
            <span className="font-semibold text-gray-500">4.2</span>
            <span className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </div>
        </div>

        {/* Follow Stats */}
        <div className="flex-1 relative flex justify-between sm:justify-start sm:space-x-16 text-center mt-12  ">
          <div>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold">Followers</p>
            <p className="font-bold text-base sm:text-lg text-gray-600">850</p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold">Following</p>
            <p className="font-bold text-base sm:text-lg text-gray-600">18K</p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold">Posts</p>
            <p className="font-bold text-base sm:text-lg text-gray-600">250</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-14 flex-1 ">
          <button className="bg-[#205D3A] text-white px-4 sm:px-10 py-3 ml-20 rounded-lg hover:bg-[#1B4B31]">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
