import Tweet from './Tweet';
import Banner from './Banner';
import '../Style/App.css';
import { useState } from 'react';

const tweet = [ {
  id: 0,
  name:"Geoffrrey",
  content:"Mon premier tweet",
  like: 20,
},
{
  id:1,
  name:"Nima",
  content:"Mon premier tweet",
  like: 5,
},
{
  id:2,
  name:"Bruno",
  content:"Coucou",
  like: 15,
},
{
  id:3,
  name:"Paul",
  content:"Hello",
  like: 9,
},]

function App(){

  let [tweets, setTweets] = useState(tweet)

  let [username, setUsername] = useState("Geoffrey");

  const addLetter = () =>{
    username += "a"
    console.log(username)
  }

  const tweetsList = tweet.map((tweet) => {
    return(<Tweet key={tweet.id} name={tweet.name} content={tweet.content} like={tweet.like} />)
  })

  return(
    <div>
      <p>{username}</p>
      <button onClick={addLetter}>Click</button>
      <Banner />
      <div className='tweet__container'>{tweetsList}</div>
    </div>
  )
}

export default App;