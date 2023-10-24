import './App.css'
import Greeter from './Greeter';
import Die from './Die';
import List from './List';
import DoubleRoll from './DoubleRoll';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';


const data = [
  {name: 'eggs', quantity: 12, completed: false },
  {name: 'milk', quantity: 1, completed: true },
  {name: 'chicken', quantity: 2, completed: false },
  {name: 'carrots', quantity: 4, completed: true },
];

function App() {
  return (
    <div> 
      <ShoppingList items={data}/>
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
