const MyWork = () => {
    return (
      <div className="mt-8 border rounded-xl ">
        <div className="flex justify-between items-center rounded-t-xl bg-[#F4F7EC] pt-3 pb-3 pl-10 pr-10">
          <h3 className="text-xl font-semibold text-[#313131]">
            My Work Experience
          </h3>
        </div>
  
        <div className="pl-10 pr-10 mt-4 mb-8">
          <h1 className="mt-6 text-lg font-semibold uppercase text-[#3A643B]">
            I have been in practice for : 7+ Years
          </h1>
          <hr className="mt-4 border-gray-300  border" />
  
          <div className="mt-6">
            <div className="flex justify-between  mb-6">
              <div className="flex items-center">
                <img
                  src="https://i.postimg.cc/ZqVvSgGr/material-symbols-home-work-outline-rounded.png"
                  alt="Work Icon"
                  className="w-10 h-10 mr-4 p-2"
                />
                <div>
                  <h4 className="text-base font-semibold text-[#313131]">
                    Midtown Medical Clinic
                  </h4>
                  <p className="text-sm text-gray-500 font-semibold">Senior doctor</p>
                </div>
              </div>
              <span className="text-sm text-gray-500 font-semibold">2016-PRESENT</span>
            </div>
  
            <div className="flex justify-between ">
              <div className="flex items-center">
                <img
                  src="https://i.postimg.cc/ZqVvSgGr/material-symbols-home-work-outline-rounded.png"
                  alt="Work Icon"
                  className="w-10 h-10 mr-4 p-2"
                />
                <div>
                  <h4 className="text-base font-semibold text-[#313131]">
                    Midtown Medical Clinic
                  </h4>
                  <p className="text-sm text-gray-500 font-semibold">Senior doctor</p>
                </div>
              </div>
              <span className="text-sm text-gray-500 font-semibold">2010-2015</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MyWork;
  