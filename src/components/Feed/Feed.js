import React , {useEffect, useState} from 'react'
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create"
import InputOption from '../InputOption/InputOption';
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from '../Post/Post'
import {db} from  "../../firebase"
import firebase from 'firebase'

function Feed() {
   const [input, setInput] = useState('');
   const [posts, setPosts] = useState([]);

    useEffect(() => {
       db.collection("posts").onSnapshot(snapshot => {
         setPosts(snapshot.docs.map(doc => (
             {
                 id: doc.id,
                 data: doc.data()
             } 
         )))
       })
    }, [])


  /* function for Sendpost */
   const sendPost = e => {
     e.preventDefault();   
     db.collection('posts').add({
       name: 'David',
       description: 'this is a test',
       message: input,
       photoUrl: '',
       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
     })
   }



  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button 
            onClick={sendPost}
            type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
           {/*  */}
             <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
           <InputOption title="Video" Icon={SubscriptionIcon} color="#E7A33E" />
           <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
           <InputOption title="write article" Icon={CalendarViewDayIcon} color="#7FC15E" />
          </div>
      </div>

      {/* Posts */}
      {posts.map(({id, data: {name, description, message,photoUrl} }) => {
        <Post
         key={id}
         name={name}
         description={description}
         message={message}
         photoUrl={photoUrl}
        />
      })}


      <Post name="David Akin-James" description="This is a test" message="Wow this works" photoUrl=""/>
    </div>
  )
}

export default Feed;
