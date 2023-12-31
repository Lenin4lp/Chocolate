import React from "react";
import { useForm } from "react-hook-form";

function CheckOut() {
  return (
    <div className=" w-full h-screen overflow-x-hidden bg-[#e9e9e9]">
      <div className=" block">
        <div className=" h-[87px] md:h-[127px] bg-[#f9c349] "></div>
        <div className=" w-full h-fit block">
          <div className=" flex justify-center my-10 items-center">
            <h1 className=" text-[60px] font-bold text-gray-600">Checkout</h1>
          </div>
          <div className=" grid grid-cols-5">
            <div className=" mx-10 col-span-3">
              <div className=" block">
                <div className=" flex justify-start items-center">
                  <h1 className=" text-base font-bold">
                    Detalles de facturación
                  </h1>
                </div>
                <div className=" w-full h-[1px] my-2 bg-gray-400">
                  <form action="s"></form>
                </div>
              </div>
            </div>
            <div className=" col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
