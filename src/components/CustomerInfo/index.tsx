import styles from './style.module.scss';
import { PropertiesHeader } from './components/PropertiesHeader';
import { FormField } from './components/FormField';
import { CustomerDataInput } from './components/CustomerDataInput';

export const CustomerInfo = () => {
  return (
    <div className={styles.container}>
      <PropertiesHeader title="Реквизиты" />
      <FormField>
        <CustomerDataInput placeholder="Номер карты" />
      </FormField>
      <FormField>
        <CustomerDataInput placeholder="ФИО владельца" />
      </FormField>
      <FormField>
        <CustomerDataInput placeholder="Адрес" />
      </FormField>
    </div>
  );
};
