import { InputVolumePanel } from './components/InputVolumePanel';
import styles from './style.module.scss';

export const Volumes = () => {
  return (
    <div className={styles.container}>
      <InputVolumePanel volume={1300} side="left" text="Отдаете (лот 1000)" currency="ETH" />
      <InputVolumePanel volume={1200} side="right" text="Получаете (лот 1000)" currency="RUR" />
    </div>
  );
};
