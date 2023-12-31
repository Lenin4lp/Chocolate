import React from "react";
import ReactPlayer from "react-player";
import Footer from "../../components/Footer";

function AboutUs() {
  return (
    <div className=" w-full h-screen overflow-x-hidden">
      <img
        src="https://softdeveral.com/assets/hands-2430200_1920%20%281%29%20%282%29.webp"
        alt=""
        className=" absolute w-screen h-screen  object-cover z-[-2]"
      />
      <div className="absolute w-screen h-screen bg-black/60 z-[-1]"></div>
      <div className=" block">
        <div className=" h-screen w-screen flex justify-center items-center">
          <div>
            <div className=" block">
              <h1 className=" text-2xl md:text-3xl lg:text-[45px] text-center font-bold m-5 md:m-10 text-white">
                EL ORIGEN DE NUESTRA LEYENDA
              </h1>
              <p className=" text-center text-sm md:text-xl lg:text-2xl mt-10 mx-5 md:mx-20 font-normal text-white">
                EL ORIGEN DE NUESTRA LEYENDA DE LA MANO DE CIENTOS DE FAMILIAS
                AGRICULTORAS DEL ECUADOR, CON LOS CUALES GESTIONAMOS UN
                DESARROLLO MUTUO.
              </p>
            </div>
          </div>
        </div>
        <div className=" h-fit bg-[#e9e9e9] py-14 flex justify-center items-center">
          <div className=" grid grid-cols-1 md:grid-cols-3">
            <div className=" md:col-span-2 p-5 md:pl-16 md:pr-5">
              <ReactPlayer
                url="http://chocoleyenda.com/wp-content/uploads/2023/12/SPOT-2_HD_FINAL.mp4"
                width="100%"
                height="100%"
                controls
              />
            </div>
            <div className=" col-span-1">
              <div className=" block m-5">
                <h1 className=" text-xl md:text-2xl lg:text-[40px] font-semibold">
                  QUIENES SOMOS
                </h1>
                <h1 className=" sm:text-base md:text-lg mr-6 mt-2 font-semibold">
                  ELABORAMOS CHOCOLATE DESDE EL GRANO A LA BARRA
                </h1>
                <div className=" flex justify-center items-center">
                  <div className=" m-3 h-[3px] w-[5vw] bg-[#fcab32]"></div>
                </div>
                <div className=" mt-2 md:text-[15px] text-justify lg:text-[17px]">
                  <p>
                    Somos una empresa Ecuatoriana dedicada a la fabricación de
                    chocolates finos. Garantizamos la calidad de nuestros
                    productos, interviniendo en cada paso del proceso de
                    producción, del grano a la barra.
                  </p>
                </div>
                <div className=" mt-6 md:text-[15px] text-justify lg:text-[17px]">
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
        <div className=" h-fit bg-[#301A04]">
          <div className=" p-5 grid grid-cols-1 md:grid-cols-2">
            <div className="p-5 md:p-10">
              <h1 className=" text-2xl text-center md:text-left md:text-3xl lg:text-[45px] text-white pb-5">
                CERTIFICACIONES
              </h1>
              <p className=" md:pb-5 text-center md:text-left text-sm md:text-base text-white">
                LOS PRIMEROS BANCOS DEL PAÍS SE CREAN GRACIAS A EL CACAO COMO
                MOTOR ECONÓMICO NACIONAL.
              </p>
            </div>
            <div className=" flex justify-center items-center">
              <div className=" grid grid-cols-3 p-5 md:p-10">
                <div>
                  <img
                    src="https://softdeveral.com/assets/Cert4-.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://softdeveral.com/assets/Cert5-.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://softdeveral.com/assets/Cert6-.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
