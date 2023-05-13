import { FC, ReactElement } from 'react';

type AuthLayoutProps = {
  children: any;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }): ReactElement => {
  return <div>{children}</div>;
};

export default AuthLayout;
