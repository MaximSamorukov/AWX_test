import { Header } from '@/components/Header';
import Checkbox from '@mui/material/Checkbox';
import CheckedIcon from '@/assets/icons/checked.svg?react';
import UnCheckedIcon from '@/assets/icons/unchecked.svg?react';

import styles from './style.module.scss';
import { FormControlLabel, Typography } from '@mui/material';

export const PropertiesHeader = ({ title }: { title: string }) => {
  return (
    <div className={styles.container}>
      <Header title={title} />
      <FormControlLabel
        label={
          <Typography
            sx={(t) => ({
              color: t.palette.color.grey,
              whiteSpace: 'nowrap',
            })}
            variant="font3"
          >
            {'Сохранить реквизиты'}
          </Typography>
        }
        control={
          <Checkbox
            defaultChecked
            slotProps={{ root: { style: { paddingRight: 5, paddingLeft: 5 } } }}
            size="small"
            checkedIcon={<CheckedIcon />}
            icon={<UnCheckedIcon />}
          />
        }
        labelPlacement="start"
      />
    </div>
  );
};
