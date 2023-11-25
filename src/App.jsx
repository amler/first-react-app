import './App.css'
// import Greeter from './Greeter';
// import Die from './Die';
// import List from './List';
// import DoubleRoll from './DoubleRoll';
// import Heading from './Heading';
// import ColorList from './ColorList';
// import Slots from './Slots';
// import ShoppingList from './ShoppingList';
// import PropertyList from './PropertyList';
// import Clicker from './Clicker';
// import Form from './Form';
import Counter from './Counter';
import Toggler from './Toggler';
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
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
