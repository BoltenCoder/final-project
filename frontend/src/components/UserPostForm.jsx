import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createUserPost} from '../features/userPosts/userPostSlice'

function UserPostForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createUserPost({text}))
        setText('')
    }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Title</label>
                <input type="text" name='title' id='title' value={text} onChange={(e) => setText(e.target.value)}/>
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