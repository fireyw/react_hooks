import React from "react";
import { useState } from "react";

const Login = ({ checkLogin }) => {
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
    console.log(checkLogin(form));
  };
  return (
    <section style={{ margin: "30px" }}>
      <h3>로그인</h3>
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
