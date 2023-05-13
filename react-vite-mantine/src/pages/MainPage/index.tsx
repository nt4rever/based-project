import { FC, ReactElement, lazy } from 'react';
import styles from './styles.module.scss';
import MainLayout from '~/layouts/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('../Home'));

const MainPage: FC = (): ReactElement => {
  return (
    <div className={styles.root}>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to={'404'} replace />} />
        </Routes>
      </MainLayout>
    </div>
  );
};

export default MainPage;
