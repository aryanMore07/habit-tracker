
import { Route, Routes } from 'react-router';
import './App.css';
import LandingComponent from './pages/landingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingComponent />} />
        {/* <Route path='/habit/:habitId' element={<LandingComponent />} /> */}
      </Routes>
    </div>
  );
}

export default App;
