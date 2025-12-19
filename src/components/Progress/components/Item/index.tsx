import React from 'react';
import s from './style.module.scss';
import { Typography } from '@mui/material';

type ItemProps = {
  label: string;
  maxValue: number;
  minValue: number;
  currenValue: number;
};

export const Item: React.FC<ItemProps> = ({ minValue, label, maxValue, currenValue }) => {
  const doneWidth =
    currenValue >= maxValue ? 100 : currenValue <= minValue ? 0 : currenValue - minValue;
  const doneWidthPercents = Math.floor((doneWidth / (maxValue - minValue)) * 100);

  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div style={{ width: `${doneWidthPercents}%` }} className={s.innerContainer__done} />
      </div>
      <div className={s.label}>
        <Typography sx={(t) => ({ color: t.palette.color.grey })} variant="font4">
          {label}
        </Typography>
      </div>
    </div>
  );
};
