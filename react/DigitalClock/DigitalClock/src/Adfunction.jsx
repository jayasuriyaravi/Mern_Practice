import { useState, useEffect } from "react"



function Adfunction() {


    const [width, setWidth] = useState(window.innerWidth);
    const [heigth, setHeight] = useState(window.innerHeight);

    addEventListener("resize",ChangeWidth); 

    function ChangeWidth() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return (
        <>
            <p>{width}</p>

            <p>{heigth}</p>
        </>

    );
}

export default Adfunction