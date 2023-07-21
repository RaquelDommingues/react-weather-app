import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity="Lisbon"/>
      </div>
      <footer id='git-hub-link'>
        <br />
          This project was coded by {""}
          <a 
            href='https://github.com/RaquelDommingues/react-weather-app'
            target='_blank'
          >Raquel Domingues
          </a>
        </footer>
    </div>
  );
}

export default App;
