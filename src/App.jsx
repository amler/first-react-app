import './App.css'
import Greeter from './Greeter';
import Die from './Die';
import List from './List';
import DoubleRoll from './DoubleRoll';
import Heading from './Heading';
import ColorList from './ColorList';

function App() {
  return (
    <div>
      <Heading color='magenta' text='Welcome'/>
      <Heading color='magenta' text='Another h1 for the hell of it' fontSize='30px'/>
      {/* <Greeter person="Bill"/>
      <Greeter from="Will"/>
      <Greeter/>
      <Die numSides={20}/>
      <Die/>
      <Die numSides={8}/> */}
      {/* <List values={[1,2,3]}/> */}
      <DoubleRoll/>
      <DoubleRoll/>
      <DoubleRoll/>
      <ColorList colors={["red", "pink", "orange", "lime", "blue"]} />
    </div>
  );
}

export default App;
