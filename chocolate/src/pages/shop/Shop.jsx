import React, { useState } from "react";
import { useProduct } from "../../context/ProductProvider";
import Footer from "../../components/Footer";

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsTable, setProductsTable] = useState([]);
  const [search, setSearch] = useState("");
  const [content, setContent] = useState(0);
  const { categories, products } = useProduct();
  const filteredProducts = products.filter((product) =>
    ["4021bc6d-", "adba551e-", "cbf51b6c-", "7317c99f-"].includes(
      product.product_id
    )
  );

  const sortedProducts =
    products &&
    products.sort((a, b) => {
      const nameA = a.product_name || "";
      const nameB = b.product_name || "";
      return nameA.localeCompare(nameB);
    });

  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts =
    search === ""
      ? sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
      : productsTable.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const goToNextPage = () => {
    if (currentPage === totalPages) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage >= 1) {
      if (currentPage === 1) {
        return;
      }
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredCategories = categories.filter(
    (category) => category.category_id == content
  );

  console.log(indexOfFirstProduct);
  console.log(indexOfLastProduct);

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchedProducts(e.target.value);
  };

  const searchedProducts = (search) => {
    let results = sortedProducts.filter((product) => {
      if (product.product_name.toLowerCase().includes(search.toLowerCase())) {
        return product;
      }
    });
    setProductsTable(results);
  };
  console.log(filteredCategories);
  console.log(products);
  return (
    <div className=" w-full h-screen overflow-x-hidden bg-[#e9e9e9]">
      <div className=" block">
        <div className=" h-[87px] md:h-[127px] bg-[#f9c349] "></div>
        <div className=" flex justify-center items-center">
          <div className=" md:mt-5 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
            <div className=" block">
              <div className=" mt-5 md:mt-10 mb-3 mx-4 col-span-1 flex justify-start">
                <div className=" p-5 inline-flex">
                  <input
                    type="text"
                    className=" px-2 w-52 h-9 border border-gray-400 rounded"
                    placeholder="Buscar productos..."
                    onChange={handleChange}
                    onClick={() => content !== 0 && setContent(0)}
                  />
                  <button className=" w-[30px] h-9 mx-1 bg-[#f9c349]">
                    <div className=" flex justify-center items-center">
                      <svg
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        className="dashicon dashicons-arrow-right-alt2"
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
              <div className=" flex justify-center items-start">
                <div className=" w-full h-fit p-7  block">
                  <div>
                    <h1 className=" font-semibold text-gray-600 text-left text-lg">
                      Categorías
                    </h1>
                  </div>
                  <div className=" mt-5">
                    <ul>
                      {categories &&
                        categories.map((category) => (
                          <li
                            className="my-4 font-normal text-gray-700 font-sans text-lg grid grid-cols-5"
                            key={category.category_id}
                          >
                            <div className=" hover:cursor-pointer hover:text-[#fcb900] duration-300 col-span-4">
                              <p
                                onClick={() => setContent(category.category_id)}
                              >
                                {category.category_name}
                              </p>
                            </div>
                            <div className=" col-span-1 flex justify-end">
                              <p className=" ">{`(${category.products.length})`}</p>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className=" hidden md:flex my-10">
                    <h1 className=" font-semibold text-gray-600 text-left text-lg">
                      Los más vendidos
                    </h1>
                  </div>
                  <div className=" w-full hidden md:block">
                    {filteredProducts &&
                      filteredProducts.map((product) => (
                        <a href={`/tienda/producto/${product.product_id}`}>
                          <div className=" grid grid-cols-2 my-6 gap-1 text-gray-600 border-t-2 border-[#7a7a7a41]">
                            <div className="py-2 flex justify-start items-center">
                              <img src={product.image} alt="" />
                            </div>
                            <div className=" py-2 flex justify-start items-center">
                              <div className=" block">
                                <p className="">{product.product_name}</p>
                                <p className=" font-sans">{`$${
                                  product.product_price === product.max_price
                                    ? `${product.product_price}`
                                    : `${product.product_price} - $${product.max_price}`
                                }`}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:col-span-3 lg:col-span-4 bg-white m-0 md:m-10  h-fit w-full md:w-[70vw]">
              {content === 0 ? (
                <div className=" block m-14">
                  <div>
                    <h1>{`Inicio/Store/${
                      search === ""
                        ? `Página ${currentPage}`
                        : `Resultados de búsqueda para "${search}"`
                    }`}</h1>
                  </div>
                  <div className=" mt-10">
                    <h1>
                      {search === ""
                        ? currentPage === 1
                          ? `Mostrando ${
                              indexOfFirstProduct + 1
                            }-${indexOfLastProduct} de ${
                              products.length
                            } resultados`
                          : `Mostrando ${indexOfFirstProduct + 1}-${
                              products.length
                            } de ${products.length} resultados`
                        : `Mostrando ${currentProducts.length}-${currentProducts.length} de ${currentProducts.length} resultados`}
                    </h1>
                  </div>
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2">
                    {search === ""
                      ? sortedProducts &&
                        currentProducts.map((product) => (
                          <div
                            key={product.product_id}
                            className=" flex justify-center items-start my-5"
                          >
                            <div className=" block">
                              <a
                                href={`/tienda/producto/${product.product_id}`}
                              >
                                <img
                                  className=" h-[210px]"
                                  src={product.image}
                                  alt=""
                                />
                              </a>
                              <div className=" flex justify-start items-center my-2">
                                <p className=" text-left font-medium">
                                  {product.product_name}
                                </p>
                              </div>
                              <div className=" flex justify-start items-center my-2">
                                <p className=" text-left font-medium text-gray-500">
                                  {product.categories[0].category_name}
                                </p>
                              </div>
                              <div className=" flex justify-start items-center my-2">
                                <p className=" font-semibold text-gray-600">{`${
                                  product.on_stock === true
                                    ? product.product_price ===
                                      product.max_price
                                      ? `$${product.product_price}`
                                      : `$${product.product_price} - $${product.max_price}`
                                    : "Agotado"
                                }`}</p>
                              </div>
                            </div>
                          </div>
                        ))
                      : productsTable &&
                        currentProducts.map((product) => (
                          <div
                            key={product.product_id}
                            className=" flex justify-center items-start my-5"
                          >
                            <div className=" block">
                              <a
                                href={`/tienda/producto/${product.product_id}`}
                              >
                                <img
                                  className=" h-[210px]"
                                  src={product.image}
                                  alt=""
                                />
                              </a>
                              <div className=" flex justify-start items-center my-2">
                                <p className=" text-left font-medium">
                                  {product.product_name}
                                </p>
                              </div>
                              <div className=" flex justify-start items-center my-2">
                                <p className=" text-left font-medium text-gray-500">
                                  {product.categories[0].category_name}
                                </p>
                              </div>
                              <div className=" flex justify-start items-center my-2">
                                <p className=" font-semibold text-gray-600">{`${
                                  product.on_stock === true
                                    ? product.product_price ===
                                      product.max_price
                                      ? `$${product.product_price}`
                                      : `$${product.product_price} - $${product.max_price}`
                                    : "Agotado"
                                }`}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                  <nav
                    aria-label="Page navigation example"
                    className=" md:mt-2 flex justify-center items-center"
                  >
                    <ul className="list-style-none flex">
                      <li>
                        <button
                          className="relative block font-medium rounded bg-[#1E1810] px-3 py-1.5 text-[10px] sm:text-sm text-white border border-white w-28 hover:bg-[#413423] transition-all duration-300 "
                          href="#"
                          onClick={goToPreviousPage}
                        >
                          Anterior
                        </button>
                      </li>

                      <li>
                        <button
                          className="relative block font-medium rounded bg-[#1E1810] px-3 py-1.5 text-[10px] sm:text-sm text-white border border-white w-28 hover:bg-[#413423] transition-all duration-300 "
                          href="#"
                          onClick={goToNextPage}
                        >
                          Siguiente
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              ) : (
                <div className=" block m-14">
                  <div>
                    <h1>{`Inicio/Store/${filteredCategories[0].category_name}`}</h1>
                  </div>
                  <div className=" my-5">
                    <h1 className=" text-[60px] font-bold">
                      {filteredCategories[0].category_name}
                    </h1>
                  </div>
                  <div className=" grid grid-cols-3 gap-x-2">
                    {categories &&
                      filteredCategories[0].products.map((product) => (
                        <div className=" flex justify-center items-start my-5">
                          <div className=" block">
                            <a href={`/tienda/producto/${product.product_id}`}>
                              <img
                                className=" h-[210px]"
                                src={product.image}
                                alt=""
                              />
                            </a>
                            <div className=" flex justify-start items-center my-2">
                              <p className=" text-left font-medium">
                                {product.product_name}
                              </p>
                            </div>
                            <div className=" flex justify-start items-center my-2">
                              <p className=" text-left font-medium text-gray-500">
                                {product.categories[0].category_name}
                              </p>
                            </div>
                            <div className=" flex justify-start items-center my-2">
                              <p className=" font-semibold text-gray-600">{`${
                                product.on_stock === true
                                  ? product.product_price === product.max_price
                                    ? `$${product.product_price}`
                                    : `$${product.product_price} - $${product.max_price}`
                                  : "Agotado"
                              }`}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  {content === 0 ? (
                    <nav
                      aria-label="Page navigation example"
                      className=" md:mt-2 flex justify-center items-center"
                    >
                      <ul className="list-style-none flex">
                        <li>
                          <button
                            className="relative block font-medium rounded bg-[#1E1810] px-3 py-1.5 text-[10px] sm:text-sm text-white border border-white w-28 hover:bg-[#413423] transition-all duration-300 "
                            href="#"
                            onClick={goToPreviousPage}
                          >
                            Anterior
                          </button>
                        </li>

                        <li>
                          <button
                            className="relative block font-medium rounded bg-[#1E1810] px-3 py-1.5 text-[10px] sm:text-sm text-white border border-white w-28 hover:bg-[#413423] transition-all duration-300 "
                            href="#"
                            onClick={goToNextPage}
                          >
                            Siguiente
                          </button>
                        </li>
                      </ul>
                    </nav>
                  ) : (
                    <></>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Shop;
