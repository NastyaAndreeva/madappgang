import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './layout';
import PrivateRoute from 'hocs/PrivateRoute';
import PublicRoute from 'hocs/PublicRoute';
import { authOperations } from 'store/auth';
import { useAuth, useRedux } from 'hooks';
import { dragonsOperations, dragonsSelectors } from 'store/dragons';
import { DragonCard } from 'components/DragonCard';

const Home = lazy(() => import('pages'));
const RegisterView = lazy(() => import('pages/SignUp'));
const LoginView = lazy(() => import('pages/Login'));
const DragonsView = lazy(() => import('pages/DragonsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const [selector, dispatch] = useRedux();
  const dragons = selector(dragonsSelectors.getAllDragons);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    dispatch(dragonsOperations.getAllDragons());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PublicRoute component={<Home />} />} />
          {dragons.map(dragon => (
            <Route
              key={dragon.name}
              path={`/${dragon.name}`}
              element={<DragonCard dragon={dragon} />}
            />
          ))}
          <Route
            path="/register"
            element={
              <PublicRoute
                restricted
                redirectTo="/dragons"
                component={<RegisterView />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                restricted
                redirectTo="/dragons"
                component={<LoginView />}
              />
            }
          />
          <Route
            path="/dragons"
            element={
              <PrivateRoute redirectTo="/login" component={<DragonsView />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
