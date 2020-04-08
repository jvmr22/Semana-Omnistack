
import React from 'react';
// import React, { useState } from 'react';
// import Header from './Header';
// Ele apaga o header, mas eu vou deixar de aprendizado sobre estados

// import Logon from './pages/Logon'

import Routes from './routes'
import './global.css';
// import Logon from './pages/Logon';
// i mport { Route } from 'react-router';

function App() {
  // const [counter, setCounter_mystate] = useState(0);

  // function increment(){
  //   setCounter_mystate(counter+1)
  // }
  
  // return (
  //   // <h1>Hello World!</h1>
  //   // <Header title="Semana Omnistack" />
  //   <div>
  //     {/* <Header>Semana Omnistack</Header>
  //     <Header> Countador:{counter}</Header> */}
  //     {/* <button onClick={increment}> Increment </button> */}
  //     <div><Logon></Logon></div>
  //   </div>

  // );
  return(
    <Routes />
  )
}

export default App;
