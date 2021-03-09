import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Movie title={"The fellowship of the ring"} hours={2} minutes={58}/>
        <Movie title={"The Two Tower"} hours={2} minutes={59}/>
        <Movie title={"The Return of the King"} hours={3} minutes={21}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
