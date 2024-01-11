import './App.css';
import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';
import Button from './components/Button/Button';

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
