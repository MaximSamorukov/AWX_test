import React from 'react';
import Paper from '@mui/material/Paper';
import s from './style.module.scss';

type FormFieldProps = {
  children: React.ReactNode;
};

export const FormField: React.FC<FormFieldProps> = ({ children }) => {
  return (
    <div className={s.container}>
      <Paper
        sx={{
          width: '100%',
          minHeight: 70,
          padding: '10px',
          paddingRight: '15px',
          paddingLeft: '15px',
          '&.MuiPaper-rounded': {
            borderRadius: '10px',
          },
          '&.MuiPaper-root': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
        square={false}
        elevation={0}
        variant="outlined"
      >
        {children}
      </Paper>
    </div>
  );
};
