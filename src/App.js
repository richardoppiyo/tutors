import React from 'react';
import './App.css';
import Sidebar from './features/Sidebar/Sidebar';
import Main from './features/Main/Main';

function App() {
  return (
    <div className="App">
       <div className="container">
        <Sidebar />
        <Main/>
       </div>
 
    </div>
  );
}

export default App;
