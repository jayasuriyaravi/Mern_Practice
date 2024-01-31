import React, { useState } from "react"

function Event() {

    const [name, setname] = useState("Name");
    const [num, setnum] = useState("222");
    const [text, settext] = useState("haiiiii!!!!");
    const [select, setopt] = useState("jayasuriya")


    function NameChange(event) {
        setname(event.target.value);
    }

    function NumChange(event) {
        setnum(event.target.value);
    }

    function textChange(event) {
        settext(event.target.value);
    }

    function selectChange(event) {
        setopt(event.target.value);
    }



    return (
        <div>
            <input type="text" onChange={NameChange} />
            <br />
            <p>{name}</p>

            <input type="number" value={num} onChange={NumChange} />
            <p>{num}</p>

            <textarea name="" value={text} id="" cols="30" rows="10" onChange={textChange}></textarea>
            <p>{text}</p>


            <select name="Friends" value={select} id="" onChange={selectChange}>
                <option value="Mukilan">select one</option>
                <option value="Mohan">Mohan</option>
                <option value="Mathavan">Mathavan</option>
                <option value="Jayasuriya">Jayasuriya</option>
                <option value="jegan">Jegan</option>
                <option value="ligesh">Ligesh</option>
            </select>
            <p>{select}</p>

        </div>
    );

}
export default Event