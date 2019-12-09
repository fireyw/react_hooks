import React, {useState} from "react";
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseReducer from './components/UseReducer';
import UseReducer2 from './components/UseReducer2';

function App() {

    return (<>
        <div>
            <h4>useState</h4>
            <UseState/>
            <h4>useEffect</h4>
            <UseEffect/>
            <h4>UseReducer</h4>
            <UseReducer/>
            <h4>UseReducer2</h4>
            <UseReducer2/>
        </div>
    </>)

}

export default App;
