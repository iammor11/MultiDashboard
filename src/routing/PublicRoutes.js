import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = ({
  component: Component,
  loading,
  isAuthenticated,
  route,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Redirect to={'/' + route} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoutes;
