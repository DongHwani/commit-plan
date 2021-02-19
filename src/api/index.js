import axios from 'axios'

const config = {
    baseUrl : 'https://api.github.com'
}

const fetchRepositories = (userId) =>
    axios.get(`${config.baseUrl}/users/${userId}/repos`)

const login = (requestLogin) => 
     axios.post(`${config.baseUrl}/auth`, requestLogin);

export const apiService = {
    fetchRepositories,
    login
}    