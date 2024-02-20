import { useState,createContext } from "react";
import Usecontext2 from "./Usecontext2";

export const UserCont = createContext();
function Usecontext1(){

    const [user,setuser]=useState("suriya");

    return(
        <div className="box">
            <p>Usecontext1</p>
            <h1>{`hello...!!!${user}`}</h1>
            <UserCont.Provider value={user}>
            <Usecontext2 user='{user}'></Usecontext2>
            </UserCont.Provider>
        </div>
    );
}

export default Usecontext1