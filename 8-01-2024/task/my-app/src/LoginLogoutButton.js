import React, { useState } from 'react';

const LoginLogoutButton = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, User!</p>
          <button onClick={handleLoginLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLoginLogout}>Login</button>
      )}
    </div>
  );
};

export default LoginLogoutButton;
