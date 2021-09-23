import { Link } from 'react-router-dom';

const SuperAdmin1 = () => {
  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  };
  return (
    <>
      <p>SuperAdmin1 Page</p>
      <Link to='/SuperAdmin'>SuperAdmin</Link>
      <br />
      <Link to='/SuperAdmin2'>SuperAdmin2</Link>
      <br />
      <button onClick={Logout}>Logout</button>
    </>
  );
};
export default SuperAdmin1;
