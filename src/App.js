
import './App.css';
import Addnote from './components/Addnote';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Note from './components/Note';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Addnote />
        <Note />
        <Routes>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
