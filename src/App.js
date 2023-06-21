
import './App.css';
import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import LandingComponent from './pages/landingPage/LandingPage';
import IndividualHabitPage from './pages/individualHabitPage/IndividualHabitPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingComponent />} />
        <Route path='/habit/:habitId' element={<IndividualHabitPage />} />
      </Routes>
    </div>
  );
}

export default App;
