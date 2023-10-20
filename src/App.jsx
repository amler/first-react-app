import './App.css'
import Greeter from './Greeter';
import Die from './Die';
import List from './List';
import DoubleRoll from './DoubleRoll';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
