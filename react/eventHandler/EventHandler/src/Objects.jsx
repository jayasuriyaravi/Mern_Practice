import { useState } from "react";

function Objects() {

    const [car,setcar]=useState({year:2024,make:"Ford",model:"Mustang"});
    // setcar({year:2025,make:"for"});
    function year(event){
        // setcar(event.target.value);
        setcar(c=>({...c,year:event.target.value}));
    }

    function model(event) {
        // setcar(event.target.value);
        setcar(c => ({ ...c, model: event.target.value }));
    }

    return (
        <div>
            <h1>my fav car {car.model} in {car.year}</h1>
            <input type="number" value={car.year} onChange={year}/>
            <input type="text" value={car.model} onChange={model} />
        </div>
    );
}
export default Objects