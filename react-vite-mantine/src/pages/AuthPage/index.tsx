import { FC, ReactElement, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from '~/layouts/AuthLayout';
import styles from './styles.module.scss';

const Login = lazy(() => import('~/pages/Login'));

const AuthPage: FC = (): ReactElement => {
  return (
    <div className={styles.root}>
      <AuthLayout>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Navigate to={'login'} replace />} />
        </Routes>
      </AuthLayout>
    </div>
  );
};

export default AuthPage;
