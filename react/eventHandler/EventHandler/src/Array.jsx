import { useState } from "react";

function Array() {
    const [food, setfood] = useState([]);

    const list = food.map((f, index) => <li key={index} onClick={() => remove(index)}>{f}</li>);

    function addfood() {
        const newfood = document.getElementById("Addfood").value;
        document.getElementById("Addfood").value = "";
        setfood(f => [...f, newfood]);
    }

    function remove(index) {
        setfood(food.filter((_, i) => i != index));
    }



    return (
        <>
            <ul>{list}</ul>
            <input type="text" id="Addfood" placeholder="addfoods"  />
            <button onClick={addfood}>Add Food</button>
        </>
    );
}
export default Array