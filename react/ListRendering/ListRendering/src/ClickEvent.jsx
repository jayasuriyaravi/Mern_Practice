
// import React,{useState} from "react";
import {useState} from "react";
function ClickEvent() {

    // const run = () => console.log("haii iam jayasuriya"); //without any parameters
    // const run = (name) => console.log(`haiii iam ${name}`); //with using parameters,use callback function in onclick function



    //printing the count in the console and usig the conditions

    // let count = 0;
    // const run = () => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log('oops');
    //     }
    // }


    const run = (e) => e.target.textContent ="OUCH!!!!!";  // CHANGING THE TEXT CONTENT IN THE BUTTON


    // let age=1;
    const [age,setage]=useState(0);

    const incr = () =>{
        setage(age+1);
        console.log(age);
    }

    return (
        <div className="btncon">
            <button className="btn" onClick={(e) => run(e)}> Click me</button>
            <h1>Age:{age}</h1>
            <button className="btn" onClick={incr}>Increment</button>
        </div>
    );
}
export default ClickEvent