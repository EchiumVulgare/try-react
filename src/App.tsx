import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import AnotherScreen from './AnotherScreen';
import{ Routes, Route } from 'react-router';
import Greeting from './greeting'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/another' element={<AnotherScreen/>}></Route>
          <Route path='/greeting' element={<Greeting name='Tomasz'/>}></Route>
       </Routes>
      </header>
    </div>
  );
}

export default App;
