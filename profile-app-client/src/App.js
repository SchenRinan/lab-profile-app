import './App.css';
import IsOwner from './components/isOwner';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/:_id' element={<IsOwner><Profile/></IsOwner>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
