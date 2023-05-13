import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const Login: FC = (): ReactElement => {
  const { t } = useTranslation();

  return <div>{t('common.login')}</div>;
};

export default Login;
