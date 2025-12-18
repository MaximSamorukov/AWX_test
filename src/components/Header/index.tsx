import styles from './style.module.scss';
import { Typography } from '@mui/material';

export const Header = ({ title }: { title: string }) => {
  return (
    <div className={styles.container}>
      <Typography
        sx={(t) => ({
          fontWeight: t.typography.weight.bold,
          fontSize: t.typography.font1.fontSize,
        })}
      >
        {title}
      </Typography>
    </div>
  );
};
