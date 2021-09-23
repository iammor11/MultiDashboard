import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AgentRoutes from './routing/AgentRoutes';
import AdminRoutes from './routing/AdminRoutes';
import SuperAdminRoutes from './routing/SuperAdminRoutes';
import PublicRoutes from './routing/PublicRoutes';
import VisitorRoutes from './routing/VisitorRoutes';

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
          <VisitorRoutes
            exact
            path='/visitor'
            loading={loading}
            isAuthenticated={token}
            role={role}
            component={VisitorRoutes}
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
                : role === 'agent'
                ? 'agent'
                : role === 'visitor'
                ? 'visitor'
                : 'public'
            }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
