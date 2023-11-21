import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import WeatherApp from './WeatherApp';


const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={WeatherApp} />
    </BrowserRouter>
  );
};

export default Router;
