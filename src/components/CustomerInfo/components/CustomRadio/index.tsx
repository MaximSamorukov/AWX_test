import Radio, { type RadioProps } from '@mui/material/Radio';
import RadioCheckedIcon from '@/assets/icons/radio_checked.svg?react';
import RadioUncheckedIcon from '@/assets/icons/radio_unchecked.svg?react';
import s from './style.module.scss';
export const CustomRadio = (props: RadioProps) => {
  return (
    <div className={s.container}>
      <Radio
        {...props}
        sx={{ padding: 0 }}
        checkedIcon={<RadioCheckedIcon />}
        icon={<RadioUncheckedIcon />}
      />
    </div>
  );
};
