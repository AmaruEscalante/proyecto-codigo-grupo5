import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';

import Layout from './components/Layout';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Chat from './pages/Chat'

export default function App () {
  return( 
      <Fragment>
          <BrowserRouter>
              <Layout>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/stats" component={Stats} />
                      <Route exact path="/chat" component={Chat} />
                  </Switch>
              </Layout>
          </BrowserRouter>
      </Fragment>
   )

}