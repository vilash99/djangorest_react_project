import axios from "axios";

const api_url = "http://127.0.0.1:8000/api/";

export const fetchBooks = async(token) => {
  try {
    const response = await axios.get(api_url, {
      headers: { Authorization: `Token ${token}` }
    });
    return response.data;
  }
  catch(error) {
    console.log(error.message);
    throw error;
  }
};

export const addBook = async(bookData, token) => {
  try {
    const response = await axios.post(api_url, bookData, {
      headers: { Authorization: `Token ${token}` }
    });
    return response.data;
  }
  catch(error) {
    console.log(error.response.data);
    throw error;
  }
};

export const deleteBook = async (id, token) => {
  try {
    await axios.delete(`${api_url}${id}/`, {
      headers: { Authorization: `Token ${token}` }
    });
  } catch (error) {
    console.log(error.response.data);
    throw error;
  }
};

export const updateBook = async (id, updatedBookData, token) => {
  try {
    await axios.put(`${api_url}${id}/`, updatedBookData, {
      headers: { Authorization: `Token ${token}` }
    });
  } catch (error) {
    console.log(error.response.data);
    throw error;
  }
};
