import React, { useState } from 'react';

const LoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  return (
    <div style={{ textAlign: 'center', margin: '50px', fontFamily: 'Arial' }}>
      
      {isLoggedIn && <h2>You are logged in</h2>}
      <button 
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{ padding: '10px 20px', marginTop: '20px',cursor: 'pointer' }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default LoginStatus;
