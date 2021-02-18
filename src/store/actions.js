import { apiService } from '../api/index';

export default { 
    FETCH_REPOSITORIES({ commit }, keyword) {
        apiService.fetchRepositories(keyword)
                .then(response => commit('SET_REPOSITORIES', response.data))
                .catch(err => console.log(err));
    }
}