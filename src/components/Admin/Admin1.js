import { Link } from 'react-router-dom';

const Admin1 = () => {
  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  };
  return (
    <>
      <p>Admin1 Page</p>
      <Link to='/admin'>Admin</Link>
      <br />
      <Link to='/admin2'>Admin2</Link>
      <br />
      <button onClick={Logout}>Logout</button>
    </>
  );
};
export default Admin1;
