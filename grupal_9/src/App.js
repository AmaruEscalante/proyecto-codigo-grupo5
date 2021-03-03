import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';

import Layout from './components/Layout';

export default function App () {
  return( 
      <Fragment>
          <BrowserRouter>
              <Layout>
                  <Switch>
                      <Route path="/"/>
                  </Switch>
              </Layout>
          </BrowserRouter>
      </Fragment>
   )

}