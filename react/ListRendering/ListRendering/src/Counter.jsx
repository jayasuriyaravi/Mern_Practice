import { useState } from "react";

function Counter() {

    const [count, setcont] = useState(0);

    const inc = () => {
        setcont(count + 1);
    }
    const dec = () => {
        setcont(count - 1);
    }
    const reset = () => {
        setcont(0);
    }



    return (
        <div className="Countcon">
            <h1>{count}</h1>
            <div className="btns">
                <button className="btn" onClick={dec} >Decrement</button>
                <button className="btn" onClick={reset}>Reset</button>
                <button className="btn" onClick={inc}>Increment</button>
            </div>
        </div>
    );
}
export default Counter