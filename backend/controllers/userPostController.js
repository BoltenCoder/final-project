const asyncHandler = require('express-async-handler')

const UserPost = require('../models/userPostModel')
const User = require('../models/userModel')

// Description:         Get user posts
// Route:               GET /api/userPost
// Access:              Private
const getUserPosts = asyncHandler(async (req, res) => {
    const userPosts = await UserPost.find({ user: req.user.id })

    res.status(200).json(userPosts)
})

// Description:         Set user's post
// Route:               POST /api/userPost
// Access:              Private
const setUserPost = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const userPost = await UserPost.create({
        text: req.body.text,

        // This makes posts only visible to their poster.
        user: req.user.id,
    })

    res.status(200).json(userPost)
})

// Description:         Update user's post
// Route:               PUT /api/userPost/:id
// Access:              Private
const updateUserPost = asyncHandler(async (req, res) => {
    const userPost = await UserPost.findById(req.params.id)

    if(!userPost) {
        res.status(400)
        throw new Error("User's post not found")
    }

    const user = await User.findById(req.user.id)

    // Checks that a user is logged in
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Makes sure the user that made the post is the one that's logged in
    if (userPost.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedUserPost = await UserPost.findByIdAndUpdate(req.params.id, req.body, {new: true,
    })
    
    res.status(200).json(updatedUserPost)
})

// Description:         Delete user's post
// Route:               DELETE /api/userPost/:id
// Access:              Private
const deleteUserPost = asyncHandler(async (req, res) => {
    const userPost = await UserPost.findById(req.params.id)

    if(!userPost) {
        res.status(400)
        throw new Error("User's post not found")
    }

    const user = await User.findById(req.user.id)

    // Checks that a user is logged in
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Makes sure the user that made the post is the one that's logged in
    if (userPost.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await userPost.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getUserPosts, setUserPost, updateUserPost, deleteUserPost
}