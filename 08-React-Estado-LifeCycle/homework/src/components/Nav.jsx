import React from 'react';
// import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#829191'}}>
      <div className="container-fluid">
        <h1>Weather App</h1>
        <SearchBar onSearch={onSearch}/>
      </div>
    </nav>
    </>
  );
};

export default Nav;
