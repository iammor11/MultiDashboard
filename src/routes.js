import { lazy } from 'react';

const Login = lazy(() => import('./components/Login'));
const Public = lazy(() => import('./components/Public/Public'));
const Public1 = lazy(() => import('./components/Public/Public1'));
const Public2 = lazy(() => import('./components/Public/Public2'));
const SuperAdmin = lazy(() => import('./components/SuperAdmin/SuperAdmin'));
const SuperAdmin1 = lazy(() => import('./components/SuperAdmin/SuperAdmin1'));
const SuperAdmin2 = lazy(() => import('./components/SuperAdmin/SuperAdmin2'));
const Admin = lazy(() => import('./components/Admin/Admin'));
const Admin1 = lazy(() => import('./components/Admin/Admin1'));
const Admin2 = lazy(() => import('./components/Admin/Admin2'));
const Agent = lazy(() => import('./components/Agent/Agent'));
const Agent1 = lazy(() => import('./components/Agent/Agent1'));
const Agent2 = lazy(() => import('./components/Agent/Agent2'));
const Visitor = lazy(() => import('./components/Visitor/Visitor'));
const Visitor1 = lazy(() => import('./components/Visitor/Visitor1'));
const Visitor2 = lazy(() => import('./components/Visitor/Visitor2'));

const routes = [
  {
    path: '/login',
    roles: ['superAdmin', 'admin', 'agent', 'visitor'],
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    roles: ['superAdmin', 'admin', 'agent', 'visitor'],
    name: 'Public',
    component: Public,
  },
  {
    path: '/1',
    roles: ['superAdmin', 'admin', 'agent', 'visitor'],
    name: 'Public1',
    component: Public1,
  },
  {
    path: '/2',
    roles: ['superAdmin', 'admin', 'agent', 'visitor'],
    name: 'Public2',
    component: Public2,
  },
  {
    path: '/superAdmin',
    roles: ['superAdmin'],
    private: true,
    name: 'SuperAdmin',
    component: SuperAdmin,
  },
  {
    path: '/superAdmin1',
    roles: ['superAdmin'],
    private: true,
    name: 'SuperAdmin1',
    component: SuperAdmin1,
  },
  {
    path: '/SuperAdmin2',
    roles: ['superAdmin'],
    private: true,
    name: 'SuperAdmin2',
    component: SuperAdmin2,
  },
  {
    path: '/admin',
    roles: ['admin'],
    private: true,
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/admin1',
    roles: ['Admin'],
    private: true,
    name: 'Admin1',
    component: Admin1,
  },
  {
    path: '/admin2',
    roles: ['admin'],
    private: true,
    name: 'Admin2',
    component: Admin2,
  },
  {
    path: '/agent',
    roles: ['agent'],
    private: true,
    name: 'Agent',
    component: Agent,
  },
  {
    path: '/agent1',
    roles: ['agent'],
    private: true,
    name: 'Agent1',
    component: Agent1,
  },
  {
    path: '/agent2',
    roles: ['agent'],
    private: true,
    name: 'Agent2',
    component: Agent2,
  },
  {
    path: '/visitor',
    roles: ['visitor'],
    private: true,
    name: 'Visitor',
    component: Visitor,
  },
  {
    path: '/visitor1',
    roles: ['agent'],
    private: true,
    name: 'visitor1',
    component: Visitor1,
  },
  {
    path: '/visitor2',
    roles: ['agent'],
    private: true,
    name: 'Visitor2',
    component: Visitor2,
  },
];
