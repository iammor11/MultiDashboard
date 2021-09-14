import { BrowserRouter, Switch } from 'react-router-dom';
import AgentRoutes from './routing/AgentRoutes';
import AdminRoutes from './routing/AdminRoutes';
import SuperAdminRoutes from './routing/SuperAdminRoutes';
import PublicRoutes from './routing/PublicRoutes';

const App = ({ loading, token, role }) => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <AgentRoutes
            exact
            path='/agent'
            loading={loading}
            isAuthenticated={token}
            role={role}
            component={AgentRoutes}
          />
          <AdminRoutes
            exact
            path='/admin'
            loading={loading}
            isAuthenticated={token}
            role={role}
            component={AdminRoutes}
          />
          <SuperAdminRoutes
            exact
            path='/superAdmin'
            loading={loading}
            isAuthenticated={token}
            role={role}
            component={SuperAdminRoutes}
          />
          <PublicRoutes
            exact
            path='/'
            loading={loading}
            isAuthenticated={token}
            component={PublicRoutes}
            route={
              role === 'admin'
                ? 'admin'
                : role === 'superAdmin'
                ? 'superAdmin'
                : ''
            }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
