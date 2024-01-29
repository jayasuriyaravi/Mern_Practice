import PropTypes from 'prop-types';

function ListRender(props) {

    // const fruits=["apple","banana","orange","grapes","tomato"];//array of element

    // const fruits = [{ name: "apple", id: 1, price: 150 },
    // { name: "banana", id: 2, price: 100 },
    // { name: "orange", id: 3, price: 60 },
    // { name: "grapes", id: 4, price: 20 },
    // { name: "tomato", id: 5, price: 70 }];


    // const listItems= fruits.map(x => <li key={x.id}> {x.name} </li>);//this x store the array element one by one and displays the output

    //sort function is uses the array 
    //sort has the 2 parameter a,b which used to compare

    // fruits.sort((a,b) =>a.name.localeCompare(b.name));// alphabatic order
    // fruits.sort((a, b) => b.name.localeCompare(a.name));// reverse alphabatic order
    // fruits.sort((a, b) => b.price-a.price);// decending order
    // fruits.sort((a, b) => a.price - b.price);// decending order

    //   const Item= fruits.filter(x=>x.price<=100); //filter method gives us a another array 
    //   const ListItems = Item.map(x => <li key={x.id}> {x.name} <b>{x.price}</b> </li>);//this x store the array element one by one and displays the output


    //now we go to do with list render using the props

    const List = props.List;
    const categories=props.categories;

    const ListItems = List.map(x => <li key={x.id}> {x.name} <b>{x.price}</b></li>)



    return (
        // friuts------it display like a string in singlre line
        <div className='container'>
            <h1 className='cat'>{categories}</h1>
            <ol className='order'>{ListItems}</ol>
        </div>
    )
}

ListRender.propTypes={
    categories : PropTypes.String,
    List: PropTypes.array,
}
ListRender.defaultProps = {
    categories:"categoies",
    List:[],
}




export default ListRender