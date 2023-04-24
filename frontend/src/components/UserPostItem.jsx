import {useDispatch} from 'react-redux'
import {deleteUserPost} from '../features/userPosts/userPostSlice'
import {Link} from 'react-router-dom'

function UserPostItem({userPost}) {
    const dispatch = useDispatch()

  return (
    <div className="userPost" >
        <div>
            {new Date(userPost.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{userPost.text}</h2>
        <button onClick={() => dispatch(deleteUserPost(userPost._id))} className="close">X</button>
        <Link to={'/userpost'}>
          <span className="link"></span>
        </Link>
    </div>
  )
}

export default UserPostItem