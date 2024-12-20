import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

import { IoMdAdd } from "react-icons/io";

const AboutMe = () => {
  return (
    <div>
      <div className="border rounded-xl">
        <div className="flex justify-between items-center rounded-t-xl bg-[#F4F7EC] pt-3 pb-3 pl-10 pr-10">
          <h3 className="text-xl font-semibold text-[#313131]">
            A Little About Me
          </h3>
          <button className="px-5 py-1 text-[#5A5A5A] bg-gray-100 border-2 border-gray-300 rounded-md text-sm hover:bg-gray-200 flex items-center gap-1 font-semibold">
            Follow{" "}
            <span>
              <IoMdAdd className="w-4 h-4 font-semibold" />
            </span>
          </button>
        </div>

        <div className="pt-4 pb-3 pl-10 pr-10">
          <p className="mt-4 text-base text-[#33354880] font-semibold leading-relaxed">
            Hello, I am Dr. Bruce Willis, a Gynaecologist at Sanjivni Hospital
            Surat. I <br />
            love to work with all my hospital staff and senior doctors. I
            completed <br /> my graduation in Gynaecologist Medicine from the{" "}
            <span className="text-gray-600 font-semibold underline">
              Read More
            </span>
          </p>
          <hr className="mt-6 border-gray-300 border" />
          <div className="mt-6 flex items-center gap-8 ">
            <h4 className="text-lg font-semibold text-[#313131]">
              Language Spoken
            </h4>
            <div className="flex gap-5">
              <span className="px-5 py-1 bg-gray-100 rounded-full text-sm text-gray-600 font-semibold ">
                English
              </span>
              <span className="px-5 py-1 bg-gray-100 rounded-full text-sm text-gray-600 font-semibold ">
                Hindi
              </span>
              <span className="px-5 py-1 bg-gray-100 rounded-full text-sm text-gray-600 font-semibold ">
                Telugu
              </span>
            </div>
          </div>

          <div className="flex gap-4 mt-8 mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-300 bg-gray-100 hover:bg-gray-200">
              <FaFacebook className="text-gray-600 hover:text-blue-600" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-300 bg-gray-100 hover:bg-gray-200">
              <FaInstagram className="text-gray-600 hover:text-pink-500" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-300 bg-gray-100 hover:bg-gray-200">
              <FaYoutube className="text-gray-600 hover:text-red-500" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-300 bg-gray-100 hover:bg-gray-200">
              <FaTwitter className="text-gray-600 hover:text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
