import { useState } from "react";

function ArrayObject() {
    const [cars, setcar] = useState([]);
    const [year, setyear] = useState(new Date().getFullYear);
    const [make, setMake] = useState();
    const [model, setmodel] = useState();

    function add() {
        const newcar = { caryear: year, carmake: make, carmodel: model };
        setcar(c => [...c, newcar]);
    }
    function YearChange(event) {
        setyear(event.target.value);
    }
    function MakeChange(event) {
        setMake(event.target.value);
    }
    function ModelChange(event) {
        setmodel(event.target.value);
    }

    const list = cars.map((x,index) => <li key={index}>{x.caryear},,,{x.carmake},,,,{x.carmodel}</li>)

    return (
        <div>
            <ul>{list}</ul>
            <input type="text" value={year} onChange={YearChange} />
            <input type="text" value={make} onChange={MakeChange} />
            <input type="text" value={model} onChange={ModelChange} />
            <button onClick={add}>Add</button>
        </div>
    );
}
export default ArrayObject