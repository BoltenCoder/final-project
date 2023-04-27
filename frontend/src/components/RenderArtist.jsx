function RenderArtist(artist) {
    console.log(artist)

  return (
    <div className='artist-widget-spotify'>
        <div className='artist-widget-top-spotify'>
            <div className="artist-image-spotify">
                {artist.artist.images.length ?
                    <img src={artist.artist.images[0].url} alt={`Image of ${artist.artist.name}`}/>
                : <h3>No image was available.</h3>}
            </div>
            <div className='artist-details-spotify'>
                <p className='artist-name-spotify'>{artist.artist.name}</p>
            </div>
        </div>
        <div className='artist-widget-bottom-spotify'>
            <p>{`Popularity: ${artist.artist.popularity}`}</p>
            <p>{`Followers: ${artist.artist.followers.total}`}</p>
        </div>
    </div>
  )
}

export default RenderArtist