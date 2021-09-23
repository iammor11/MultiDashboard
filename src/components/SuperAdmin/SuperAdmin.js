import { Link } from 'react-router-dom';

const SuperAdmin = () => {
  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  };
  return (
    <>
      <p>SuperAdmin Page</p>
      <Link to='/superAdmin1'>SuperAdmin1</Link>
      <br />
      <Link to='/superAdmin2'>SuperAdmin2</Link>
      <br />
      <button onClick={Logout}>Logout</button>
    </>
  );
};
export default SuperAdmin;
