import './style.css';
import './components/Header.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard_page/Dashboard';
import MarketingPage from './components/marketing_page/MarketingPage';
import SignInPage from './components/sign-in_page/SignIn';
import SignUpPage from './components/sign-up_page/SignUp';
import MailmateBotPage from './components/dashboard_page/sub_dashboard_page/MAILMate_Bot_page/MAILMate_Bot_page';
import MailmateAgentPage from './components/dashboard_page/sub_dashboard_page/MAILMate_Agent_page/MAILMate_Agent_page';
import MailmateSchedulePage from './components/dashboard_page/sub_dashboard_page/MAILMate_Schedule_page/MAILMate_Schedule_page';
import MailmateMailPage from './components/dashboard_page/sub_dashboard_page/MAILMate_Mail_page/MAILMate_Mail_page';
import MailmateExtraServicePage from './components/dashboard_page/sub_dashboard_page/MAILMate_ExtraService_page/MAILMate_ExtraService_page';
import MailmateCheckoutPage from  './components/dashboard_page/sub_dashboard_page/MAILMate_Checkout_page/MAILMate_Checkout_page';
import TransactionSuccess from './components/transaction_page/success_page/TransactionSuccess';
import TransactionCancel from './components/transaction_page/cancel_page/TransactionCancel';




import { AuthProvider } from "./hook/authContext/AuthContext";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="" element={<MarketingPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/bot" element={<MailmateBotPage />} />
          <Route path="/payment" element={<MailmateCheckoutPage />} />
          <Route path="/schedule" element={<MailmateSchedulePage />} />
          <Route path="/mail" element={<MailmateMailPage />} />
          <Route path="/extra" element={<MailmateExtraServicePage />} />
          <Route path="/success" element={<TransactionSuccess />} />
          <Route path="/cancel" element={<TransactionCancel />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
