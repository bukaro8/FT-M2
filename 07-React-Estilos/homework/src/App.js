import React from 'react';
import './App.css';
import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import Header from './components/header/Header'
import NavBar from './components/NavBar.jsx'
// 07-React-Estilos/homework/src/components/card/Card.jsx
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <Header style={{    height: 'inherit'}}/>
      <div style={{display:'flex',flexDirection:'column', alignItems:'space-around',height:'50vh',justifyContent:'space-around'}}>
        <Cards cities={data}/>
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
