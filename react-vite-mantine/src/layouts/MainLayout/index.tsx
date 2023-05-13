import { FC, ReactElement } from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { locales } from '~/i18n/i18n';
import { Flex, Select } from '@mantine/core';

type MainLayoutProps = {
  children: any;
};

type LngProps = keyof typeof locales;
const MainLayout: FC<MainLayoutProps> = ({ children }): ReactElement => {
  const { i18n } = useTranslation();
  const currentLanguage = locales[i18n.language as LngProps];
  const handleLanguageChange = (lng: LngProps) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.root}>
      <Flex align={'center'} sx={{ gap: 20 }}>
        <Select
          defaultValue={'en'}
          value={i18n.language}
          placeholder='Pick one'
          onChange={handleLanguageChange}
          data={[
            { value: 'en', label: 'English' },
            { value: 'vi', label: 'Tiếng Việt' }
          ]}
        />
        <div>Language: {currentLanguage}</div>
      </Flex>

      {children}
    </div>
  );
};

export default MainLayout;
