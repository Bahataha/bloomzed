import axios from "axios";

axios.defaults.baseURL = 'http://bigroup.test/';
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');