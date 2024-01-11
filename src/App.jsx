import './App.css';
import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';
import Button from './components/Button/Button';
import Plus from './components/Icons/Plus';
import Home from './components/Icons/Home';

function App() {
  return (
    <>
     <Header/>
      <main>
        <CoreConcepts/>
        <Examples />
        <Button>
          Click it or ticket
        </Button>
      </main>
    </>
  );
}

export default App;
