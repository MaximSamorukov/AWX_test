import { Header } from '@/components/Header'
import { Tabs } from '@/components/Tabs'
import { CurrencySourceSelector } from '@/components/CurrencySourceSelector'
import { Volumes } from '@/components/Volumes'
import { CustomerInfo } from '@/components/CustomerInfo'
import s from '@/App.module.scss'

function App() {

  return (
    <div className={s.container}>
      <Header />
      <Tabs />
      <CurrencySourceSelector />
      <Volumes />
      <CustomerInfo />
    </div>
  )
}

export default App
