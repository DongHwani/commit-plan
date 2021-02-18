import axios from 'axios'

const config = {
    baseUrl : 'https://api.github.com'
}

const fetchRepositories = (keyword) =>
    axios.get(`${config.baseUrl}/users/${keyword}/repos`)

export const apiService = {
    fetchRepositories
}    