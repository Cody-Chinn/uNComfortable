import * as React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function Root() {

  return (
    <>
      <NavBar />
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
