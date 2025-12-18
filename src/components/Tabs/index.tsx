import React from 'react';
import styles from './style.module.scss';
import { CustomToggleButton } from './components/CustomToggleButton';

export const Tabs = () => {
  return (
    <div className={styles.container}>
      <CustomToggleButton title="Банки" active={true} />
      <CustomToggleButton title="Наличные" active={false} />
      <CustomToggleButton title="Курьер" active={false} />
    </div>
  );
};
