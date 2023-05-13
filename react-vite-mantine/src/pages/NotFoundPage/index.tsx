import { Center, Container, Text } from '@mantine/core';
import { FC, ReactElement } from 'react';
import styles from './styles.module.scss';

const NotFoundPage: FC = (): ReactElement => {
  return (
    <Container>
      <Center className={styles.root}>
        <Text>404</Text>
      </Center>
    </Container>
  );
};

export default NotFoundPage;
