import { Link } from 'react-router-dom';

const Visitor2 = () => {
  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  };
  return (
    <>
      <p>Visitor2 Page</p>
      <Link to='/visitor'>Visitor</Link>
      <br />
      <Link to='/visitor1'>Visitor1</Link>
      <br />
      <button onClick={Logout}>Logout</button>
    </>
  );
};
export default Visitor2;
