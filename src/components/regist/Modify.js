import React, { useState, useEffect } from "react";

const Modify = ({ match, writeList }) => {
  console.log("match : ", match);
  console.log("match : ", match.params);
  const [form, setForm] = useState({});
  const { title, content } = form;
  const [modifyList, setModifyList] = useState("");

  useEffect(() => {
    const modifyCheck = writeList.filter(list => {
      return list.no == match.params.no;
    });
    console.log("modifyCheck : %o", modifyCheck);
    if (modifyCheck.length >= 1) {
      setModifyList(modifyCheck[0]);
    }
  }, []);

  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };

  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <h3 style={{ margin: "15px" }}>글수정</h3>
      <div>
        <ul>
          <li>NO : {modifyList.no}</li>
        </ul>
        {/* <tr>
          <td>수정날짜</td>
        </tr> */}
      </div>
      <form style={{ margin: "15px" }} onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                제목:{" "}
                <input
                  name="title"
                  value={modifyList.title}
                  onChange={onChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                내용:{" "}
                <textarea
                  name="content"
                  value={modifyList.content}
                  onChange={onChange}
                ></textarea>
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

export default Modify;
