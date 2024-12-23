import { FaStar } from "react-icons/fa";
import { MdChat } from "react-icons/md";

const DoctorCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 mb-32 mt-7">
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="w-full max-w-sm p-6 pt-10 pb-8 bg-[#FFF7E2] rounded-xl shadow-md hover:shadow-lg"
        >
          <div className="text-center relative">
            <img
              src="https://i.postimg.cc/pXcN1yYx/09217e175d69b8cfd3da49cb2a8a6437.png"
              alt="Doctor"
              className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-sm object-cover"
            />
            <div className="flex items-center justify-center mt-2 text-yellow-500 absolute top-16 right-32 lg:right-36 bg-black p-1  rounded-xl">
              <FaStar />
              <span className="ml-1 font-medium text-sm">4.5</span>
            </div>
          </div>
          <h2 className="mt-4 text-xl font-bold text-center text-gray-800">
            Dr. Prerna Narang
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Male-Female Infertility
          </p>
          <p className="mt-1 text-center text-gray-600">
            7 years of Experience
          </p>
          <p className="mt-1 text-center text-gray-600 flex items-center justify-center gap-2">
            <MdChat className="text-gray-600 mt-1" />
            <span>Speaks: English, Hindi, Marathi</span>
          </p>
          <div className="flex justify-center gap-4 items-center mt-4">
            <div className="gap-2 text-center border border-gray-300 rounded-xl p-2">
              <span>Video Consultation</span> <br />
              <span className="font-medium text-gray-700">₹800</span>
            </div>
            <div className="text-center gap-2 border border-gray-300 rounded-xl p-2">
              <span>Chat Consultation</span> <br />
              <span className="font-medium text-gray-700">Free</span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <button className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">
              View Profile
            </button>
            <button className="w-full px-4 py-2 text-green-600 bg-white border border-green-600 rounded-lg hover:bg-green-100">
              Book a consultation
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorCard;
