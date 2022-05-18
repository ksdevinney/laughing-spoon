// https://www.youtube.com/watch?v=I2UBjN5ER4s
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
          <Route exact path='/' />
          </Routes>
      </Router>
    </>
  );
}

export default App;
