import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './NavBar.jsx';
import { Provider } from 'react-redux';
import store from '../store/store.js';

function RootLayout() {
  return (
    <Provider store={store}>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </Provider>
  );
}

export default RootLayout;
