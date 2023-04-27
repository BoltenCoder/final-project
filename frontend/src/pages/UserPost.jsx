import {deleteUserPost} from '../features/userPosts/userPostSlice'
import SpecificPost from '../components/SpecificPost'
import {useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
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
    const { id } = useParams(); // Fetches ID from the url to display the specific post linked to the ID.
  
    const {user} = useSelector((state) => state.auth)
    const {userPosts, isLoading, isError, message} = useSelector((state) => state.userPosts)
    const post = userPosts.find(post => post._id === id)
    // Here *^
    console.log(post)
  
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
    <div className='userpost-page'>
      <SpecificPost userPost={post} />
      {/* <div>
        {new Date(userPost.createdAt).toLocaleString('en-US')}
      </div>
      <h2>{userPost.text}</h2> */}
    </div>
  )
}

export default UserPost