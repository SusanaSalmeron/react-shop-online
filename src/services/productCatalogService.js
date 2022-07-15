import axios from 'axios';

const apiBaseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json"
const baseUrl = "http://localhost:3001/v1/users/search"

export async function getProductsBy(type) {
    let response = []
    try {
        response = await axios.get(`${apiBaseUrl}/?product_type=${type}`)
    } catch (err) {
        console.log('Error', err.message)
    }
    return response.data
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
    console.log(response.data)
    return response.data
}

export async function getProductById(id) {
    let response = []
    const requestParams = { params: { id: id } }
    try {
        response = await axios.get(`http://localhost:3001/v1/product/${id}`, requestParams)

    } catch (err) {
        console.log('Error', err.message)
    }
    console.log(response.data)
    return response.data[0]
}