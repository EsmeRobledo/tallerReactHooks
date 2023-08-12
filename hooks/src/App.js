import logo from './logo.svg';
import './App.css';
import StateCount from './UseState/StateCount';
import StateField from './UseState/StateField';
import EjempReducer from './UseReducer/EjempReducer';
import EjUseEffect from './UseEffect/EjUseEffect';
import Navegador from './Navegacion/Navegador';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">

      {/* <StateCount /> */}
      {/* <StateField /> */}
      {/* <EjempReducer /> */}

      {/* <EjUseEffect /> */}
      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
