import {useDispatch} from 'react-redux'
import {deleteUserPost} from '../features/userPosts/userPostSlice'
import {Link} from 'react-router-dom'

function UserPostItem({userPost}) {
    const dispatch = useDispatch() // Used to interact with database (MongoDB) with Get, Push, Put, Delete, etc.

  return (
    <div className="userPost" >
        <div>
            {new Date(userPost.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{userPost.title}</h2>
        <button onClick={() => dispatch(deleteUserPost(userPost._id))} className="close">X</button>
        <Link to={`/userpost/${userPost._id}`} key={userPost._id} userPost={userPost[userPost._id]}>
          <span className="link"></span>
        </Link>
    </div>
  )
}

export default UserPostItem