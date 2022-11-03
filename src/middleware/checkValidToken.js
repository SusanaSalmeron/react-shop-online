import decode from 'jwt-decode';
import dayjs from 'dayjs'



export const checkValidToken = (paramId) => {
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    if (token) {
        const decodeToken = decode(token)
        let actualDate = dayjs().unix()
        console.log(decodeToken.expiration > actualDate)
        if (parseInt(id) === parseInt(paramId) && decodeToken.expiration > actualDate) {
            console.log('if')
            return true
        } else {
            console.log('else')
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            return false
        }
    }
    return false
}