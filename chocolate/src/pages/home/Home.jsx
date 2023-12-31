import React from "react";

import Footer from "../../components/Footer";

function Home() {
  return (
    <div className=" w-screen h-screen overflow-x-hidden">
      <img
        src="https://softdeveral.com/assets/hands-2430200_1920%20%281%29%20%282%29.webp"
        alt=""
        className=" absolute w-screen h-screen  object-cover z-[-2]"
      />
      <div className="absolute w-screen h-screen bg-black/60 z-[-1]"></div>
      <div className=" block z-30">
        <div className=" h-[87px] md:h-screen w-screen bg-cover bg-[url('https://softdeveral.com/assets/391615705_816731297122933_8153192096835228882_n%20%281%29%20%281%29.webp')]">
          <div className=" flex justify-center items-center">
            <h1></h1>
          </div>
        </div>
        <div className=" h-fit w-screen bg-[#e9e9e9]">
          <div className=" grid grid-cols-1 md:grid-cols-2 ">
            <div className=" flex justify-center items-center">
              <div className=" block">
                <div className=" h-fit m-6 md:m-10">
                  <h1 className=" mx-2 md:mx-6 text-left font-bold text-[25px] md:text-[45px] underline decoration-solid decoration-[#c79f31] decoration-4">
                    LA IMPORTANCIA DEL AGRICULTOR
                  </h1>
                </div>
                <div className=" h-fit grid grid-cols-1 md:grid-cols-2">
                  <div className=" flex justify-center md:justify-end px-4 items-center">
                    <img
                      src="https://softdeveral.com/assets/cocoa-452911_1280%20%281%29%20%281%29.webp"
                      alt=""
                      width={`250px`}
                      height={`175px`}
                    />
                  </div>
                  <div className=" flex justify-center md:justify-start px-4 items-center">
                    <img
                      src="https://softdeveral.com/assets/cacao-bean-2522918_1280%20%281%29%20%281%29.webp"
                      alt=""
                      width={`250px`}
                      height={`175px`}
                    />
                  </div>
                </div>
                <div className=" h-fit mx-6 md:mx-14 my-10">
                  <p className=" text-[13px] md:text-[15px]">
                    En el campo bajo el sol, con mucho esfuerzo y con amor; así
                    trabajan las manos que nos permiten entregarte a ti un
                    producto de calidad. Sabemos la importancia que tiene y por
                    eso queremos enseñarte el origen de una leyenda.
                  </p>
                </div>
                <div className=" flex justify-center items-center m-10">
                  <button className=" bg-[#c79f31] text-sm md:text-base rounded p-2 hover:bg-[#f3d54f] duration-500">
                    CONOCE NUESTRA HISTORIA
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center h-full p-5">
              <img
                src="https://softdeveral.com/assets/ghana-2842927_1920%20%281%29.webp"
                alt=""
                className=" h-[80vh] w-[80vh] object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" h-fit md:h-[80vh] w-screen bg-transparent flex justify-center items-center">
          <div className=" block">
            <h1 className=" text-[25px] mt-10 md:mt-0 p-2 md:text-[45px] text-center text-white font-bold">
              CONVIÉRTETE EN LEYENDA
            </h1>
            <p className=" text-base text-white md:text-2xl mx-4 md:mx-60 text-center my-5 md:my-10">
              NO TODOS PUEDEN HACER LEYENDA, PERO TU PUEDES CONVERTIRTE EN UNA.
              DECÍDETE A DISTRIBUIR PRODUCTOS ÚNICOS QUE CREAN UNA HISTORIA
              ECUATORIANA
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
