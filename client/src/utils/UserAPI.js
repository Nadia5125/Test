import axios from 'axios';

export default {
	getUser: () => {
		return axios.get('/api/user');
    },
    createUser: data => {
        return axios.post('/api/user/', data)
    },
    addUser: data => {
        return axios.put('/api/user/add', data)
    },
    minusUser: data => {
        return axios.put('/api/user/minus', data)
    },
    deleteUser: data => {
        return axios.post('/api/user/delete', data)
    }
	
};
