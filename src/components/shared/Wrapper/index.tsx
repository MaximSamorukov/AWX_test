import React from 'react';
import s from './style.module.scss';

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
