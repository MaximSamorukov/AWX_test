import { Header } from '@/components/Header';
import { Tabs } from '@/components/Tabs';
import { CurrencySourceSelector } from '@/components/CurrencySourceSelector';
import { Volumes } from '@/components/Volumes';
import { CustomerInfo } from '@/components/CustomerInfo';
import s from '@/App.module.scss';
import { Progress } from '@/components/Progress';
import { Wrapper } from '@/components/shared/Wrapper';

function App() {
  return (
    <div className={s.container}>
      <Wrapper>
        <Header title="Способ вывода" />
      </Wrapper>
      <Tabs />
      <CurrencySourceSelector />
      <Wrapper>
        <Header title="Объемы" />
      </Wrapper>
      <Volumes />
      <Progress volume={65} />
      <CustomerInfo />
    </div>
  );
}

export default App;
