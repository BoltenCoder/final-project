const express = require('express')
const router = express.Router()
const { getUserPosts,
    setUserPost,
    updateUserPost,
    deleteUserPost
} = require('../controllers/userPostController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getUserPosts).post(protect, setUserPost)
router.route('/:id').put(protect, updateUserPost).delete(protect, deleteUserPost)

module.exports = router