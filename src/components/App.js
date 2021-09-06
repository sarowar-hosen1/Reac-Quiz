import React from 'react';
import "../styles/App.css";
import Layout from './Layout';

import Home from '../pages/Home';
import Signup from '../pages/Signup';

const App = () => {
  return (
    <Layout>
      {/* <Home /> */}
      <Signup />
    </Layout>
  );
};

export default App;