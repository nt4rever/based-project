import { authActions } from '~/store/ducks/auth/slice';
import { useAppDispatch } from '.';
import { IUser } from '~/@types/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export interface LoginInput {
  username: string;
  password: string;
}

const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (loginInput: LoginInput) => {
    setIsLoading(true);
    const user: IUser = {
      firstName: 'User',
      lastName: '#2807',
      username: loginInput.username
    };

    // fake login code, success after 1s
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 1000)
    );

    dispatch(
      authActions.loginSuccess({
        token: 'thisIsAToken',
        user
      })
    );
    setIsLoading(false);
    navigate('/');
  };
  return { login, isLoading };
};

export default useAuth;
