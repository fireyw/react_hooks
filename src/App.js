import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useCallback } from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/regist/Navigation";
import MemberRegist from "./components/regist/MemberRegist";
import Login from "./components/regist/Login";
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={MemberRegist} />
      <Route path="/login" component={Login} />
      {/* <Route path="/movie/:id" component={Detail} />  */}
    </HashRouter>
  );
}

export default App;
