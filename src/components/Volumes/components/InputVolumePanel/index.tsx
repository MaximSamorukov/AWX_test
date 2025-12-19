import type React from 'react';
import cn from 'classnames';
import { Box, Fab, Typography } from '@mui/material';
import { PlusIcon } from './PlusIcon';
import { MinusIcon } from './MinusIcon';
import s from './style.module.scss';

const zeroCounts = {
  RUR: 2,
  ETH: 5,
};

const labels = {
  RUR: 'Рубль',
  ETH: 'Ethereum',
};

type InputVolumePanelProps = {
  side: 'right' | 'left';
  text: string;
  currency: 'ETH' | 'RUR';
  volume: number;
};

export const InputVolumePanel: React.FC<InputVolumePanelProps> = ({
  volume,
  side,
  text,
  currency,
}) => {
  const className = side === 'left' ? s.container__label_left : s.container__label_right;
  return (
    <div className={s.container}>
      <div className={cn(s.container__label, className)}>
        <Typography sx={(t) => ({ color: t.palette.color.grey })} variant="font3">
          {text}
        </Typography>
      </div>
      <Box
        sx={(t) => ({ backgroundColor: t.palette.tabPanel.backGround.default })}
        className={s.container__panelContainer}
      >
        <Typography sx={(t) => ({ color: t.palette.color.grey })} variant="font4">
          {`${labels[currency]}, ${currency}`}
        </Typography>
        <div className={s.container__volumeCount}>
          <Fab size="small">
            <MinusIcon color="inherit" />
          </Fab>
          <Typography variant="font3">{volume.toFixed(zeroCounts[currency])}</Typography>
          <Fab size="small">
            <PlusIcon color="inherit" />
          </Fab>
        </div>
      </Box>
    </div>
  );
};
