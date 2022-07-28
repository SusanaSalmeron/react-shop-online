import axios from 'axios';

const apiBaseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json"
const baseUrl = "http://localhost:3001/v1/users/search"

export async function getProductsBy(type) {
    let allProducts = []
    try {
        const response = await axios.get(`${apiBaseUrl}/?product_type=${type}`)
        const newProducts = await getAllNewProducts()
        const newProductsFiltered = newProducts.filter(p => p.product_type.toLowerCase() === type.toLowerCase())
        allProducts = [...response.data, ...newProductsFiltered]
    } catch (err) {
        console.log('Error', err.message)
    }
    return allProducts
}

export async function getAllProducts() {
    let response = []
    try {
        response = await axios.get(baseUrl)

    } catch (err) {
        console.log('Error', err.message)
    }
    return response.data
}

export async function getAllProductsFromSearch(keyword) {
    let response = []
    const requestParams = { params: { keyword: keyword } }
    try {
        response = await axios.get(`${baseUrl}/${keyword}`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
    }
    return response.data
}

export async function getProductById(id) {
    let response = []
    const requestParams = { params: { id: id } }
    try {
        response = await axios.get(`http://localhost:3001/v1/products/${id}`, requestParams)

    } catch (err) {
        console.log('Error', err.message)
    }
    console.log(response.data[0])
    return response.data[0]
}

export async function getAllNewProducts() {
    let response = []
    try {
        response = await axios.get('http://localhost:3001/v1/products/new')

    } catch (err) {
        console.log('Error', err.message)
    }
    return response.data
}