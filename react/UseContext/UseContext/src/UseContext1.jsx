import { useState,createContext } from "react";
import Usecontext2 from "./Usecontext2";

function Usecontext1(){

    const [user,setuser]=useState("suriya");

    return(
        <div className="box">
            <p>Usecontext1</p>
            <h1>{`hello...!!!${user}`}</h1>

            <Usecontext2 user='{user}'></Usecontext2>
        </div>
    );
}
export const  UseCont=createContext();
export default Usecontext1