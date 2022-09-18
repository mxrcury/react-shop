
import axios from 'axios';

export const getItemsReq = (category,sortType) => {
    try {
        const data = axios.get(`http://localhost:3001/products?${category > 0 ? `category=${category}` : ''}&_sort=${sortType.type}&_order=${sortType.order}`)
        return data
    } catch (error) {
        alert(error)
    }
}