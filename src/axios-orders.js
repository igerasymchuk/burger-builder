import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-e0773.firebaseio.com/'
})

export default instance