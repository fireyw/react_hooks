import React, { useState } from "react";

const Write = ({ history, addWrite, writeList }) => {
  const [form, setForm] = useState({});
  const { title, content } = form;

  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };

  const onSubmit = e => {
    e.preventDefault();

    const maxLen = writeList.length;
    console.log("maxLen " + maxLen);
    const addContent = {
      no: maxLen + 1,
      title: form.title,
      content: form.content,
      date: new Date()
    };
    console.log("addContent : ", addContent);
    if (addWrite(addContent)) {
      alert("글등록완료");
      history.push("/list");
    }
  };

  return (
    <>
      <h3 style={{ margin: "15px" }}>글쓰기</h3>
      <form style={{ margin: "15px" }} onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                제목: <input name="title" onChange={onChange}></input>
              </td>
            </tr>
            <tr>
              <td>
                내용: <textarea name="content" onChange={onChange}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default Write;
