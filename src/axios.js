import axios from "axios";

axios.defaults.baseURL = 'stage-mwallet-api.bloomzed.kz';
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');
