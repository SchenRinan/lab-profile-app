import './App.css';
import IsLoggedIn from './components/isLoggedin';
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
          <Route path='/' element={<IsLoggedIn><Homepage/></IsLoggedIn>}/>
          <Route path='/signup' element={<IsLoggedIn><Signup/></IsLoggedIn>} />
          <Route path='/login' element={<IsLoggedIn><Login/></IsLoggedIn>} />
          <Route path='/:_id' element={<IsOwner><Profile/></IsOwner>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
