import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://contact.herokuapp.com',
});

export default Axios;
