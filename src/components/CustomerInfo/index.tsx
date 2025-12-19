import styles from './style.module.scss';
import { PropertiesHeader } from './components/PropertiesHeader';
import { FormField } from './components/FormField';
import { CustomerDataInput } from './components/CustomerDataInput';
import { RadioDataInput } from './components/RadioDataInput';
import { Box } from '@mui/material';

export const CustomerInfo = () => {
  return (
    <div className={styles.container}>
      <PropertiesHeader title="Реквизиты" />
      <FormField>
        <Box sx={{ padding: 0, width: '100%', margin: 0 }}>
          <RadioDataInput />
          <CustomerDataInput placeholder="Номер карты" />
        </Box>
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
