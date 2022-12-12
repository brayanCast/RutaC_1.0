import './App.css';
import Menu from './componentes/Menu'
import {BrowserRouter, Route, Routes} from "react-router-dom" 
import  Login  from './componentes/Login'
import Logout from './componentes/Logout'


function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Menu/>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </BrowserRouter> 
      </div>
    </div>
  );
}
export default App;
