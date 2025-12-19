import styles from './style.module.scss';
import { PropertiesHeader } from './components/PropertiesHeader';

export const CustomerInfo = () => {
  return (
    <div className={styles.container}>
      <PropertiesHeader title="Реквизиты" />
    </div>
  );
};
