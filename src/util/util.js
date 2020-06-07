import axios from 'axios';

const authAxios=axios.create({
    baseURL:'http://localhost:8083'
})

export default authAxios;