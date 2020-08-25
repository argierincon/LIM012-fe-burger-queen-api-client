import React from 'react';
import './assets/styles/Global.sass';
import Layout from './components/layout/Layout';
// import AdminOpc from '../src/views/adminOpc/AdminOpc';
// import Login from './views/Login/Login';
import AllUsersTable from './components/allUsersTable/All-users-table.jsx';

const App = () => {
  return (
    <Layout>
      <AllUsersTable />
    </Layout>
  );
};

export default App;
