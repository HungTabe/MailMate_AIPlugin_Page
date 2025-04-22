// src/components/Dashboard.js
import React, { useEffect } from 'react';
import Header from './Header';  // Import Header component


const Dashboard = () => {

  // Gọi API và xử lý chuyển hướng khi trang tải xong
  useEffect(() => {

    // Hàm tạo độ trễ
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    const fetchToken = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/getToken', {
            credentials: 'include', // Đảm bảo session cookie được gửi
          });
  
          if (!response.ok) {
            throw new Error('❌ Không thể lấy token.');
          }
  
          const data = await response.json();
          
          if (data) {
            console.log("✅ Token nhận được:", data);
            localStorage.setItem('gmail_token_dashboard', data.token.access_token);  // Lưu token vào sessionStorage

            // Delay 3 giây trước khi chuyển hướng đến Gmail
            await delay(5000); // 5 giây
  
            // Sau khi nhận token, chuyển hướng đến Gmail
            window.location.href = 'https://mail.google.com/';
          } else {
            console.error("❌ Không tìm thấy token.");
          }
      } catch (error) {
        console.error("❌ Lỗi khi lấy token:", error);
      }
    };

    fetchToken();
  }, []);  // Chỉ gọi một lần khi trang Dashboard tải

  return (
    <div className="dashboard-container">
      <Header />

      <section className="content">
        <h1 className="headline">Save 4 hours per person every single week</h1>
        <p className="subheadline">
          MAILMate is the most productive email app ever made. Collaborate
          faster and get more done with AI-powered email.
        </p>
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
        <button className="get-started-btn-hero">Get Started</button>
      </section>

      {/* <footer className="footer">
        <p>&copy; 2025 MAILMate. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
};

export default Dashboard;
