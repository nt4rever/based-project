import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const Home: FC = (): ReactElement => {
  const { t } = useTranslation();

  return <div>{t('common.homepage')}</div>;
};

export default Home;
