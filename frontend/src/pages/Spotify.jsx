import {useEffect, useState} from 'react'
import axios from 'axios'
import RenderArtist from '../components/RenderArtist'

function Spotify() {
    const CLIENT_ID = "672457edea344c8e89762c1840a2b75f"
    // const REDIRECT_URI = "http://localhost:3000/spotify" // Uncomment when developing on local host.
    const REDIRECT_URI = "https://finalprojectunderiley.herokuapp.com/spotify"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("") // useState --> It's original state/value.
    const [searchKey, setSearchKey] = useState("")
    const[artists, setArtists] = useState([])

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token") // Grabs the token from the URL.

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token) // Creates a "token" variable in local storage and gives it the value of the token in the URL.
        }

        setToken(token)

    }, [])

    // Resets all veriables where the token is held.
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token") // Deletes "token" from our local storage.
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
    })

    // console.log(data)
    setArtists(data.artists.items)

}

const renderArtists = () => {
    return artists.map(artist => (
        <RenderArtist key={artist.id} artist={artist} />
    ))
}

    return (
        <>
        <div className='container-spotify'>
            {/* When logged in. */}
            {token ?
                <section className='form-spotify'>
                    <form onSubmit={searchArtists}>
                        <div className="form-group-spotify">
                            <label htmlFor="artist">Artist</label>
                            <input type='text' name='artist' id='artist' className='form-content-spotify' onChange={e => setSearchKey(e.target.value)}/>
                            <button type='submit' className='btn'>Search</button>
                        </div>
                    </form>
                </section>
            : <h2>If you login you can use spotify features.</h2>
            }

            <div className='artists-spotify'>{renderArtists()}</div>

            {/* When logged out. */}
            {!token ? 
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login</a>
            : <button className='btn btn-logout-spotify' onClick={logout}>Logout of Spotify</button>}
        </div>
        </>
    )
}

export default Spotify