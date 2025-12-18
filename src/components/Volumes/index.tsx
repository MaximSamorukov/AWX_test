import { InputVolumePanel } from './components/InputVolumePanel';
import styles from './style.module.scss';

export const Volumes = () => {
  return (
    <div className={styles.container}>
      <InputVolumePanel side="left" text="Отдаете" />
      <InputVolumePanel side="right" text="Получаете" />
    </div>
  );
};
