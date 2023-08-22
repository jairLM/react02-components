
import './App.css';
import Generation from './components/generation';
import Greeting from './components/greeting';//importamos una funcion que se exporto como default
import Parrafo from './components/parrafo';//importamos una funcion que se exporto como default

function App() {
  return (
    <div className="App">
      <Greeting />
      <Parrafo /> 
      <Generation/>
    </div>
  );
}

export default App;
