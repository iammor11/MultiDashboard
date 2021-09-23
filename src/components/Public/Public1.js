import { Link } from 'react-router-dom';

const Public1 = () => {
  return (
    <>
      <p>Public1 Page</p>
      <Link to='/public'>Public</Link>
      <br />
      <Link to='/public2'>Public2</Link>
    </>
  );
};
export default Public1;
