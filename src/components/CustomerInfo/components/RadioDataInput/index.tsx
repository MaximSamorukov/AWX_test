import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import s from './style.module.scss';
import { CustomRadio } from '../CustomRadio';

export const RadioDataInput = () => {
  return (
    <div className={s.container}>
      <RadioGroup
        row
        sx={{
          '&.MuiRadioGroup-root': {
            justifyContent: 'flex-start',
            padding: 0,
            gap: '15px',
          },
        }}
        name="number_type"
      >
        <FormControlLabel value="card_number" control={<CustomRadio />} label="Номер карты" />
        <FormControlLabel
          value="contract_number"
          control={<CustomRadio />}
          label="Номер договора"
        />
      </RadioGroup>
    </div>
  );
};
