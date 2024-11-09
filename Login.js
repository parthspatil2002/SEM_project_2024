import React, { useState } from 'react';

function Login() {
  const [role, setRole] = useState('student');

  const handleLogin = () => {
    if (role === 'student') {
      window.location.href = '/feedback';
    } else if (role === 'admin') {
      window.location.href = '/admin';
    } else if (role === 'staff') {
      window.location.href = '/staff';
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
        <option value="staff">Staff</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
