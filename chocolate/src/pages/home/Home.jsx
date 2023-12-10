import React from "react";
import Slider from "../../components/Slider";

function Home() {
  let slides = [
    `https://onedrive.live.com/embed?resid=C8B0FA3060147D42%21284041&authkey=%21AHKVWhS8V8FxuQs&width=1920&height=1024`,
    `https://onedrive.live.com/embed?resid=C8B0FA3060147D42%21284042&authkey=%21ADnHfwz4-CLAZjc&width=1920&height=1078`,
    `https://onedrive.live.com/embed?resid=C8B0FA3060147D42%21284039&authkey=%21ADhnnJQqIVLgIfE&width=1920&height=1141`,
  ];

  return (
    <div className=" w-screen h-screen overflow-x-hidden">
      <img
        src="https://onedrive.live.com/embed?resid=C8B0FA3060147D42%21284041&authkey=%21AHKVWhS8V8FxuQs&width=1920&height=1024"
        alt=""
        className=" absolute w-screen h-screen  object-cover z-[-2]"
      />
      <div className="absolute w-screen h-screen bg-black/60 z-[-1]"></div>
      <div className=" block z-30">
        <div className=" h-screen w-screen bg-cover bg-[url('https://onedrive.live.com/embed?resid=C8B0FA3060147D42%21284046&authkey=%21AAxdRKKpGSb5Y3o&width=2048&height=1280')]">
          <div className=" fles justify-center items-center">
            <h1></h1>
          </div>
        </div>
        <div className=" h-fit w-screen bg-white">
          <div className=" grid grid-cols-2 ">
            <div className=" flex justify-center items-center">
              <div className=" block">
                <div className=" h-fit m-10">
                  <h1 className=" mx-6 text-left font-bold text-[45px] underline decoration-solid decoration-[#c79f31] decoration-4">
                    LA IMPORTANCIA DEL AGRICULTOR
                  </h1>
                </div>
                <div className=" h-fit grid grid-cols-2">
                  <div className=" flex justify-end px-4 items-center">
                    <img
                      src="https://onedrive.live.com/embed?resid=C8B0FA3060147D42%21284048&authkey=%21AL92vGbOwcdyG8I&width=1280&height=851"
                      alt=""
                      width={`250px`}
                      height={`175px`}
                    />
                  </div>
                  <div className=" flex justify-start px-4 items-center">
                    <img
                      src="https://onedrive.live.com/embed?resid=C8B0FA3060147D42%21284049&authkey=%21APm7JHSkX0hHkNY&width=1280&height=853"
                      alt=""
                      width={`250px`}
                      height={`175px`}
                    />
                  </div>
                </div>
                <div className=" h-fit mx-14 my-10">
                  <p className=" text-[15px]">
                    En el campo bajo el sol, con mucho esfuerzo y con amor; así
                    trabajan las manos que nos permiten entregarte a ti un
                    producto de calidad. Sabemos la importancia que tiene y por
                    eso queremos enseñarte el origen de una leyenda.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center h-full p-5">
              <img
                src="https://onedrive.live.com/embed?resid=C8B0FA3060147D42%21284050&authkey=%21AOWaQWXNoGonPVU&width=1440&height=1920"
                alt=""
                className=" h-[80vh] w-[80vh] object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" h-[80vh] w-screen bg-transparent flex justify-center items-center">
          <div className=" block">
            <h1 className=" text-[45px] text-center text-white font-bold">
              CONVIÉRTETE EN LEYENDA
            </h1>
            <p className=" text-white text-2xl mx-60 text-center my-10">
              NO TODOS PUEDEN HACER LEYENDA, PERO TU PUEDES CONVERTIRTE EN UNA.
              DECÍDETE A DISTRIBUIR PRODUCTOS ÚNICOS QUE CREAN UNA HISTORIA
              ECUATORIANA
            </p>
          </div>
        </div>
        <div className=" h-screen w-screen bg-white">
          <div className=" grid grid-cols-2">
            <div className=" flex justify-start items-center m-10">
              <div className=" block">
                <p className=" text-left">SOMOS TU SOCIO ESTRATÉGICO</p>
                <h1 className=" text-[40px]">
                  TRAE TU FÓRMULA TE AYUDAMOS A CUMPLIR TU SUEÑO
                </h1>
                <div className=" w-[10vw] h-[4px] my-5 bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
