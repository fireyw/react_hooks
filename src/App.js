import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useCallback } from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/regist/Navigation";
import MemberRegist from "./components/regist/MemberRegist";
import Login from "./components/regist/Login";
import Write from "./components/regist/Write";
import List from "./components/regist/List";

function App() {
  const [memberList, setMemberList] = useState([
    {
      email: "1",
      pwd: "2",
      name: "3",
      birth: "4"
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
    return true;
  };
  //로그인체크
  const checkLogin = loginData => {
    const loginUser = memberList.filter(member => {
      return member.email === loginData.email && member.pwd === loginData.pwd;
    });
    return loginUser;
  };

  return (
    <>
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
        <Route path="/write" render={props => <Write />} />
        <Route path="/list" render={props => <List />} />
        {/* <Route path="/movie/:id" component={Detail} />  */}
      </HashRouter>
    </>
  );
}

export default App;
