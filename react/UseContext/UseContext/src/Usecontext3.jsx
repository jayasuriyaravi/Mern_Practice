import { useContext } from "react";
import { UserCont } from "./UseContext1"; 

function Usecontext3() {

    const user = useContext(UserCont);

        return (
            <div className="box">
                <p>Usecontext3</p>
                <p>{`${user}`}</p>
            </div>
        );
    }
export default Usecontext3