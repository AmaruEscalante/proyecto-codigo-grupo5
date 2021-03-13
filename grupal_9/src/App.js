import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Fragment, useRef, useState } from 'react';
// import './App.css';
// import Layout from './components/Layout'
import Layout from './components/Layout';
import Home from './pages/Home'
import Stats from './pages/Stats';
import Login from './pages/Login';
// import Chat from './pages/Chat';
import Chatroom from './pages/Chatroom'
import Luteachers from './pages/Luteachers'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAte90LSKB44SalIPoYsEr8ryc2D2Ro5q8",
  authDomain: "lutechprojectchat.firebaseapp.com",
  projectId: "lutechprojectchat",
  storageBucket: "lutechprojectchat.appspot.com",
  messagingSenderId: "555460442943",
  appId: "1:555460442943:web:8a772a8b380af56908318a"
}

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

export { auth, firestore, analytics }


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>
        {user ? (

          <Fragment>
            <BrowserRouter>
              <Layout handleLogout={handleLogout}>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/stats" component={Stats} />
                    <Route path="/chat" component={Chatroom} />
                    <Route path="/luteachers" component={Luteachers} />
                  </Switch>
                </Layout>
            </BrowserRouter>
          </Fragment>

        ) : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

const handleLogout = () => auth.signOut();


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default App;
