import axios from 'axios';


const baseUrl = "http://localhost:3001/v1"

export async function getUserData(id) {
    let response
    const requestParams = { params: { id: id } }
    try {
        response = await axios.get(`${baseUrl}/users/${id}/data`, requestParams)

    } catch (err) {
        console.log('Error', err.message)
    }
    return response.data
}

