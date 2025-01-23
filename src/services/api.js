// Importing Axios for better API handling
import axios from 'axios'

// Base URL for the FakeStore API
const API_BASE_URL = 'https://fakestoreapi.com'

// Function to fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`)
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

// Function to fetch a single product by ID
export const fetchProductById = async productId => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error)
    throw error
  }
}

// Function to authenticate user login
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      username,
      password,
    })
    return response.data
  } catch (error) {
    console.error('Error logging in:', error)
    throw error
  }
}

// Function to register a new user
export const registerUser = async userData => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData)
    return response.data
  } catch (error) {
    console.error('Error registering user:', error)
    throw error
  }
}

// Function to fetch all product categories
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/categories`)
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

// Function to fetch products by category
export const fetchProductsByCategory = async category => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products/category/${category}`,
    )
    return response.data
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error)
    throw error
  }
}

// Function to fetch all users (Optional, if needed)
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`)
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}
