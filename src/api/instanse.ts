import axios from 'axios';
const instanse = axios.create({
   baseURL: 'http://localhost:8000/api',
   headers: {
      // Authorization:'Bearer ${token}'
   }
});
export default instanse;
