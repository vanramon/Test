import { FC } from 'react';

import { MainPage } from './pages/MainPage';
import { BrowsePage } from './pages/BrowsePage';
import { AuthPage } from './pages/AuthPage';
import { Route, Routes } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';

enum RouteTypes {
  COMMON = 'common',
  AUTH = 'auth',
  NO_AUTH = 'no-auth',
}

type Route = {
  path: string;
  type: RouteTypes;
  component: FC;
};

const commonRoutes: Route[] = [{ path: '/', type: RouteTypes.COMMON, component: MainPage }];

const authRoutes: Route[] = [{ path: '/browse', type: RouteTypes.AUTH, component: BrowsePage }];

const noAuthRoutes: Route[] = [{ path: '/login', type: RouteTypes.NO_AUTH, component: AuthPage }];

export const Navigation = () => {
  const { isAuth } = useAuthStore();

  const renderRoute = (route: Route) => {
    const { path, component: Component } = route;
    return <Route key={path} path={path} element={<Component />} />;
  };

  return (
    <Routes>
      {commonRoutes.map(renderRoute)}
      {isAuth ? authRoutes.map(renderRoute) : noAuthRoutes.map(renderRoute)}
    </Routes>
  );
};
