import React, {useState} from 'react';

function UseState() {
    const [count, setCount] = useState(0); //useState 는 array return
    const [email, setEmail] = useState("");
    const updateEmail = (e) => {
        const {
            target: {value}  //e.target.value 와 같은 말
        } = e;
        setEmail(value);
    }

    return (<>
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>add</button>
            <button onClick={() => setCount(count - 1)}>minus</button>
            <input placeholder="Email" value={email} onChange={updateEmail}/>
        </div>
    </>)

}

export default UseState;