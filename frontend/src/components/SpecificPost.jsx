import {useDispatch} from 'react-redux'
import {deleteUserPost} from '../features/userPosts/userPostSlice'

function SpecificPost(userPost) {
    const dispatch = useDispatch()

  return (
    <>
    <section role='banner' className="postBanner">
        {/* <button onClick={() => dispatch(deleteUserPost(userPost._id))} className="close">Delete Post</button> */}
        <h2>Title</h2>
        {userPost.userPost.title ? (
            <h1 id="title" className="title">
            {userPost.userPost.title}
            </h1>
        ) : (
            <h1>[No title given]</h1>
        )}
    </section>

    <section className="postSection">
        <div className="postSection__left">
            <h2>Message</h2>
            {userPost.userPost.text ? (
            <p>
            {userPost.userPost.text}
            </p>
        ) : (
            <p>[No text provided]</p>
        )}
            {console.log(userPost)}
        </div>

        <div className="postSection__right">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta consequatur ex adipisci tempore, ullam animi</p>
            <hr />
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta consequatur ex adipisci tempore, ullam animi</div>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta consequatur ex adipisci tempore, ullam animi</p>
        </div>
    </section>
    </>
  )
}

export default SpecificPost