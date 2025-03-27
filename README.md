# @avenauche/loan-calculator

A simple and efficient loan payment calculator for Node.js applications.

# @avenauche/loan-calculator

A simple and efficient loan payment calculator for Node.js applications.

## Features

- 📊 Calculate monthly loan payments
- 💰 Determine total payment amount over loan term
- 💸 Calculate total interest paid
- ✨ Support for both ES6 Modules and CommonJS
- 🔢 Precise calculations with decimal rounding
- 🚀 Zero dependencies
- 📱 Lightweight and efficient

## Installation
```bash
npm install @avenauche/loan-calculator
```

## Usage

### ES6 Module

```javascript

import LoanCalculator from '@avenauche/loan-calculator';

const calculator = new LoanCalculator();

// Calculate monthly payment
// Parameters: principal, annual interest rate (%), term in years
const monthlyPayment = calculator.calculateMonthlyPayment(200000, 3.5, 30);
console.log(`Monthly Payment: $${monthlyPayment}`); // Example output: $898.09

// Calculate total payment
const totalPayment = calculator.calculateTotalPayment(monthlyPayment);
console.log(`Total Payment: $${totalPayment}`); // Example output: $323312.40

// Calculate total interest
const totalInterest = calculator.calculateTotalInterest(monthlyPayment);
console.log(`Total Interest: $${totalInterest}`); // Example output: $123312.40

```

### CommonJS

```javascript
const LoanCalculator = require('@avenauche/loan-calculator');

const calculator = new LoanCalculator();

// Calculate monthly payment
// Parameters: principal, annual interest rate (%), term in years
const monthlyPayment = calculator.calculateMonthlyPayment(200000, 3.5, 30);
console.log(`Monthly Payment: $${monthlyPayment}`); // Example output: $898.09

// Calculate total payment
const totalPayment = calculator.calculateTotalPayment(monthlyPayment);
console.log(`Total Payment: $${totalPayment}`); // Example output: $323312.40

// Calculate total interest
const totalInterest = calculator.calculateTotalInterest(monthlyPayment);
console.log(`Total Interest: $${totalInterest}`); // Example output: $123312.40

```


## API Reference

### calculateMonthlyPayment(principal, annualRate, years)

Calculate the monthly mortgage payment.

#### Parameters:
- `principal` (number) - The loan amount in dollars
- `annualRate` (number) - Annual interest rate as percentage (e.g., 3.5 for 3.5%)
- `years` (number) - Loan term in years

#### Returns:
- (number) - Monthly payment amount, rounded to 2 decimal places

### calculateTotalPayment(monthlyPayment, years)

Calculate the total amount paid over the loan term.

#### Parameters:
- `monthlyPayment` (number) - The monthly payment amount
- `years` (number) - Loan term in years

#### Returns:
- (number) - Total payment amount, rounded to 2 decimal places

### calculateTotalInterest(principal, monthlyPayment, years)

Calculate the total interest paid over the loan term.

#### Parameters:
- `principal` (number) - The original loan amount
- `monthlyPayment` (number) - The monthly payment amount
- `years` (number) - Loan term in years

#### Returns:
- (number) - Total interest paid, rounded to 2 decimal places

## License
This project is licensed under the MIT License.