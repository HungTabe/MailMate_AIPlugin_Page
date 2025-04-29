import './style.css';
import './components/Header.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Pagein from './components/pagein';
import MarketingPage from './components/marketing_page/MarketingPage';
import SignInPage from './components/sign-in_page/SignIn';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="" element={<MarketingPage/>}/>
        <Route path="/marketing" element={<MarketingPage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
