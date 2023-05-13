import { FC, ReactElement } from 'react';
import styles from './styles.module.scss';

type AuthLayoutProps = {
  children: any;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }): ReactElement => {
  return <div className={styles.root}>{children}</div>;
};

export default AuthLayout;
