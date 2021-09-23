import { Link } from 'react-router-dom';

const Agent = () => {
  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  };
  return (
    <>
      <p>Agent Page</p>
      <Link to='/agent1'>Agent1</Link>
      <br />
      <Link to='/agent2'>Agent2</Link>
      <br />
      <button onClick={Logout}>Logout</button>
    </>
  );
};
export default Agent;
