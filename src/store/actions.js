import axios from 'axios';
import { apiService } from '../api/index';

export default { 
    FETCH_REPOSITORIES({ commit }, keyword) {
        apiService.fetchRepositories(keyword)
                .then(response => commit('SET_REPOSITORIES', response.data))
                .catch(err => console.log(err));
    },
    LOGIN({ commit }, requestLogin) {
       return apiService.login(requestLogin)
                .then(({data}) => { 
                    commit('SET_LOGIN_USER', data) 
                    axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`
                })
    },
    LOGOUT({commit}) {
        axios.defaults.headers.common['Authorization'] = undefined
        commit('LOGOUT')
    }
}