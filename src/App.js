import './App.css';
import Search from './components/Search';
import Footer from './components/Footer';
import WeatherTemperature from './components/WeatherTemperature';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Search defaultCity='Nigeria'/>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
