import { useState } from "react"

function ColorPick() {

    const [color, setcolor] = useState("");

    function colorpic(event) {
        setcolor(event.target.value)
    }

    return (
        <div className="con">
            <div className="box" style={{ backgroundColor: color }}>{color}helooooo</div>
            <input type="color" value={color} onChange={colorpic} />
        </div>
    );
}

export default ColorPick