import React from 'react';
import InputBase from '@mui/material/InputBase';
import InputIcon from '@/assets/icons/input.svg?react';
import s from './style.module.scss';

type CustomerDataInputProps = {
  placeholder: string;
};

export const CustomerDataInput: React.FC<CustomerDataInputProps> = ({ placeholder }) => {
  return (
    <div className={s.container}>
      <InputBase
        name="name"
        inputProps={{
          sx: {
            fontSize: '20px',
            '&::placeholder': {
              color: 'black',
              opacity: 1,
            },
          },
        }}
        fullWidth
        placeholder={placeholder}
      />
      <InputIcon />
    </div>
  );
};
