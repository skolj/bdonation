import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/js/init';

import { BrowserRouter, Route } from 'react-router-dom';
import '../style.css';
import Navbar from './Navbar';
import Landing from './Landing';
import Footer from './Footer';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />

        <Route path='/' exact component={Landing} />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
