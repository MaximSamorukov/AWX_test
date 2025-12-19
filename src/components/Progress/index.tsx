import type React from 'react';
import styles from './style.module.scss';
import { Item } from './components/Item';

type ProgressProps = {
  volume: number;
};

const maxValueDict = [25, 50, 75, 100];
const minValueDict = [0, 25, 50, 75];
const labelsDict = ['min', '50%', '75%', 'max'];

export const Progress: React.FC<ProgressProps> = ({ volume }) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 4 }).map((_, index) => {
        const maxValue = maxValueDict[index];
        const minValue = minValueDict[index];
        const label = labelsDict[index];
        return <Item minValue={minValue} maxValue={maxValue} label={label} currenValue={volume} />;
      })}
    </div>
  );
};
