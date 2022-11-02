import axios from 'axios';

const baseUrl = "http://localhost:3001/v1"

export async function getProductsBy(type) {
    let response
    const requestParams = { params: { type: type } }
    try {
        response = await axios.get(`${baseUrl}/products/type`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
    }
    return response ? response.data : []
}

export async function getAllProducts() {
    let response
    try {
        response = await axios.get(`${baseUrl}/users/search`)

    } catch (err) {
        console.log('Error', err.message)
    }
    return response ? response.data : []
}

export async function getAllProductsFromSearch(keyword) {
    let response
    const requestParams = { params: { keyword: keyword } }
    try {
        response = await axios.get(`${baseUrl}/users/search/ ${keyword}`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
    }
    return response ? response.data : []
}

export async function getProductById(id) {
    let response
    const requestParams = { params: { id: id } }
    try {
        response = await axios.get(`${baseUrl}/products/${id}`, requestParams)

    } catch (err) {
        console.log('Error', err.message)
    }
    return response ? response.data : {}
}

export async function getAllNewProducts() {
    let response
    try {
        response = await axios.get(`${baseUrl}/products/new`)

    } catch (err) {
        console.log('Error', err.message)
    }
    return response ? response.data : []
}