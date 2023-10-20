import './App.css'
import Greeter from './Greeter';
import Die from './Die';

function App() {
  return (
    <div>
      <Greeter person="Bill"/>
      <Greeter from="Will"/>
      <Greeter/>
      <Die numSides={20}/>
      <Die/>
      <Die numSides={8}/>
    </div>
  );
}

export default App
