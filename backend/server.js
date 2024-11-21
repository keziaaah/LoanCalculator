const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.post('/api/calculate-loan', async (req, res) => {
    try {
      const { loanType, loanAmount, interestRate, paymentPeriod, depositMethod } = req.body;
  
      const totalInterest = (loanAmount * interestRate * paymentPeriod) / 100;
      const totalAmountPayable = loanAmount + totalInterest;
  
      const newLoan = new Loan({
        loanType,
        loanAmount,
        interestRate,
        paymentPeriod,
        depositMethod,
        totalInterest,
        totalAmountPayable
      });
  
      await newLoan.save();
  
      res.json({ totalInterest, totalAmountPayable });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
