import './App.css'
import Greeter from './Greeter';
import Die from './Die';

function App() {
  return (
    <div>
      {/* <Greeter person="Bill" from="Heather"/>
      <Greeter person="Ted!" from="Will"/> */}
      <Die numSides={20}/>
      <Die numSides={10}/>
      <Die numSides={8}/>

    </div>
  ) 
}

export default App
