import { Link } from 'react-router-dom';

const Admin = () => {
  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  };
  return (
    <>
      <p>Admin Page</p>
      <Link to='/admin1'>Admin1</Link>
      <br />
      <Link to='/admin2'>Admin2</Link>
      <br />
      <button onClick={Logout}>Logout</button>
    </>
  );
};
export default Admin;
