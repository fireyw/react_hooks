import React, { useState, useCallback } from "react";
import Popup from "reactjs-popup";

const MemberRegist = () => {
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [name, setName] = useState();
  const [birth, setBirth] = useState();
  const [memberList, setMemberList] = useState([]);
  const regist = () => {
    const tempMember = {
      email: "fireyw@naver.com",
      pwd: "1111",
      name: "yw",
      birth: "840109"
    };

    const newMemberList = memberList.concat(tempMember);

    setMemberList(newMemberList);
  };
  const onEmailChange = useCallback(
    e => {
      setEmail(e.target.value);
    },
    [email]
  );

  const onPwdChange = useCallback(
    e => {
      setPwd(e.target.value);
    },
    [pwd]
  );
  const onNameChange = useCallback(
    e => {
      setName(e.target.value);
    },
    [name]
  );
  const onBirthChange = useCallback(
    e => {
      setBirth(e.target.value);
    },
    [birth]
  );

  return (
    <>
      <section style={{ margin: "30px" }}>
        <h3>회원가입</h3>
        <div>
          <input
            type="text"
            name="email"
            placeholder="이메일 주소 입력"
            onChange={onEmailChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="pwd"
            onChange={onPwdChange}
            placeholder="비밀번호"
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="name"
            onChange={onNameChange}
            placeholder="이름"
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="birth"
            onChange={onBirthChange}
            placeholder="생일"
          ></input>
        </div>
        <button
          onClick={() => {
            if (window.confirm("회원가입하시겠습니까?")) regist();
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
