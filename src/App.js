import './style.css';
import './components/Header.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Pagein from './components/pagein';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="" element={<Pagein/>}/>
      </Routes>
    </Router>
  );
}

export default App;
