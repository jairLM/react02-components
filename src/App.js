
import './App.css';
import Generation from './components/generation';
import Greeting from './components/greeting';//importamos una funcion que se exporto como default
import { NavBar, Footer } from './components/navBar/navBar';
import Parrafo from './components/parrafo';//importamos una funcion que se exporto como default

function App() {
  return (
    <div className="App">      
      <NavBar/>
      <Greeting />
      <Parrafo /> 
      <Generation/>
      <Footer/>
    </div>
  );
}

export default App;
