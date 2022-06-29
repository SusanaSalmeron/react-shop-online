import axios from 'axios';

const baseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json"

export async function getProductsBy(type) {
    let response = []
    try {
        response = await axios.get(`${baseUrl}/?product_type=${type}`)
    } catch (err) {
        console.log('Error', err.message)
    }
    return response.data
}