function execute(){
    var name = document.getElementById("name").value;
    var result = document.getElementById("result")
    var url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        result.innerHTML=`
            <img src="${data[0].flags.svg}" alt="">
            <h2>${data[0].name.common}</h2>
            <div class="data">
                <div class="value">
                  <p> <b>Capital: </b>${data[0].capital[0]}</p>
                </div>
                <div class="value">
                    <p>
                    <h3>Continent: </h3>${data[0].continents[0]}</p>
                </div>
                <div class="value">
                    <p>
                    <h3>Population: </h3>${data[0].population[0]}</p>
                </div>
            </div>
        `;
    })

    .catch(()=>{
        if(name.length == 0){
            result.innerHTML=`<h3>the input feild cannot be empty</h3>`;
        }
        else{
            result.innerHTML=`<h3>please enter the valid country name</h3>`;
        }

    });

}