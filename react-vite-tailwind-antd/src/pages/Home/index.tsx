import { Button } from 'antd';
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '~/hooks';
import { authActions } from '~/store/ducks/auth/slice';

const Home: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className='p-2'>
      <h1>{t('common.homepage')}</h1>
      <Button className='mt-2' type='primary' onClick={handleLogout}>
        {t('common.logout')}
      </Button>
    </div>
  );
};

export default Home;
