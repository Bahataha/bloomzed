import axios from "axios";

axios.defaults.baseURL = 'https://b2b.bloomzed.dew/';
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');
