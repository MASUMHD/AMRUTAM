import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Right = () => {

  return (
    <main className=" p-6 border rounded-xl">
      <div className="flex justify-between items-center mb-6 border rounded-xl px-6 py-3">
        <h2 className="text-lg font-semibold">Appointment Fee</h2>
        <span className="text-xl font-semibold text-green-600">₹699.00</span>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-14">
          <span>Select your mode of session</span>{" "}
          <hr className="w-2/4 border-gray-300" />
        </h3>
        <div className="flex gap-4 mt-6">
          <button className="items-center gap-2 p-3 border rounded-lg w-full text-sm">
            <p className="font-semibold mb-1">In-Clinic</p>{" "}
            <p className="ml-auto text-gray-500">45 Mins</p>
          </button>
          <button className="items-center gap-2 p-3 border rounded-lg w-full text-sm bg-green-100 text-green-700 border-green-700">
            <p className="font-semibold mb-1">Video</p>{" "}
            <p className="ml-auto text-gray-500">45 Mins</p>
          </button>
          <button className="items-center gap-2 p-3 border rounded-lg w-full text-sm ">
            <p className="font-semibold mb-1">Chat</p>{" "}
            <p className="ml-auto text-gray-500">45 Mins</p>
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center justify-between gap-8">
          Pick a time slot <hr className="w-80 border-gray-300" />
          <div className=" p-2 rounded-full border-2 ">
            <FaCalendarAlt className="text-gray-500 " />
          </div>
        </h3>

        <div className="h-28 flex items-center justify-center overflow-y-auto border rounded-2xl">
          <div className="flex items-center  gap-3 ">
            <div>
              <IoIosArrowDropleft className="text-gray-500 h-7 w-7" />
            </div>

            <div className="flex gap-2  ">
              <button className="p-2 border rounded-lg bg-green-100 text-green-700 w-60">
                Mon, 10 Oct <br /> <span className="text-xs">(10 slots)</span>
              </button>
              <button className="p-2 border rounded-lg text-red-500 border-red-500 w-1/2">
                Tue, 11 Oct <br /> <span className="text-xs">(2 slots)</span>
              </button>
              <button className="p-2 border rounded-lg text-yellow-500 border-yellow-500 w-1/2">
                Wed, 12 Oct <br /> <span className="text-xs">(5 slots)</span>
              </button>
            </div>

            <div>
              <IoIosArrowDropright className="text-gray-500 h-7 w-7" />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-3">Morning</h4>
          <div className="flex gap-3">
            <div className="flex h-16 w-32 p-4 border rounded-xl items-center justify-center text-gray-600 border-gray-300">
              <p>09:00 AM</p>
            </div>
            <div className="flex h-16 w-32 p-4 border rounded-xl items-center justify-center text-gray-600 border-gray-300">
              <p>09:30 AM</p>
            </div>
            <div className="flex h-16 w-32 p-4 border rounded-xl items-center justify-center text-gray-600 border-gray-300">
              <p>10:00 AM</p>
            </div>
            <div className="flex h-16 w-32 p-4 border rounded-xl items-center justify-center text-gray-600 border-gray-300">
              <p>10:15 AM</p>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="flex h-16 w-32 p-4 border rounded-xl items-center justify-center text-gray-600 border-gray-300">
              <p>10:45 AM</p>
            </div>
            <div className="flex h-16 w-32 p-4 border rounded-xl items-center justify-center text-gray-200 border-gray-600 bg-[#3A643B]">
              <p>11:00 AM</p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Evening</h4>
            <div className="flex gap-3">
              <div className="flex h-16 w-32 p-4 border rounded-xl items-center justify-center text-gray-600 border-gray-300">
                <p>09:00 AM</p>
              </div>
              <div className="flex h-16 w-32 p-4 border rounded-xl items-center justify-center text-gray-600 border-gray-300">
                <p>09:30 AM</p>
              </div>
              <div className="flex h-16 w-32 p-4 border rounded-xl items-center justify-center text-gray-600 border-gray-300">
                <p>10:00 AM</p>
              </div>
              <div className="flex h-16 w-32 p-4 border rounded-xl items-center justify-center text-gray-600 border-gray-300">
                <p>10:15 AM</p>
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <div className="flex h-16 w-32 p-4 border rounded-xl items-center justify-center text-gray-600 border-gray-300">
                <p>10:45 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full mt-8 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600">
        Make An Appointment
      </button>
    </main>
  );
};

export default Right;
