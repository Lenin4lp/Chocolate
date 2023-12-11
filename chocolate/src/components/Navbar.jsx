import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  let Links = [
    { name: "Servicios", link: "/servicios" },
    { name: "Contacto", link: "/contacto" },
    { name: "Nosotros", link: "/nosotros" },
    { name: "Tienda", link: "/tienda" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-black/[0.9] md:bg-black/[0.7] bg- py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800 w-fit"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          <Link to="/">
            <img
              className=" h-14 md:h-24 w-auto object-contain"
              src="https://onedrive.live.com/embed?resid=C8B0FA3060147D42%21284043&authkey=%21APA2qvvEqg88wIc&width=1165&height=499"
              alt=""
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-7 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 bg-black/[0.9] md:bg-black/[0.7] " : "top-[-490px] "
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 hover:scale-110 duration-500"
            >
              <Link
                relative="route"
                to={link.link}
                className="text-white  duration-500 "
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button className=" px-5 py-3 rounded bg-[#c79f31] hover:bg-[#c78b31] mx-8 font-semibold duration-500">
              Cotizar
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Navbar);
