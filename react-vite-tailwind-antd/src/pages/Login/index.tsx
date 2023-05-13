import styled from '@emotion/styled';
import { Button, Radio } from 'antd';
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '~/hooks';
import { authActions } from '~/store/ducks/auth/slice';

const Login: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(
      authActions.loginSuccess({
        user: {
          name: 'tan'
        }
      })
    );
  };

  const StyledRadio = styled(Radio.Group)`
    & .ant-radio-button-wrapper {
      &:first-of-type {
        border-radius: 10px 0 0 10px;
      }
      &:last-of-type {
        border-radius: 0 10px 10px 0;
      }
      color: green;
      &.ant-radio-button-wrapper-checked {
        background-color: green;
        color: whitesmoke;
        border-color: green;

        &:before {
          background-color: green;
        }
        &:hover {
          background-color: green;
          border-color: green;
        }
      }
    }
  `;

  return (
    <div>
      <Button className='mt-2 rounded-3xl bg-slate-500' type='primary' onClick={handleLogin}>
        {t('common.login')}
      </Button>
      <StyledRadio defaultValue='a' buttonStyle='solid' className='ml-2'>
        <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b'>Shanghai</Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
      </StyledRadio>
      <Radio.Group defaultValue='c' buttonStyle='solid' style={{ marginTop: 16 }} className='ml-2'>
        <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b' disabled>
          Shanghai
        </Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default Login;
