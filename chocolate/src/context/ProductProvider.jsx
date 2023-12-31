import { useContext, createContext, useState, useEffect } from "react";
import { getProducts } from "../api/product";
import { getCategories } from "../api/category";

const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const getAllProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  const getAllCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    getAllProducts();
    getAllCategories();
    setLoading(false);
  }, []);

  return (
    <ProductContext.Provider value={{ products, categories, errors, loading }}>
      {loading ? (
        <div className="flex justify-center items-center w-screen h-screen bg-[#301A04]">
          <div className="block">
            <div className="w-20 h-20 rounded-full animate-spin border-x-[3px] border-solid border-[#fcab32] border-t-transparent shadow-md"></div>
            <h4 className=" text-center text-white  font-semibold mt-5">
              Cargando...
            </h4>
          </div>
        </div>
      ) : (
        children
      )}
    </ProductContext.Provider>
  );
}
