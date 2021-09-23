import { Link } from 'react-router-dom';

const Admin2 = () => {
  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  };
  return (
    <>
      <p>Admin2 Page</p>
      <Link to='/admin'>Admin</Link>
      <br />
      <Link to='/admin1'>Admin1</Link>
      <br />
      <button onClick={Logout}>Logout</button>
    </>
  );
};
export default Admin2;
