import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import fire from './fire';

import Layout from './components/Layout';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Login from './pages/Login';
import Chat from './pages/Chat'
import Luteachers from './pages/Luteachers'

export default function App () {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [EmailError , setEmailError ] = useState('');
  const [PasswordError, setPasswordError] = useState('');
  const [ArgumentError, setArgumentError] = useState('');
  const [HasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      switch(error.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(error.message);
          break;
        case "auth/wrong-password":
          setPasswordError(error.message);
          break;
          
      };
    });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => {
      switch(error.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
        case "auth/argument-error":
          setArgumentError(error.message);
          break;

      };
    });
  }

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      } else{
        setUser('');
      }
    })
  }

  useEffect(()=>{
    authListener();
  }, [])
    

  return( 
    <div className="App">
      {user ? (
        <Fragment>
          <BrowserRouter>
            <Layout handleLogout={handleLogout}>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/stats" component={Stats} />
                <Route path="/chat" component={Chat} />
                <Route path="/luteachers" component={Luteachers} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </Fragment>
      ): (
        <Fragment>
          <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={HasAccount}
          setHasAccount={setHasAccount}
          emailError={EmailError}
          passwordError={PasswordError}
          argumentError={ArgumentError}
          />
        </Fragment>
      )}
    </div>

    // <div className="App">
    //   {user ? (
    //     <Layout handleLogout={handleLogout}>
    //       <Home/>
    //     </Layout>
    //   ) : (
    //     <Login
    //       email={email}
    //       setEmail={setEmail}
    //       password={password}
    //       setPassword={setPassword}
    //       handleLogin={handleLogin}
    //       handleSignUp={handleSignUp}
    //       hasAccount={HasAccount}
    //       setHasAccount={setHasAccount}
    //       emailError={EmailError}
    //       passwordError={PasswordError}
    //       argumentError={ArgumentError}
    //     />
    //   )}
    // </div>
      // <Fragment>
      //     <BrowserRouter>
      //             <Switch>
      //               {user} ? (
      //                 <Layout handleLogout={handleLogout}>
      //                   <Route path="/home" component={Home} />
      //                   <Route path="/stats" component={Stats} />
      //                   <Route path="/chat" component={Chat} />
      //                   <Route path="/luteachers" component={Luteachers} />
      //                 </Layout>
      //               ) : (
      //                   <Route exact path="/" render={
      //                     (props) => {
      //                       return <Login
      //                         email={email}
      //                         setEmail={setEmail}
      //                         password={password}
      //                         setPassword={setPassword}
      //                         handleLogin={handleLogin}
      //                         handleSignUp={handleSignUp}
      //                         hasAccount={HasAccount}
      //                         setHasAccount={setHasAccount}
      //                         emailError={EmailError}
      //                         passwordError={PasswordError}
      //                         argumentError={ArgumentError}
      //                       />
      //                     }
      //                   } />
      //               )
      //             </Switch>
            
      //     </BrowserRouter>
      // </Fragment>
   )

}