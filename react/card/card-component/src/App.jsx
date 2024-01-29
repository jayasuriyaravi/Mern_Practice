import Card from "./Card.jsx"
import ConditionalRendering from "./ConditionRendering.jsx";

function App() {
  return (
    <>
      <Card Heading="Jaya" DOB= "2003"></Card>
      <Card Heading="Surya" DOB={2004}></Card>
      <Card Heading="Mohan" DOB={2002}></Card>
      <Card Heading="Mukilan" DOB={2005}></Card>
      <Card></Card>
      <ConditionalRendering isloggedin={true} Name="ConditionalRendering"></ConditionalRendering>
    </>
  );
}

export default App
