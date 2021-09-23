import { Link } from 'react-router-dom';

const Agent2 = () => {
  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  };
  return (
    <>
      <p>Agent2 Page</p>
      <Link to='/agent1'>Agent1</Link>
      <br />
      <Link to='/agent'>Agent</Link>
      <br />
      <button onClick={Logout}>Logout</button>
    </>
  );
};
export default Agent2;
