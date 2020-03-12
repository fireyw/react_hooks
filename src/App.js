import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useCallback } from "react";
// import UseState from './components/UseState';
// import UseEffect from "./components/UseEffect";
// import UseReducer2 from "./components/UseReducer2";
// import UseReducer2 from './components/UseReducer2';
// import UseCallback2 from "./components/UseCallback2";
// import Example from "./components/Example";
import Main from "./components/Main";
import MyComponents from "./components/MyComponents";
import Counter from "./components/Counter";
import Say from "./components/Say";
import IterationSample from "./components/hook/IterationSample";
import Average from "./components/hook/Average";

function App() {
  return (
    <>
      {/* <Main></Main> */}
      <MyComponents name={3}>자식</MyComponents>
      <Counter></Counter>
      <Say></Say>
      <IterationSample></IterationSample>
      <Average></Average>
      {/* <Average></Average> */}
      {/* <UseEffect /> */}
      {/* <UseReducer2 /> */}
      {/* <Example></Example> */}
    </>
  );
}

export default App;
