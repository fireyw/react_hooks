import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useCallback } from "react";
// import Main from "./components/Main";
import MyComponents from "./components/MyComponents";
import Counter from "./components/Counter";
import Say from "./components/Say";
import IterationSample from "./components/hook/IterationSample";
import Average from "./components/hook/Average";
import MemberRegist from "./components/regist/MemberRegist";

function App() {
  return (
    <>
      <MemberRegist></MemberRegist>
      {/* <Counter></Counter>
      <Say></Say>
      <IterationSample></IterationSample>
      <Average></Average> */}
      {/* <Average></Average> */}
      {/* <UseEffect /> */}
      {/* <UseReducer2 /> */}
      {/* <Example></Example> */}
    </>
  );
}

export default App;
