import {
  Route,
  Routes
} from 'react-router-dom';
import MainApp from './MainApp';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import './App.css';
import Booking from './pages/Booking';


function App() {
  return (
    <MainApp>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/menu' />
        <Route path='/reservations' element={<Booking />} />
        <Route path='/order' />
        <Route path='/login' />
      </Routes>
    </MainApp>  
  );
}

export default App;
