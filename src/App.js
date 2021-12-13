import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useCallback } from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/regist/Navigation";
import MemberRegist from "./components/regist/MemberRegist";
import Login from "./components/regist/Login";
import Write from "./components/regist/Write";
import List from "./components/regist/List";
import Modify from "./components/regist/Modify";
import CounterContainer from "./containers/CounterContainer";

function App() {
  const [memberList, setMemberList] = useState([
    {
      email: "1",
      pwd: "2",
      name: "3",
      birth: "4"
    }
  ]);
  const [writeList, setWriteList] = useState([
    {
      no: 1,
      title: "제목",
      content: "내용",
      date: new Date()
    }
  ]);
  //글 등록
  const addWrite = addList => {
    const addWriting = {
      no: addList.no,
      title: addList.title,
      content: addList.content,
      date: addList.date
    };
    const newWriteList = writeList.concat(addWriting);
    setWriteList(newWriteList);
    console.log("글 등록 완료");
    return true;
  };
  //글 수정
  const modifyWrite = () => {
    console.log("modify call");
  };
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
      <CounterContainer/>
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
        <Route
          path="/write"
          render={props => (
            <Write {...props} addWrite={addWrite} writeList={writeList} />
          )}
        />
        <Route
          path="/list"
          render={props => <List {...props} writeList={writeList} />}
        />
        <Route
          path="/modify/:no"
          render={props => <Modify {...props} writeList={writeList} />}
        />
        {/* <Route path="/movie/:id" component={Detail} />  */}
      </HashRouter>
    </>
  );
}

export default App;
