import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';

import Layout from './components/Layout';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Login from './pages/Login';
import Chat from './pages/Chat'
import Luteachers from './pages/Luteachers'

export default function App () {
  return( 
      <Fragment>
          <BrowserRouter>
            
                  <Switch>
                        <Route exact path="/" component={Login} />
                    <Layout>
                      <Route exact path="/home" component={Home} />
                      <Route exact path="/stats" component={Stats} />
                      <Route exact path="/chat" component={Chat} />
                      <Route exact path="/luteachers" component={Luteachers} />
                    </Layout>
                  </Switch>
            
          </BrowserRouter>
      </Fragment>
   )

}