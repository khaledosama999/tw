import React from 'react';
import './App.css';
import AccountingSystem from './components/AccountingSystem';
import Banner from './components/Banner';
import Data from './components/Data';
import Introduction from './components/Intro';
import NavBar from './components/NavBar/NavBar';
import RealTimeOverView from './components/RealTimeOverView';
import SavingMoney from './components/SavingMoney';
import TrustedCustomers from './components/TrustedCustomers';

function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
      <Introduction />
      <TrustedCustomers />
      <SavingMoney />
      <AccountingSystem />
      <RealTimeOverView />
      <Data />
    </div>
  );
}

export default App;
