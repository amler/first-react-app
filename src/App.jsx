import './App.css'
// import Greeter from './Greeter';
// import Die from './Die';
// import List from './List';
// import DoubleRoll from './DoubleRoll';
// import Heading from './Heading';
// import ColorList from './ColorList';
// import Slots from './Slots';
// import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';

// const data = [
//   {name: 'eggs', quantity: 12, completed: false },
//   {name: 'milk', quantity: 1, completed: true },
//   {name: 'chicken', quantity: 2, completed: false },
//   {name: 'carrots', quantity: 4, completed: true },
// ];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <div> 
      <PropertyList properties={properties} />
      {/* <ShoppingList items={data}/> */}
      {/* <Slots val1="🔔" val2="💩" val3="🍒"/> */}
      {/* <Heading color='magenta' text='Welcome'/>
      <Heading color='magenta' text='Another h1 for the hell of it' fontSize='30px'/> */}
      {/* <Greeter person="Bill"/>
      <Greeter from="Will"/>
      <Greeter/>
      <Die numSides={20}/>
      <Die/>
      <Die numSides={8}/> */}
      {/* <List values={[1,2,3]}/> */}
      {/* <DoubleRoll/>
      <DoubleRoll/>
      <DoubleRoll/>
      <ColorList colors={["red", "pink", "orange", "lime", "blue"]} /> */}
    </div>
  );
}

export default App;
