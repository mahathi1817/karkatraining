import React from "react";
import { useState } from "react";
export const Profile = () => {
    
    const [resetEmail, setResetEmail] = useState('');
    const [resetToken, setResetToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
    const handleForgotPassword = () => {
      // Make a request to your backend to initiate the password reset
      // You might want to show a confirmation message to the user
    };
  
    const handleResetPassword = () => {
      // Make a request to your backend to reset the password using the resetToken and newPassword
      // You might want to show a confirmation message to the user
    };
  
  return (
      <div className="App">
        <header className="App-header">
          {/* ... (your existing code) */}
          <div className="reset-password">
            <input
              type="email"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <button onClick={handleForgotPassword}>Forgot Password</button>
  
            <input
              type="text"
              placeholder="Enter reset token"
              value={resetToken}
              onChange={(e) => setResetToken(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleResetPassword}>Reset Password</button>
          </div>
        </header>
      </div>
    );
  };
