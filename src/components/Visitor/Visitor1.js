import { Link } from 'react-router-dom';

const Visitor1 = () => {
  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  };
  return (
    <>
      <p>Visitor1 Page</p>
      <Link to='/visitor'>Visitor</Link>
      <br />
      <Link to='/visitor2'>Visitor2</Link>
      <br />
      <button onClick={Logout}>Logout</button>
    </>
  );
};
export default Visitor1;
