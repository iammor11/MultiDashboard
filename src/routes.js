import { lazy } from 'react';

const Login = lazy(() => import('./components/Login'));
const ChatScreen = lazy(() => import('./components/SupportPortal'));
const Company = lazy(() => import('./components/SuperAdmin'));
const Admin = lazy(() => import('./components/Admin'));

const routes = [
  {
    path: '/login',
    roles: ['superAdmin', 'admin', 'agent'],
    name: 'Login',
    component: Login,
  },
  {
    path: '/support',
    roles: ['agent'],
    private: true,
    name: 'Chat',
    component: ChatScreen,
  },
  {
    path: '/company',
    roles: ['superAdmin'],
    private: true,
    name: 'Company',
    component: Company,
  },
  {
    path: '/campaign',
    roles: ['admin'],
    private: true,
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/agent',
    roles: ['admin'],
    private: true,
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/settings/:id',
    roles: ['admin'],
    private: true,
    name: 'Admin',
    component: Admin,
  },
];
