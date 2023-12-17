import React from "react";

function Shop() {
  return (
    <div className=" w-full h-screen overflow-x-hidden bg-[#e9e9e9]">
      <div className=" block">
        <div className=" h-[87px] md:h-[127px] bg-[#f9c349] "></div>
        <div className=" flex justify-center items-center">
          <div className=" mt-10 grid grid-cols-4">
            <div className=" my-10 mx-4 col-span-1 flex justify-start">
              <div className=" p-5 inline-flex">
                <input
                  type="text"
                  className=" w-52 h-9 border border-gray-400 rounded"
                />
                <button className=" w-[30px] h-9 mx-1 bg-[#f9c349]">
                  <div className=" flex justify-center items-center">
                    <svg
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      class="dashicon dashicons-arrow-right-alt2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 15l5-5-5-5 1-2 7 7-7 7z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className=" col-span-3 bg-white m-10  h-screen w-[70vw]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
