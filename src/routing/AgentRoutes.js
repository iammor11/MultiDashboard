import { Route, Redirect } from 'react-router-dom';

const AgentRoutes = ({
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
        role === 'admin' ||
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

export default AgentRoutes;
