import "../Style/tweet.css"

function Tweet({name, content, like}){
    const onLike = () => {
        console.log("LIKE", name)
    }
    return(
        <div className="tweet">
            <div className="tweet__content">
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={() => onLike()}>{like} ❤️</button>
            </div>
        </div>
    )
}

export default Tweet;