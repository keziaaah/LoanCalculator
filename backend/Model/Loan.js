const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  loanType: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  paymentPeriod: { type: Number, required: true },
  depositMethod: { type: String, required: true },
  totalInterest: { type: Number },
  totalAmountPayable: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Loan', loanSchema);
