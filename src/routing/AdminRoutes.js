import { Route, Redirect } from 'react-router-dom';

const AdminRoutes = ({
  component: Component,
  loading,
  isAuthenticated,
  role,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        role === 'agent' ||
        role === 'superAdmin' ||
        (!isAuthenticated && !loading) ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AdminRoutes;
