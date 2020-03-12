import React from "react";

const MemberRegist = () => {
  return (
    <>
      <section style={{ margin: "30px" }}>
        <h3>회원가입</h3>
        <div>
          <input
            type="text"
            name="email"
            placeholder="이메일 주소 입력"
          ></input>
        </div>
        <div>
          <input type="text" name="pwd" placeholder="비밀번호"></input>
        </div>
        <div>
          <input type="text" name="name" placeholder="이름"></input>
        </div>
        <div>
          <input type="text" name="pwd" placeholder="비밀번호"></input>
        </div>
        <button>회원 가입</button>
      </section>
    </>
  );
};

export default MemberRegist;
