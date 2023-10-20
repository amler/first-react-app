import './App.css'
import Greeter from './Greeter';
import Die from './Die';
import List from './List';

function App() {
  return (
    <div>
      {/* <Greeter person="Bill"/>
      <Greeter from="Will"/>
      <Greeter/>
      <Die numSides={20}/>
      <Die/>
      <Die numSides={8}/> */}
      <List values={[1,2,3]}/>
      
    </div>
  );
}

export default App;
