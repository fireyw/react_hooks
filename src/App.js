import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useCallback } from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/regist/Navigation";
import MemberRegist from "./components/regist/MemberRegist";
import Login from "./components/regist/Login";
function App() {
  const [memberList, setMemberList] = useState([
    {
      email: "",
      pwd: "",
      name: "",
      birth: ""
    }
  ]);
  //회원가입
  const regist = addList => {
    const addMember = {
      email: addList.email,
      pwd: addList.pwd,
      name: addList.name,
      birth: addList.birth
    };
    const newMemberList = memberList.concat(addMember);

    setMemberList(newMemberList);
  };
  //로그인체크
  const checkLogin = loginData => {
    console.log("loginTry: %o ", loginData);
    const loginUser = memberList.filter(member => {
      return member.email === loginData.email && member.pwd === loginData.pwd;
    });
    console.log("loginUser: %o ", loginUser);
    return loginUser.length >= 1 ? loginUser[0].email + "로그인 성공" : "실패";
  };

  return (
    <HashRouter>
      <Navigation />
      <Route
        path="/"
        exact={true}
        render={props => <MemberRegist {...props} regist={regist} />}
      />
      <Route
        path="/login"
        render={props => <Login {...props} checkLogin={checkLogin} />}
      />
      {/* <Route path="/movie/:id" component={Detail} />  */}
    </HashRouter>
  );
}

export default App;
