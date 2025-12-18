import React from 'react';
import { ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';

type CustomToggleButtonProps = {
  title: string;
  active: boolean;
};

const CustomButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => {
  return {
    height: 42,
    boxSizing: 'border-box',
    padding: 15,
    backgroundColor: active
      ? theme.palette.tabPanel.backGround.active
      : theme.palette.tabPanel.backGround.default,
    borderRadius: 15,
    color: active ? theme.palette.tabPanel.text.active : theme.palette.tabPanel.text.default,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.fontSize,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
});

export const CustomToggleButton: React.FC<CustomToggleButtonProps> = ({ title, active }) => {
  return <CustomButton active={active}>{title}</CustomButton>;
};
