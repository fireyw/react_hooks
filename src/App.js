import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useCallback } from "react";
// import UseState from './components/UseState';
// import UseEffect from './components/UseEffect';
// import UseReducer from './components/UseReducer';
// import UseReducer2 from './components/UseReducer2';
// import UseCallback2 from "./components/UseCallback2";
import Example from "./components/Example";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div>
        <Main></Main>
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
      </div>
    </>
  );
}

export default App;
