import type React from 'react';
import s from './style.module.scss';

type InputVolumePanelProps = {
  side: 'right' | 'left';
  text: string;
};

export const InputVolumePanel: React.FC<InputVolumePanelProps> = ({ side, text }) => {
  const className = side === 'left' ? s.container__label_left : s.container__label_right;
  return (
    <div className={s.container}>
      <div className={className}>{text}</div>
      <div className={s.container__panelContainer}>data</div>
    </div>
  );
};
