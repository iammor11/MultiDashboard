import { Link } from 'react-router-dom';

const Public2 = () => {
  return (
    <>
      <p>Public2 Page</p>
      <Link to='/public'>Public</Link>
      <br />
      <Link to='/public1'>Public1</Link>
    </>
  );
};
export default Public2;
