import React from 'react';
import './assets/styles/Global.sass';
import Layout from './components/layout/Layout';
import Login from './components/containers/Login'

const App = () => {
  return (
    <>
      <Layout>
        <Login />
      </Layout>
    </>
  );
};

export default App;
