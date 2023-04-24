function UserPost() {
  return (
    <>
        <section role='banner' className="PostBanner">
            <h2>Title</h2>
            <h1 id="title" className="Title">Post Title</h1>
        </section>
        <section className="PostSection">
            <div className="PostSection__left">
                <h2>Message</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste accusantium reiciendis eligendi ad repellat, ratione amet porro? Possimus, ea natus! Dignissimos similique cum tenetur. Natus rem eaque consequuntur. Officiis, eaque?</p>
            </div>
            <div className="PostSection__right">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta consequatur ex adipisci tempore, ullam animi recusandae repellendus, obcaecati quisquam asperiores porro itaque quia! Labore laborum reprehenderit ipsam aliquam architecto repudiandae?</p>
                <hr />
                <div>Some other content</div>
                <hr />
            </div>
        </section>
    </>
  )
}

export default UserPost