import axios from 'axios'

export default axios.create({
    baseURL: 'https://5eede6d94cbc340016331390.mockapi.io/todos',
    headers: {
        'Content-Type': 'application/json',
    },
});