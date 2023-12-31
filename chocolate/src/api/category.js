import axios from "./axios";

export const getCategories = () => axios.get("/categories");
export const getCategory = (id) => axios.get(`/category/${id}`);
export const createCategory = (data) => axios.post("/category", data);
export const updateCategory = (id, data) => axios.put(`/category/${id}`, data);
export const deleteCategory = (id) => axios.delete(`/category/${id}`);
