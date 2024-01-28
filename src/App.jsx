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
        <div style={{backgroundColor: '#eee', padding: '2rem' }}>
          <Button>
            Click it or ticket
          </Button>
          <Button theme="outline">Outline</Button>
          <Button Icon={Plus}>Add</Button>
        </div>
      </main>
    </>
  );
}

export default App;
