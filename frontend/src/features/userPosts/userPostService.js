import axios from 'axios'

const API_URL = '/api/userPosts/'

// Create new user post
const createUserPost = async (userPostData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, userPostData, config)

    return response.data
}

// Get all user posts
const getUserPosts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete useer post
const deleteUserPost = async (userPostId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + userPostId, config)

    return response.data
}

const userPostService = {
    createUserPost,
    getUserPosts,
    deleteUserPost,
}

export default userPostService