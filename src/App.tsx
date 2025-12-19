import { Header } from '@/components/Header';
import { Tabs } from '@/components/Tabs';
import { CurrencySourceSelector } from '@/components/CurrencySourceSelector';
import { Volumes } from '@/components/Volumes';
import { CustomerInfo } from '@/components/CustomerInfo';
import s from '@/App.module.scss';
import { Progress } from './components/Progress';

function App() {
  return (
    <div className={s.container}>
      <Header title="Способ вывода" />
      <Tabs />
      <CurrencySourceSelector />
      <Header title="Объемы" />
      <Volumes />
      <Progress volume={65} />
      <CustomerInfo />
    </div>
  );
}

export default App;
