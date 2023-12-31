import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductProvider";
import { getProduct } from "../../api/product";
import Footer from "../../components/Footer";
import { useShoppinCart } from "../../context/ShoppingCartContext";

function Product() {
  const { cart, setCart } = useShoppinCart();
  const { products } = useProduct();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [additional, setAdditional] = useState("");
  const [show, setShow] = useState(false);
  const [isDisabled, setIsDisabled] = useState();

  const selectedProduct = products.find((product) => {
    return product.product_id === id;
  });

  useEffect(() => {
    if (product && product.product.caco.length > 0) {
      setIsDisabled(true);
    } else if (product && product.product.flavor.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, []);

  useEffect(() => {
    if (show === true) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 50000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  const addToCart = (productObject) => {
    let selectedPrice;
    const fullProduct = () => {
      return { ...productObject, additional: additional };
    };

    const productsToAdd = Array.from({ length: quantity }, () => fullProduct());

    const updatedCart = [...cart, ...productsToAdd];

    localStorage.setItem("cart", JSON.stringify([...cart, ...productsToAdd]));

    setCart(updatedCart);
    setShow(true);
  };

  console.log(additional);

  const getAProduct = async (id) => {
    try {
      const res = await getProduct(id);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAProduct(id);
    setAdditional("");
  }, []);

  return (
    <div className=" w-full h-screen overflow-x-hidden bg-[#e9e9e9]">
      <div className=" block">
        <div className=" h-[87px] md:h-[127px] bg-[#f9c349] "></div>
        {show === true && (
          <div className=" w-full h-fit block">
            <div className=" grid h-full p-10 grid-cols-1 md:grid-cols-2">
              <div className=" flex h-full gap-4 justify-start items-start">
                <svg
                  className=" h-[25px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                      fill="#1E1810"
                    ></path>{" "}
                  </g>
                </svg>
                <h1>{`"${
                  product && product.product.product_name
                }" se ha añadido a tu carrito`}</h1>
              </div>
              <div className=" flex justify-end items-start">
                <div>
                  <a href="/cart">
                    <button className=" px-5 py-3 rounded bg-[#f9c349] hover:bg-[#fcb900] mx-8 font-semibold duration-500">
                      Ver carrito
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className=" w-full h-[2px] bg-[#1E1810]"></div>
          </div>
        )}

        <div className=" flex justify-center items-center">
          <div className=" grid grid-cols-1 md:grid-cols-5">
            <div className=" md:col-span-2 mt-10 w-full flex justify-center items-center">
              <img
                className=" h-[250px] md:h-[500px] w-auto"
                src={product && product.product.image}
                alt=""
              />
            </div>
            <div className="w-full md:col-span-3 flex justify-start items-start m-3 md:m-10">
              <div className=" block">
                <p className=" font-sans text-sm md:text-base text-gray-500">{`Tienda / ${
                  product && product.product.categories[0].category_name
                } / ${product && product.product.product_name}`}</p>
                <div className=" my-4">
                  <h1 className=" font-sans text-base md:text-lg">
                    {product && product.product.categories[0].category_name}
                  </h1>
                </div>
                <div>
                  <h1 className=" text-xl md:text-3xl font-bold">
                    {product && product.product.product_name}
                  </h1>
                </div>
                <div>
                  <h1 className=" text-xl md:text-3xl text-gray-600 mt-5 font-sans font-medium">
                    {product && product.product.on_stock !== false
                      ? product.product.product_price ===
                        product.product.max_price
                        ? `$${product && product.product.product_price}`
                        : `$${product && product.product.product_price} - $${
                            product && product.product.max_price
                          }`
                      : ``}
                    <span className=" font-normal text-base md:text-lg">{` + Free Shipping`}</span>
                  </h1>
                </div>
                <div className=" mx-10 my-5">
                  <ul className=" block">
                    <li className=" my-2 flex justify-start text-base md:text-lg text-gray-600 items-center">
                      <div className=" rounded-full h-[5px] mr-2 w-[5px] bg-gray-600"></div>
                      Sin conservantes
                    </li>
                    <li className=" my-2 flex justify-start text-base md:text-lg text-gray-600 items-center">
                      <div className=" rounded-full h-[5px] mr-2 w-[5px] bg-gray-600"></div>
                      Sin saborizantes
                    </li>
                  </ul>
                </div>
                <div className=" m-2">
                  <div className=" rounded-full h-[45px] w-[45px] flex justify-center items-center bg-[#1E1810]">
                    <p className=" font-normal text-sm text-white">
                      {product && product.product.weight}
                    </p>
                  </div>
                </div>
                <div className=" relative">
                  {product &&
                    product.product.cacao.length > 0 &&
                    product.product.cacao.map((cacao) => (
                      <div
                        key={cacao.cacao_id}
                        className=" mt-10 inline-flex m-3"
                      >
                        <div
                          className={`justify-center group items-center flex ${
                            additional === cacao.cocoa_percentage
                              ? " border-black"
                              : "border-gray-300"
                          } border h-[55px] w-[55px] `}
                        >
                          <span className="absolute top-0 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                            {cacao.cocoa_percentage}
                          </span>
                          <button
                            onClick={() =>
                              setAdditional(cacao.cocoa_percentage)
                            }
                            className="  m-1"
                          >
                            <img src={cacao.image} alt="" />
                          </button>
                        </div>
                      </div>
                    ))}
                  <div className=" relative">
                    {product &&
                      product.product.flavors.length > 0 &&
                      product.product.flavors.map((flavor) => (
                        <div
                          key={flavor.flavor_id}
                          className=" inline-flex mt-10 m-3"
                        >
                          <div
                            className={`justify-center ${
                              additional === flavor.flavor_name
                                ? " border border-black"
                                : ""
                            } group items-center flex h-[55px] w-[55px]`}
                          >
                            <span className="absolute top-0 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                              {flavor.flavor_name}
                            </span>

                            <button
                              key={flavor.flavor_id}
                              onClick={() => setAdditional(flavor.flavor_name)}
                              className="  m-1"
                            >
                              <img
                                className=" h-[45px]"
                                src={flavor.image}
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div>
                    <div>
                      <div className=" mx-3 my-3 flex justify-start items-center">
                        {product && product.product.on_stock !== false ? (
                          <div className=" grid grid-cols-4">
                            <div className=" col-span-1 flex justify-start items-center">
                              <div>
                                <input
                                  type="number"
                                  className=" h-[30px] w-[65px] p-2"
                                  defaultValue={1}
                                  onChange={(e) => setQuantity(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className=" col-span-3 px-4 flex justify-center items-center">
                              <button
                                disabled={
                                  product &&
                                  product.product.cacao.length === 0 &&
                                  product &&
                                  product.product.flavors.length === 0
                                    ? false
                                    : additional === ""
                                    ? true
                                    : false
                                }
                                onClick={() => addToCart(product.product)}
                                className=" h-fit p-2 w-[200px] bg-[#f9c349] hover:bg-[#fcb900] font-semibold font-sans duration-300"
                              >
                                AÑADIR AL CARRITO
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className=" my-2 flex justify-start items-center">
                            <p className=" text-left text-red-600">
                              Este producto no está disponible porque no quedan
                              existencias.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className=" w-full h-[1px] mt-5 bg-gray-400"></div>
                  <div className=" my-2 flex justify-start items-center">
                    <div className=" grid grid-cols-2">
                      <div>
                        <p className=" text-base text-gray-600">SKU: N/D</p>
                      </div>
                      <div className=" text-base text-gray-600">
                        Categoría:{" "}
                        {product &&
                          product.product.categories
                            .map((category) => category.category_name)
                            .join(", ")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-[1px] mt-4 mx-5 bg-gray-400"></div>
        <div className=" flex justify-start items-center">
          <div>
            <h1 className=" mx-7 my-2 text-base font-semibold text-gray-600 font-sans">
              Descripción
            </h1>
          </div>
        </div>
        <div className=" mb-10 flex justify-start items-center">
          <div className=" mx-7 my-2 block">
            <h1 className=" text-base my-2 font-normal text-gray-600 font-sans">
              Tiempo de consumo 2 años
            </h1>
            <h1 className=" text-base my-2 font-bold text-gray-600 font-sans">
              Conservar en un ambiente seco y fresco
            </h1>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Product;
