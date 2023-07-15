import axios from "axios";
const instanse = axios.create({
    baseURL : 'http://127.0.0.1:8080/api',
    headers:{
        // Authorization:'Bearer ${token}'
    }
})
export default instanse