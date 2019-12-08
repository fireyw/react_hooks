import React, {useState, useEffect} from 'react';

function UseEffect() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [visible, setVisible] = useState(false);


    //랜더링 및 마운트때 실행
    useEffect(() => {
        console.log('effect');
        console.log(name);

        //뒷정리함수(업데이트 직전의 값을 보여준다
        return ()=>{
            console.log('cleanup');
            console.log(name);
        }
    });

    //뒤에 [] 옵션을 통해 처음 마운트 될때만 실행
    useEffect(() => {
        console.log('랜더링이 완료되었습니다');
        console.log(name, nickname)
    },[]);

    //특정 값이 변경 되었을 때 실행
    useEffect(()=>{
        console.log('name change');
    }, [name])

    const onChaneName = (e) => {
        const {
            target: {value}
        } = e;
        setName(value);
    }
    const onChangeNickname = (e) => {
        const {
            target: {value}
        } = e;
        setNickname(value);
    }
    return (<>
        <input value={name} onChange={onChaneName}/>
        <input value={nickname} onChange={onChangeNickname}/>
        <button onClick={()=>{setVisible(!visible)}}>{visible ? '보이기': '숨기기'}</button>
    </>)
}

export default UseEffect;