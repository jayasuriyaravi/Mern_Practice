import ListRender from "./ListRender"
function App() {

const fruits = [
  { name: "apple", id: 1, price: 150 },
  { name: "banana", id: 2, price: 100 },
  { name: "orange", id: 3, price: 60 },
  { name: "grapes", id: 4, price: 20 },
  { name: "tomato", id: 5, price: 70 }
];

const vegetables = [
  { name: "potato", id: 1, price: 150 },
  { name: "Brinjal", id: 2, price: 100 },
  { name: "Ladies Finger ", id: 3, price: 60 },
  { name: "carrot", id: 4, price: 20 },
  { name: "beetroot", id: 5, price: 70 }
];

  return (
    <>
      {fruits.length > 0 ? <ListRender List={fruits} categories="Fruits" /> : null}{/*//conditional rendering is applied in the line for ckeck that array is available or not*/} 
      <ListRender List={vegetables} categories="Vegetable" />
    </>
  );
}

export default App
