import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createUserPost} from '../features/userPosts/userPostSlice'

function UserPostForm() {
    const [title, setTitle] = useState("What's in the post?")
    const [text, setText] = useState("Talk about what you're sharing!")

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createUserPost({title, text}))
        setTitle("What's in the post?")
        setText("Talk about what you're sharing!")
    }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">

                <label htmlFor="title">Title</label>
                <input type="text" name='title' id='title' value={title}
                    onClick={() => setTitle('')}
                    onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="text">Add text</label>
                <input type="text" name='text' id='text' value={text}
                    onClick={() => setText('')}
                    onChange={(e) => setText(e.target.value)}/>

            </div>
            <div className="form-group btn-post">
                <button className="btn btn-block" type='submit'>
                    Share it!
                </button>
            </div>
        </form>
    </section>
  )
}

export default UserPostForm