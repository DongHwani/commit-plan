import axios from 'axios'

const config = {
    baseUrl : 'https://api.github.com'
}

function fetchRepositories(keyword){
    return axios.get(`${config.baseUrl}/users/`+`${keyword}/repos`)
}

export { fetchRepositories }