
import './App.css';
import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import LandingComponent from './pages/landingPage/LandingPage';
import IndividualHabitPage from './pages/individualHabitPage/IndividualHabitPage';
import Navbar from './components/navbar/Navbar';
import ArchiveComponent from './pages/archivePage/ArchiveComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingComponent />} />
        <Route path='/archive' element={<ArchiveComponent />} />
        <Route path='/bin' />
        <Route path='/habit/:habitId' element={<IndividualHabitPage />} />
        <Route path='/*' element={<h1>404:) not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
