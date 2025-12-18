import React from 'react';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import s from './style.module.scss';

type OptionComponentProps = {
  organisation: string;
  exchange: string;
  currency: string;
  id: string;
};

const currencyIcon: Record<string, React.ReactNode> = {
  RUR: <CurrencyRubleIcon sx={{ fontSize: 30 }} />,
};

export const OptionComponent: React.FC<OptionComponentProps> = ({
  organisation,
  exchange,
  currency,
}) => {
  return (
    <div className={s.container}>
      <div className={s.container__currency}>{currencyIcon[currency]}</div>
      <div className={s.container__text}>
        <div className={s.container__organisation}>{organisation}</div>
        <div className={s.container__exchange}>{exchange}</div>
      </div>
    </div>
  );
};
