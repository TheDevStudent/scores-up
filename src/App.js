import './App.css';
import DashBoard from './DashBoard';
import NewGame from './NewGame';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<DashBoard/>} />
          <Route path="/new-game" element={<NewGame/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
