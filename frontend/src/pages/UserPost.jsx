import {deleteUserPost} from '../features/userPosts/userPostSlice'
import SpecificPost from '../components/SpecificPost'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import UserPostForm from '../components/UserPostForm'
import UserPostItem from '../components/UserPostItem'
import Spinner from '../components/Spinner'
import {getUserPosts, reset} from '../features/userPosts/userPostSlice'
const {postData} = require('../components/UserPostItem');

// console.log(postData)

function UserPost() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const {user} = useSelector((state) => state.auth)
    const {userPosts, isLoading, isError, message} = useSelector((state) => state.userPosts)
    // Here *^
  
    useEffect(() => {
      if (isError) {
        console.log(message)
      }
      if (!user) {
        navigate('/login')
      }
  
      // Fetches userPosts from the backend and puts it in the "useSelector" object defined up there *^.
      dispatch(getUserPosts())
  
      return () => {
        dispatch(reset) // In video number 4 of the "Learn the MERN Stack" series, Traversy Media used "reset()" here instead of "reset", however reset with the "()" was causing it to crash for me.
      }
    }, [user, navigate, isError, message, dispatch])
  
    if (isLoading) {
      return <Spinner />
    }

    // console.log('DEBUG: Creating userpost page.') // DEBUG
  return (
    <div>
        {userPosts.map((userPost) => (
            // console.log(userPost._id),
            <SpecificPost key={userPost._id} userPost={userPost} />
          ))}
        {/* <div>
            {new Date(userPost.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{userPost.text}</h2> */}
    </div>
  )
}

export default UserPost