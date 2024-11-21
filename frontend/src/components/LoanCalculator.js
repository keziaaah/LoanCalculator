import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoanCalculator.css';

const LoanCalculator = () => {
  const [loanType, setLoanType] = useState('Personal');
  const [loanAmount, setLoanAmount] = useState(10000);
  const [paymentPeriod, setPaymentPeriod] = useState(3);
  const [interestRate, setInterestRate] = useState(1.7);
  const [depositMethod, setDepositMethod] = useState('Bank Transfer');
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmountPayable, setTotalAmountPayable] = useState(0);

  // Function to calculate interest and total amount payable
  const calculateLoan = () => {
    const interest = (loanAmount * interestRate * paymentPeriod) / 100;
    const totalPayable = loanAmount + interest;
    setTotalInterest(interest);
    setTotalAmountPayable(totalPayable);
  };

  // Recalculate whenever loanAmount, paymentPeriod, or interestRate changes
  useEffect(() => {
    calculateLoan();
  }, [loanAmount, paymentPeriod, interestRate]);

  return (
    <div className="loan-calculator-container">
      <h1>
        How Much Would You Like <span>To Borrow?</span></h1>
      <p1> Calculate Your Interest Payable</p1>
      <p className="subtext">Calculate the monthly interest payable on your loan.</p>
    

      <div className="loan-calculator-layout">
        {/* Left side - Loan Calculation Form */}
        <div className="loan-form">
          <div className="section">
            <label className="section-title">Loan Type</label>
            <div className="loan-type">
              <button className={`loan-type-btn ${loanType === 'Personal' ? 'selected' : ''}`} onClick={() => setLoanType('Personal')}>Personal</button>
              <button className={`loan-type-btn ${loanType === 'Educational' ? 'selected' : ''}`} onClick={() => setLoanType('Educational')}>Educational</button>
              <button className={`loan-type-btn ${loanType === 'Pensioner' ? 'selected' : ''}`} onClick={() => setLoanType('Pensioner')}>Pensioner</button>
            </div>
          </div>

          <div className="section">
            <label className="section-title">Loan Amount</label>
            <input
              type="range"
              min="1000"
              max="250000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="slider"
            />
            <p className="slider-value">₱{loanAmount.toLocaleString()}</p>
          </div>

          <div className="section">
            <label className="section-title">Payment Period</label>
            <input
              type="range"
              min="1"
              max="120"
              value={paymentPeriod}
              onChange={(e) => setPaymentPeriod(Number(e.target.value))}
              className="slider"
            />
            <p className="slider-value">{paymentPeriod} Months</p>
          </div>

          <div className="interest-deposit-section">
            <div>
              <label>Interest Rate %</label>
              <p>{interestRate}%</p>
            </div>
            <div>
              <label>Deposit Date</label>
              <input type="date" />
            </div>
          </div>

          <div className="section">
            <label>Deposit Method</label>
            <div className="deposit-method">
              <label>
                <input
                  type="radio"
                  value="Bank Transfer"
                  checked={depositMethod === 'Bank Transfer'}
                  onChange={() => setDepositMethod('Bank Transfer')}
                />
                Deposit Bank Transfer
              </label>
              <label>
                <input
                  type="radio"
                  value="Cash"
                  checked={depositMethod === 'Cash'}
                  onChange={() => setDepositMethod('Cash')}
                />
                Cash
              </label>
            </div>
          </div>

        </div>

        {/* Right side - Account Summary */}
        <div className="account-summary">
          <h2>Account Balance</h2>
          <p className="balance-amount">₱{loanAmount.toLocaleString()}</p>
          <div className="summary-details">
            <p>Total Interest: ₱{totalInterest.toFixed(2)}</p>
            <p>Total Amount Payable: ₱{totalAmountPayable.toFixed(2)}</p>
          </div>
    
          <div className="summary-actions">
            <button className="repayment-schedule">View Repayment Schedule</button>
            <button className="apply-now">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
