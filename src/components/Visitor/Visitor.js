import { Link } from 'react-router-dom';

const Visitor = () => {
  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  };
  return (
    <>
      <p>Visitor Page</p>
      <Link to='/visitor1'>Visitor1</Link>
      <br />
      <Link to='/visitor2'>Visitor2</Link>
      <br />
      <button onClick={Logout}>Logout</button>
    </>
  );
};
export default Visitor;
