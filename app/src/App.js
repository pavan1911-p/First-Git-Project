import React, { useState } from 'react';
import './App.css';

function App() {
  const [balance, setBalance] = useState(1150);
  const [inRequest, setInRequest] = useState(0);

  const handleWithdraw = (amount) => {
    if (balance >= amount) {
      setBalance(balance - amount);
      setInRequest(inRequest + amount);
      alert(`Withdrawn ${amount} Rupers`);
    } else {
      alert('Insufficient balance');
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Sarah Williams</h1>
      </header>

      <section className="balance-section">
        <h2>Your Balance</h2>
        <div className="amount">{balance}</div>
        <div className="in-request">In Request</div>
      </section>

      <section className="withdraw-section">
        <h3>Withdraw</h3>
        <p>CHOOSE AMOUNT (IN RUPERS)</p>
        <div className="denomination-grid">
          <button onClick={() => handleWithdraw(50)}>50</button>
          <button onClick={() => handleWithdraw(100)}>100</button>
          <button onClick={() => handleWithdraw(200)}>200</button>
          <button onClick={() => handleWithdraw(500)}>500</button>
        </div>
      </section>

     
     
    </div>
  );
}

export default App;