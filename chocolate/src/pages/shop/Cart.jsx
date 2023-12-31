import React, { useEffect } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const products = localStorage.getItem("cart");
  const parsedProducts = JSON.parse(products);
  const removeFromCart = (index) => {
    const updatedCart = [...parsedProducts];
    updatedCart.splice(index, 1); // Elimina el objeto del carrito en el índice especificado

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
  };

  const price = (product) => {
    if (
      product.additional === "Piña, Uvilla y Fresa" ||
      product.additional === "Solo con Panela" ||
      product.additional === "Uvilla" ||
      product.additional === "Guanabana"
    ) {
      return product.max_price;
    } else {
      return product.product_price;
    }
  };

  const calcularTotalPrecios = (products) => {
    const total = products
      .map((product) => {
        let precios = [];

        if (
          product.additional === "Piña, Uvilla y Fresa" ||
          product.additional === "Solo con Panela" ||
          product.additional === "Uvilla" ||
          product.additional === "Guanabana"
        ) {
          precios.push(parseFloat(product.max_price));
        } else {
          precios.push(parseFloat(product.product_price));
        }
        console.log(precios);

        return precios.reduce((accumulator, price) => accumulator + price, 0);
      })
      .reduce((accumulator, price) => accumulator + price, 0);

    return total.toFixed(2);
  };

  console.log(parsedProducts);
  return (
    <div className=" w-full h-screen overflow-x-hidden bg-[#e9e9e9]">
      <div className=" block">
        <div className=" h-[87px] md:h-[127px] bg-[#f9c349] "></div>
        <div className=" w-full h-fit block">
          <div className=" flex justify-center my-5 md:my-10 items-center">
            <h1 className=" text-3xl lg:text-[60px] font-bold text-gray-600">
              Cart
            </h1>
          </div>
          {parsedProducts && parsedProducts.length === 0 ? (
            <div className=" block">
              <div className=" flex justify-center items-center text-xl my-20">
                <h1>No se han agregado productos al carrito</h1>
              </div>
              <div className=" flex justify-center items-center">
                <a href="/tienda">
                  <button className=" px-5 py-3 rounded bg-[#f9c349] hover:bg-[#fcb900] mx-8 font-semibold duration-500">
                    Volver a la tienda
                  </button>
                </a>
              </div>
            </div>
          ) : (
            <div className=" flex justify-center items-center">
              <table className="border-collapse my-5  text-[10px] sm:text-sm">
                <thead className=" rounded text-[15px]">
                  <tr>
                    <th className=" border px-10 md:px-52 lg:px-72 p-2 border-gray-300 text-gray-600 font-semibold ">
                      <h1>Productos</h1>
                    </th>
                    <th className=" border px-10   p-2 border-gray-300 text-gray-600 font-semibold ">
                      <h1>Precio</h1>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {parsedProducts &&
                    parsedProducts.map((product, index) => {
                      return (
                        <tr key={index}>
                          <th className=" border p-2 border-gray-300 text-gray-600 font-semibold ">
                            <div className=" grid grid-cols-2 md:grid-cols-4 w-full">
                              <div className=" col-span-1 flex justify-center items-center">
                                <button onClick={() => removeFromCart(index)}>
                                  <svg
                                    className=" h-[20px] md:h-[30px]"
                                    fill="#c44a4a"
                                    viewBox="0 0 32 32"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#c44a4a"
                                  >
                                    <g
                                      id="SVGRepo_bgCarrier"
                                      strokeWidth="0"
                                    ></g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      {" "}
                                      <title>cancel1</title>{" "}
                                      <path d="M16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM16 6c-5.522 0-10 4.478-10 10s4.478 10 10 10c5.523 0 10-4.478 10-10s-4.477-10-10-10zM20.537 19.535l-1.014 1.014c-0.186 0.186-0.488 0.186-0.675 0l-2.87-2.87-2.87 2.87c-0.187 0.186-0.488 0.186-0.675 0l-1.014-1.014c-0.186-0.186-0.186-0.488 0-0.675l2.871-2.869-2.871-2.87c-0.186-0.187-0.186-0.489 0-0.676l1.014-1.013c0.187-0.187 0.488-0.187 0.675 0l2.87 2.87 2.87-2.87c0.187-0.187 0.489-0.187 0.675 0l1.014 1.013c0.186 0.187 0.186 0.489 0 0.676l-2.871 2.87 2.871 2.869c0.186 0.187 0.186 0.49 0 0.675z"></path>{" "}
                                    </g>
                                  </svg>
                                </button>
                              </div>
                              <div className=" col-span-1 hidden md:flex justify-center items-center">
                                <img
                                  className=" h-[90px] w-auto"
                                  src={product.image}
                                  alt=""
                                />
                              </div>
                              <div className=" col-span-1 md:col-span-2 flex justify-center items-center">
                                <h1>{`${product.product_name} - ${
                                  product.weight
                                }${
                                  product.additional !== ""
                                    ? `, ${product.additional}`
                                    : ""
                                }`}</h1>
                              </div>
                            </div>
                          </th>
                          <th className=" border px-10  p-2 border-gray-300 text-gray-600 font-semibold ">
                            <h1>{`$${price(product)}`}</h1>
                          </th>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {parsedProducts && parsedProducts.length > 0 && (
          <div className=" flex  md:my-10 mx-32 justify-center md:justify-end items-center">
            <div>
              <table className="  border-collapse my-5  text-[10px] sm:text-sm">
                <thead className="  rounded text-[15px]">
                  <tr>
                    <th className="  border px-20 md:px-56 lg:px-72 p-2 border-gray-300 text-gray-600 font-semibold ">
                      <h1 className="">Total del carrito</h1>
                    </th>
                  </tr>
                </thead>
                <tbody className=" w-full rounded text-[15px] ">
                  <tr>
                    <th className=" border px-10  p-2 border-gray-300 text-gray-600 font-semibold grid grid-cols-2">
                      <div className=" flex justify-start items-center">
                        <h1 className=" my-7 mx-10">Total</h1>
                      </div>
                      <div className=" flex justify-start items-center">
                        <h1 className=" my-7 mx-10">
                          {`$${calcularTotalPrecios(parsedProducts)}`}
                        </h1>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <th className="border px-10  p-2 border-gray-300 text-gray-600 font-semibold">
                      <div>
                        <a href="/checkout">
                          <button
                            onClick={() => {
                              localStorage.setItem(
                                "total_price",
                                calcularTotalPrecios(parsedProducts)
                              );
                            }}
                            className=" my-5 px-5 py-3 rounded bg-[#f9c349] hover:bg-[#fcb900] mx-8 font-semibold duration-500"
                          >
                            CHECKOUT
                          </button>
                        </a>
                      </div>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

// if (productObject && productObject.flavors.length > 0) {
//   if (additional === "Piña, Uvilla y Fresa") {
//     selectedPrice = productObject.max_price;
//   } else if (additional === "Solo con Panela") {
//     selectedPrice = productObject.max_price;
//   } else if (additional === "Uvilla") {
//     selectedPrice = productObject.max_price;
//   } else if (additional === "Guanabana")
//     selectedPrice = productObject.max_price;
//   else {
//     selectedPrice = productObject.product_price;
//   }
// }
