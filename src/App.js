import './style.css';
import './components/Header.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard_page/Dashboard';
import Pagein from './components/pagein';
import MarketingPage from './components/marketing_page/MarketingPage';
import SignInPage from './components/sign-in_page/SignIn';
import SignUpPage from './components/sign-up_page/SignUp';
import MailmateBotPage from './components/dashboard_page/sub_dashboard_page/MAILMate_Bot_page/MAILMate_Bot_page';
import MailmateAgentPage from './components/dashboard_page/sub_dashboard_page/MAILMate_Agent_page/MAILMate_Agent_page';
import MailmateSchedulePage from './components/dashboard_page/sub_dashboard_page/MAILMate_Schedule_page/MAILMate_Schedule_page';






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="" element={<MarketingPage/>}/>
        <Route path="/marketing" element={<MarketingPage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/bot" element={<MailmateBotPage/>}/>
        <Route path="/agent" element={<MailmateAgentPage/>}/>
        <Route path="/schedule" element={<MailmateSchedulePage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
