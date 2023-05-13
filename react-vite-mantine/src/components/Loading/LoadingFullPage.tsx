import { FC, ReactElement } from 'react';
import styles from './LoadingFullPage.module.scss';
import { LoadingOverlay } from '@mantine/core';

export const LoadingFullPage: FC = (): ReactElement => {
  return (
    <div className={styles.root}>
      <LoadingOverlay visible={true} overlayBlur={2} />
    </div>
  );
};
