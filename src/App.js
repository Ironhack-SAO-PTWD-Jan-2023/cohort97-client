import { Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Students from './pages/Students';
import StudentDetails from './pages/StudentDetails';
import NewStudent from './pages/NewStudent';
import EditStudent from './pages/EditStudent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/new" element={<NewStudent />} />
        <Route path="/students/:studentId" element={<StudentDetails />} />
        <Route path="/students/:studentId/edit" element={<EditStudent />} />
      </Routes>
    </div>
  );
}

export default App;
