import { Route, Redirect } from 'react-router-dom';

const VisitorRoutes = ({
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
        role === 'admin' ||
        (!isAuthenticated && !loading) ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default VisitorRoutes;
