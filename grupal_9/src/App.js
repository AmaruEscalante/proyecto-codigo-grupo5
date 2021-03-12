import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';

import Layout from './components/Layout';
import Home from './pages/Home';
import Stats from './pages/Stats';
<<<<<<< HEAD
import Login from './pages/Login';
=======
import Chat from './pages/Chat'
import Luteachers from './pages/Luteachers'
>>>>>>> 32764a41b96f8f5202169f9937df90823a599b16

export default function App () {
  return( 
      <Fragment>
          <BrowserRouter>
            <Layout>
                  <Switch>
<<<<<<< HEAD
                        <Route exact path="/" component={Login} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/stats" component={Stats} />
=======
                      <Route exact path="/" component={Home} />
                      <Route exact path="/stats" component={Stats} />
                      <Route exact path="/chat" component={Chat} />
                      <Route exact path="/luteachers" component={Luteachers} />
>>>>>>> 32764a41b96f8f5202169f9937df90823a599b16
                  </Switch>
            </Layout>
          </BrowserRouter>
      </Fragment>
   )

}