import React from "react";
import ReactPlayer from "react-player";

function AboutUs() {
  return (
    <div className=" w-screen h-screen overflow-x-hidden">
      <img
        src="https://onedrive.live.com/embed?resid=C8B0FA3060147D42%21284041&authkey=%21AHKVWhS8V8FxuQs&width=1920&height=1024"
        alt=""
        className=" absolute w-screen h-screen  object-cover z-[-2]"
      />
      <div className="absolute w-screen h-screen bg-black/60 z-[-1]"></div>
      <div className=" block">
        <div className=" h-screen w-screen flex justify-center items-center">
          <div>
            <div className=" block">
              <h1 className=" text-[45px] text-center font-bold m-10 text-white">
                EL ORIGEN DE NUESTRA LEYENDA
              </h1>
              <p className=" text-center text-2xl mt-10 mx-20 font-normal text-white">
                EL ORIGEN DE NUESTRA LEYENDA DE LA MANO DE CIENTOS DE FAMILIAS
                AGRICULTORAS DEL ECUADOR, CON LOS CUALES GESTIONAMOS UN
                DESARROLLO MUTUO.
              </p>
            </div>
          </div>
        </div>
        <div className=" h-fit bg-[#e9e9e9] py-14 flex justify-center items-center">
          <div className=" grid grid-cols-3">
            <div className=" col-span-2 pl-16 pr-5">
              <ReactPlayer
                url="http://chocoleyenda.com/wp-content/uploads/2023/12/SPOT-2_HD_FINAL.mp4"
                width="100%"
                height="100%"
                controls
              />
            </div>
            <div className=" col-span-1">
              <div className=" block m-5">
                <h1 className=" text-[40px] font-semibold">QUIENES SOMOS</h1>
                <h1 className=" text-lg mr-6 mt-2 font-semibold">
                  ELABORAMOS CHOCOLATE DESDE EL GRANO A LA BARRA
                </h1>
                <div className=" flex justify-center items-center">
                  <div className=" m-3 h-[3px] w-[5vw] bg-[#fcab32]"></div>
                </div>
                <div className=" mt-2 text-[17px]">
                  <p>
                    Somos una empresa Ecuatoriana dedicada a la fabricación de
                    chocolates finos. Garantizamos la calidad de nuestros
                    productos, interviniendo en cada paso del proceso de
                    producción, del grano a la barra.
                  </p>
                </div>
                <div className=" mt-6 text-[17px]">
                  <p>
                    Con operaciones desde el 2011, Leyenda expande sus
                    horizontes en la innovación de los procesos, maquinaria y
                    productos, para brindar el mejor chocolate fino de aroma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[40vh] bg-[#301A04]">
          <div className=" p-5 grid grid-cols-2"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
