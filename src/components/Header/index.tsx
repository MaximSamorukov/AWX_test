import React from 'react';
import styles from './style.module.scss';
import { Typography } from '@mui/material';

export const Header = () => {
  return (
    <div className={styles.container}>
      <Typography sx={{ fontWeight: '600', fontSize: 18 }}>Способ вывода</Typography>
    </div>
  );
};
