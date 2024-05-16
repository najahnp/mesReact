
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './COMPONETS/Login';
import Navbar from './COMPONETS/Navbar';

import Signup from './COMPONETS/Signup';
import Register from './COMPONETS/Register';
import StateBasics from './COMPONETS/StateBasics';
import Counter from './COMPONETS/Counter';
import Use from './COMPONETS/Use';
import Viewdata from './COMPONETS/Viewdata';

function App() {
  return (
    <div className="App">
  
      {/* <Login/> */}
      {/* <Signup/> */}
      <Navbar/>
        <Routes>
         <Route path='/reg' element={<Register/>}/>
         <Route path='/u' element={<StateBasics/>}/>
         <Route path='/c' element={<Counter/>}/>
         <Route path='/n' element={<Use/>}/>
         <Route path='/v' element={<Viewdata/>}/>
        </Routes>
        
    
    </div>
  );
}

export default App;
