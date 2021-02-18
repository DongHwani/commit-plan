import axios from 'axios'

const config = {
    baseUrl : 'https://api.github.com'
}

const fetchRepositories = (userId) =>
    axios.get(`${config.baseUrl}/users/${userId}/repos`)

export const apiService = {
    fetchRepositories
}    