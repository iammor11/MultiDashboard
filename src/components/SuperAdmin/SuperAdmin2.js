import { Link } from 'react-router-dom';

const SuperAdmin2 = () => {
  const Logout = (e) => {
    e.preventDefault();
    console.log('object');

    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  };
  return (
    <>
      <p>SuperAdmin2 Page</p>
      <Link to='/SuperAdmin'>SuperAdmin</Link>
      <br />
      <Link to='/SuperAdmin1'>SuperAdmin1</Link>
      <br />
      <button onClick={Logout}>Logout</button>
    </>
  );
};
export default SuperAdmin2;
