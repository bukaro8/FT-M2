import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import Contador from './components/Counter';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Contador/>
      </div>
    </Provider>
  );
}

export default App;
