import { Link } from 'react-router-dom';

const Agent1 = () => {
  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  };
  return (
    <>
      <p>Agent1 Page</p>
      <Link to='/agent'>Agent</Link>
      <br />
      <Link to='/agent2'>Agent2</Link>
      <br />
      <button onClick={Logout}>Logout</button>
    </>
  );
};
export default Agent1;
