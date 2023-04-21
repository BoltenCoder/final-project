import {useDispatch} from 'react-redux'
import {deleteUserPost} from '../features/userPosts/userPostSlice'

function UserPostItem({userPost}) {
    const dispatch = useDispatch()

  return (
    <div className="userPost" >
        <div>
            {new Date(userPost.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{userPost.text}</h2>
        <button onClick={() => dispatch(deleteUserPost(userPost._id))} className="close">X</button>
    </div>
  )
}

export default UserPostItem