import React, { useState } from 'react';
const Login = () => {
  const [role, setRole] = useState();

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ role });
    localStorage.setItem('token', '12345');
    localStorage.setItem('id', '1');
    localStorage.setItem('name', 'me');
    localStorage.setItem('role', role);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Login</p>

      <label htmlFor='role'>Role:</label>
      <br />
      <input type='text' id='role' name='role' onChange={handleChange} />
      <br />
      <input type='submit' value='Submit' />
    </form>
  );
};
export default Login;
