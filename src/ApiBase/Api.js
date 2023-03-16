import axios from 'axios'
import React from 'react'

let apiHandling = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com'
    })

const Get = (endPoint) => {
    return apiHandling.get(endPoint)
}
const GetById = (endPoint, id) => {
    return apiHandling.get(`${endPoint}/${id}`)
}
const Put = (endPoint, body) => {
    return apiHandling.put(`${endPoint}`, body)
}

const Post = (endPoint, body) => {
    return apiHandling.post(`${endPoint}`, body)
}

const Delete = (endPoint, id) => {
    return apiHandling.delete(`${endPoint}`,id)
}

export { Get, Put, Post, GetById, Delete }
