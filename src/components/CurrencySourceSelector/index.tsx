import React from 'react';
import { MenuItem, Select } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import styles from './style.module.scss';
import Chevron from '@/assets/icons/chevron.svg?react';
import { OptionComponent } from './components/OptionComponent';

const options = [
  {
    id: '1',
    organisation: 'Альфа-банк cash-in',
    exchange: '1USDT = 61.55 RUR',
    currency: 'RUR',
  },
  {
    id: '2',
    organisation: 'Открытие',
    exchange: '1USDT = 62.22 RUR',
    currency: 'RUR',
  },
];
export const CurrencySourceSelector = () => {
  const [value, setValue] = React.useState(options[0].id);
  const handleChange = (event: SelectChangeEvent) => setValue(event.target.value);
  return (
    <div className={styles.container}>
      <Select
        IconComponent={() => <Chevron />}
        onChange={handleChange}
        value={value}
        fullWidth
        sx={{
          backgroundColor: 'white',
          height: 80,
          borderRadius: 5,
          padding: 0,
          paddingRight: '20px',
        }}
        variant="filled"
        disableUnderline
        SelectDisplayProps={{
          style: { paddingTop: 0, paddingBottom: 0, paddingLeft: 20 },
        }}
        renderValue={(selectedId) => {
          const option = options.find((opt) => opt.id === selectedId);
          if (!option) return null;
          return (
            <OptionComponent
              id={selectedId}
              organisation={option.organisation}
              exchange={option.exchange}
              currency={option.currency}
            />
          );
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            <OptionComponent
              id={option.id}
              organisation={option.organisation}
              exchange={option.exchange}
              currency={option.currency}
            />
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
