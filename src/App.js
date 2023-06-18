import './App.css';
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by {""}
          <a 
            href='https://github.com/RaquelDommingues/react-weather-app'
            target='_blank'
          >Raquel Domingues
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
