
import './App.css';
import CounterPague from './components/counter/counter-page';
import Generation from './components/generation';
import Greeting from './components/greeting';//importamos una funcion que se exporto como default
import { NavBar, Footer } from './components/navBar/navBar';
import Parrafo from './components/parrafo';//importamos una funcion que se exporto como default

function App() {
  return (
    <div>      
      <NavBar/>
      <CounterPague/>
      {/* <Greeting />
      <Parrafo /> 
      <Generation/>
      <Footer/> */}
    </div>
  );
}

export default App;
