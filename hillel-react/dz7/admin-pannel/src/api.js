import axios from 'axios';

export const users = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const photos = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const albums = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/albums',
    headers: {
        'Content-Type': 'application/json',
    },
});
