import './App.css';
import AddTransaction from './component/AddTransaction';
import Balance from './component/Balance';
import Header from './component/Header';
import IncomeExpence from './component/IncomeExpence';
import Transaction_List from './component/Transaction_List';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>    
    <GlobalProvider>
      <div className="container">
    <Header />
    <Balance />
    <IncomeExpence />
    <Transaction_List />
    <AddTransaction />
    </div>
    </GlobalProvider>
    </>
  );
}

export default App;
