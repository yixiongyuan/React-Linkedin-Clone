import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase'
import firebase from 'firebase/compat/app'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {

    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    const user = useSelector(selectUser)


    useEffect(() => {

        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => (

                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )))
            ))

    }, [])

    const sendPost = (e) => {
        
        e.preventDefault();

        if(input.length>0){
            

            db.collection('posts').add({
    
                name: user.displayName,
                descripition: user.email,
                message: input,
                photoUrl: user.photoUrl || "",
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
    
            setInput("")
        }
       
    };

    return (
        <div className='feed'>

            <div className="feed_inputContainer">

                <div className="feed_input">
                    <CreateIcon />

                    <form action="">

                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            type="text" />

                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed_inputOptions">

                    <InputOption
                        Icon={ImageIcon}
                        title='Photo'
                        color="#70b5f9" />

                    <InputOption
                        Icon={SubscriptionsIcon}
                        title='Video'
                        color="#E7A33E" />

                    <InputOption
                        Icon={EventNoteIcon}
                        title='Event'
                        color="#C0CBCD" />

                    <InputOption
                        Icon={CalendarViewDayIcon}
                        title='Article'
                        color="#7FC15E" />


                </div>
            </div>


            {/* Posts */}

            {posts.map(({ id, data: { name, descripition, message, photoUrl } }) => (

                <Post
                    key={id}
                    name={name}
                    descripition={descripition}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}

        </div>
    )
}

export default Feed