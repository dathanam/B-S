import { axios } from './HeaderApi'
export default{
    login: (data) => axios.post('/login', data),
}