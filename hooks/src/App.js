import logo from './logo.svg';
import './App.css';
import StateCount from './UseState/StateCount';
import StateField from './UseState/StateField';
import EjempReducer from './UseReducer/EjempReducer';
import EjUseEffect from './UseEffect/EjUseEffect';
import Navegador from './Navegacion/Navegador';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Navegacion/Home';
function App() {
  return (
    <div className="App">

      {/* <StateCount /> */}
      {/* <StateField /> */}
      {/* <EjempReducer /> */}

      {/* <EjUseEffect /> */}
      <Navegador />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<main style={{ padding: "1rem" }}><p>Esta Pagina no Existe!</p></main>} />
      </Routes>
    </div>
  );
}

export default App;
