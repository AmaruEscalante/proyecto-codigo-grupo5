import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';

import Layout from './components/Layout';
import Home from './pages/Home';

export default function App () {
  return( 
      <Fragment>
          <BrowserRouter>
              <Layout>
                  <Switch>
                      <Route path="/" component={Home} />
                  </Switch>
              </Layout>
          </BrowserRouter>
      </Fragment>
   )

}