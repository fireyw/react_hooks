import React, {useState} from "react";
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';

function App() {

    return (<>
        <div>
            <h4>useState</h4>
            <UseState/>
            <h4>useEffect</h4>
            <UseEffect/>
        </div>
    </>)

}

export default App;
