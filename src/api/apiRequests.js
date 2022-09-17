
import axios from 'axios';

export const getItemsReq = () => {
    try {
        const data = axios.get("http://localhost:3001/products")
        return data
    } catch (error) {
        alert(error)
    }
}