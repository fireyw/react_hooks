import React from "react";
import { useState } from "react";

const Login = ({ checkLogin }) => {
  const [isLogin, setIsLogin] = useState("로그인");
  const [form, setForm] = useState({
    email: "",
    pwd: ""
  });

  const { email, pwd } = form;

  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };

  const onLogin = () => {
    const loginUser = checkLogin(form)[0];
    setIsLogin(
      loginUser.email == undefined || loginUser.email == ""
        ? "로그인"
        : loginUser.name + "님"
    );
  };
  return (
    <section style={{ margin: "30px" }}>
      <h3>{isLogin}</h3>
      <div>
        <input
          type="text"
          name="email"
          onChange={onChange}
          placeholder="아이디"
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="pwd"
          onChange={onChange}
          placeholder="패스워드"
        ></input>
      </div>
      <button onClick={onLogin}>로그인</button>
    </section>
  );
};

export default Login;
