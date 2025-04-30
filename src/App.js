import './style.css';
import './components/Header.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard_page/Dashboard';
import Pagein from './components/pagein';
import MarketingPage from './components/marketing_page/MarketingPage';
import SignInPage from './components/sign-in_page/SignIn';
import SignUpPage from './components/sign-up_page/SignUp';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="" element={<MarketingPage/>}/>
        <Route path="/marketing" element={<MarketingPage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
