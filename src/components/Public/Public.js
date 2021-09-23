import { Link } from 'react-router-dom';

const Public = () => {
  return (
    <>
      <p>Public Page</p>
      <Link to='/public1'>Public1</Link>
      <br />
      <Link to='/public2'>Public2</Link>
    </>
  );
};
export default Public;
