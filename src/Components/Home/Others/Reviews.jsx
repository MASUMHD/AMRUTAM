import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="mt-8 border rounded-xl">
      <div className="flex justify-between items-center rounded-t-xl bg-[#F4F7EC] pt-3 pb-3 pl-10 pr-10">
        <h3 className="text-xl font-semibold text-[#313131]">
          Featured Reviews (102)
        </h3>
      </div>

      <div className="p-6">
        <div className="border p-6 rounded-lg bg-[#FAFAFA]">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e02YjqhiDWrYxbYHjGpBOMt2f7yQapuMb04eHkXQugaNWz8fZ9-fAVRtP5oNs40A8RMiJeZjwQX4X1VG4kPJ2Va53vjWGWxOQjTZWcDuCPP-z1gkncttxg24uWPG~sPNq0IfnQaY33c8JDfTxxyw-XZgm1xa2JehH9WaG8wm3NrcR5iopIsnmNr1r8yOGqfXtSS6D7psoOHMrA0WNLlPwVM~sajhpsOEFNjVsygu-Gcec4xHBiHzF~H~ki2KTNH2TrnqoWNkv7aNRGqep1ma5Aldzmrd1DmAUM45B9CkbWD9YjiHBLlx9j8dMK5cjlGjcYNpecRT3R9jVX-Xw6PWiQ__"
              alt="Reviewer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-lg text-[#313131]">
                Alicent Hightower
              </h4>
              <p className="text-sm text-gray-500 ">Consulted for Skin care</p>
            </div>
            <span className="ml-auto text-sm text-gray-400">
              20 January 2023
            </span>
          </div>

          <div className="flex items-center gap-1 mb-3 text-[#F4B400]">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          <p className="text-gray-600">
            Might be a bit early to confirm but yes I can see noticeable
            difference in my hairfall. Will write again after using it for
            longer periods.
          </p>
        </div>

        <div className="border mt-6 p-6 rounded-lg bg-[#FAFAFA]">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e02YjqhiDWrYxbYHjGpBOMt2f7yQapuMb04eHkXQugaNWz8fZ9-fAVRtP5oNs40A8RMiJeZjwQX4X1VG4kPJ2Va53vjWGWxOQjTZWcDuCPP-z1gkncttxg24uWPG~sPNq0IfnQaY33c8JDfTxxyw-XZgm1xa2JehH9WaG8wm3NrcR5iopIsnmNr1r8yOGqfXtSS6D7psoOHMrA0WNLlPwVM~sajhpsOEFNjVsygu-Gcec4xHBiHzF~H~ki2KTNH2TrnqoWNkv7aNRGqep1ma5Aldzmrd1DmAUM45B9CkbWD9YjiHBLlx9j8dMK5cjlGjcYNpecRT3R9jVX-Xw6PWiQ__"
              alt="Reviewer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-lg text-[#313131]">
                Alicent Hightower
              </h4>
              <p className="text-sm text-gray-500 ">Consulted for Skin care</p>
            </div>
            <span className="ml-auto text-sm text-gray-400">
              20 January 2023
            </span>
          </div>

          <div className="flex items-center gap-1 mb-3 text-[#F4B400]">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          <p className="text-gray-600">
            Might be a bit early to confirm but yes I can see noticeable
            difference in my hairfall. Will write again after using it for
            longer periods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
