import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app.jsx';
import HomeController from '../home/home.controller.jsx';
import ImagesController from '../images/images.controller.jsx';
import NotFoundPage from '../shared/components/not-found-page.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeController}/>
    <Route path="images" component={ImagesController}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
