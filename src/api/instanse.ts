import axios from 'axios';
const instanse = axios.create({
   baseURL: 'http://localhost:8080/api',
   headers: {
      // Authorization:'Bearer ${token}'
   }
});
export default instanse;
