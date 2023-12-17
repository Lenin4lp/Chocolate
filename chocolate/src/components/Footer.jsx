import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" w-full relative h-fit bg-[#683600]">
      <div className=" block">
        <div className=" p-5 flex justify-center items-center">
          <div className=" grid grid-cols-1 md:grid-cols-2 p-10 w-full">
            <div className="block">
              <div className=" flex justify-start items-center ">
                <img
                  className=" h-[60px] md:h-[80px] w-auto"
                  src="https://onedrive.live.com/embed?resid=C8B0FA3060147D42%21284043&authkey=%21APA2qvvEqg88wIc&width=1165&height=499"
                  alt=""
                />
              </div>
              <div className=" flex justify-start items-center ">
                <p className=" whitespace-pre-line font-normal text-base md:text-lg text-[#f9c349]">
                  <span className=" font-semibold">Cacao fino de aroma</span>{" "}
                  seleccionado
                  <br />
                  para garantizar
                  <span className=" font-semibold"> una alta calidad</span>
                </p>
              </div>
            </div>

            <div className=" pt-5">
              <form action="">
                <div className=" block">
                  <div className=" flex justify-start items-center">
                    <input
                      placeholder="Ingresa tu correo..."
                      className=" rounded w-[400px] h-[40px] md:px-4"
                      type="text"
                    />
                  </div>
                  <div className=" flex justify-start mt-5 items-center">
                    <button className=" px-5 py-3 rounded bg-[#f9c349] hover:bg-[#fcb900] font-semibold duration-500">
                      Suscribirse
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" w-full bg-[#4b3304] h-fit border flex justify-center items-center border-white">
          <p className=" py-5 text-white">{`Copyright © ${currentYear} CHOCOLEYENDA`}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
