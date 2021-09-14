import { Route, Redirect } from 'react-router-dom';

const PrivateAgentRoutes = ({
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

export default PrivateAgentRoutes;
