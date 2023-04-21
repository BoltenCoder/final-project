import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import UserPostForm from '../components/UserPostForm'
import Spinner from '../components/Spinner'
import {getUserPosts, reset} from '../features/userPosts/userPostSlice'

function Dashboard() {
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
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
  <>
    <section className="heading">
      {/* Shows "Welcome [If there is a user logged in then (&&) display their name" */}
      <h1>Welcome {user && user.name}</h1>
      <p>Community Home Page</p>
    </section>

    <UserPostForm />
  </>
  )
}

export default Dashboard