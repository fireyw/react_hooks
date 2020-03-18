import React, { useState, useCallback } from "react";
import Popup from "reactjs-popup";

const MemberRegist = ({ history, regist }) => {
  const [memberList, setMemberList] = useState();

  const [form, setForm] = useState({});
  const { email, pwd, name, birth } = form;
  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };

  const addClick = e => {
    if (
      form.email !== undefined &&
      form.pwd !== undefined &&
      form.email !== "" &&
      form.pwd !== ""
    ) {
      if (regist(form)) {
        alert("회원가입이 완료되었습니다");
        history.push("/login");
        // if (window.confirm("회원가입하시겠습니까?")) {
        //   regist(form);
        // }
      }
    } else {
      alert("id 와 pwd는 필수 값 입니다");
    }
  };

  return (
    <>
      <section style={{ margin: "30px" }}>
        <h3>회원가입</h3>
        <div>
          <input
            type="text"
            name="email"
            placeholder="이메일 주소 입력"
            onChange={onChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="pwd"
            onChange={onChange}
            placeholder="비밀번호"
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="name"
            onChange={onChange}
            placeholder="이름"
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="birth"
            onChange={onChange}
            placeholder="생일"
          ></input>
        </div>
        <button
          onClick={() => {
            addClick();
          }}
        >
          회원 가입
        </button>

        {/* <div>
          <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
          </Popup>
        </div> */}
      </section>
    </>
  );
};

export default MemberRegist;
