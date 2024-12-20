import { useState } from "react";
import {
  FaVideo,
  FaClinicMedical,
  FaCommentAlt,
  FaCalendarAlt,
} from "react-icons/fa"; // React Icons

const Right = () => {
  const [selectedSession, setSelectedSession] = useState("video");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className=" p-6 border rounded-xl">
      {/* Appointment Fee */}
      <div className="flex justify-between items-center mb-6 border rounded-xl px-6 py-3">
        <h2 className="text-lg font-semibold">Appointment Fee</h2>
        <span className="text-xl font-semibold text-green-600">₹699.00</span>
      </div>

      {/* Session Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-14">
          <span>Select your mode of session</span>{" "}
          <hr className="w-2/4 border-gray-300" />
        </h3>
        <div className="flex gap-4 mt-6">
          <button
            className={`flex items-center gap-2 p-3 border rounded-lg w-full text-sm ${
              selectedSession === "in-clinic"
                ? "bg-green-100 text-green-700 border-green-700"
                : "text-gray-600 border-gray-300"
            }`}
            onClick={() => setSelectedSession("in-clinic")}
          >
            <FaClinicMedical />
            In-Clinic <span className="ml-auto">45 Mins</span>
          </button>
          <button
            className={`flex items-center gap-2 p-3 border rounded-lg w-full text-sm ${
              selectedSession === "video"
                ? "bg-green-100 text-green-700 border-green-700"
                : "text-gray-600 border-gray-300"
            }`}
            onClick={() => setSelectedSession("video")}
          >
            <FaVideo />
            Video <span className="ml-auto">45 Mins</span>
          </button>
          <button
            className={`flex items-center gap-2 p-3 border rounded-lg w-full text-sm ${
              selectedSession === "chat"
                ? "bg-green-100 text-green-700 border-green-700"
                : "text-gray-600 border-gray-300"
            }`}
            onClick={() => setSelectedSession("chat")}
          >
            <FaCommentAlt />
            Chat <span className="ml-auto">10 Mins</span>
          </button>
        </div>
      </div>

      {/* Time Slot Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-8">Pick a time slot <hr className="w-96 border-gray-300" /><FaCalendarAlt className="text-gray-500 " /></h3>
        <div className="flex items-center gap-3 mb-6">
          <FaCalendarAlt className="text-gray-500" />
          <div className="flex gap-2 overflow-x-auto">
            <button className="p-2 border rounded-lg bg-green-100 text-green-700">
              Mon, 10 Oct <span className="text-xs">(10 slots)</span>
            </button>
            <button className="p-2 border rounded-lg text-red-500 border-red-500">
              Tue, 11 Oct <span className="text-xs">(2 slots)</span>
            </button>
            <button className="p-2 border rounded-lg text-yellow-500 border-yellow-500">
              Wed, 12 Oct <span className="text-xs">(5 slots)</span>
            </button>
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h4 className="font-semibold mb-4">Morning</h4>
          <div className="flex gap-3 mb-4">
            {[
              "09:00 AM",
              "09:30 AM",
              "10:00 AM",
              "10:15 AM",
              "10:45 AM",
              "11:00 AM",
            ].map((time, index) => (
              <button
                key={index}
                className={`p-2 border rounded-lg ${
                  selectedTime === time
                    ? "bg-green-100 text-green-700 border-green-700"
                    : "text-gray-600 border-gray-300"
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
          <h4 className="font-semibold mb-3">Evening</h4>
          <div className="flex gap-3">
            {["04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM", "05:15 PM"].map(
              (time, index) => (
                <button
                  key={index}
                  className={`p-2 border rounded-lg ${
                    selectedTime === time
                      ? "bg-green-100 text-green-700 border-green-700"
                      : "text-gray-600 border-gray-300"
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Make Appointment */}
      <button className="w-full mt-8 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600">
        Make An Appointment
      </button>
    </div>
  );
};

export default Right;
