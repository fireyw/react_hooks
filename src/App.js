import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useCallback } from "react";
// import UseState from './components/UseState';
// import UseEffect from './components/UseEffect';
// import UseReducer from './components/UseReducer';
// import UseReducer2 from './components/UseReducer2';
// import UseCallback2 from "./components/UseCallback2";
// import Example from "./components/Example";
import Main from "./components/Main";
import MyComponents from "./components/MyComponents";
import Counter from "./components/Counter";
import Say from "./components/Say";

function App() {
  return (
    <>
      <Main></Main>
      <MyComponents name={3}>자식</MyComponents>
      <Counter></Counter>
      <Say></Say>
      {/* <Example></Example> */}
      {/* <h4>useState</h4>
            <UseState/>
            <h4>useEffect</h4>
            <UseEffect/>
            <h4>UseReducer</h4>
            <UseReducer/>
            <h4>UseReducer2</h4>
            <UseReducer2/> 
            <UseCallback2></UseCallback2>*/}
    </>
  );
}

export default App;
