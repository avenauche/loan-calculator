const assert = require('assert');
const LoanCalculator = require('../src/index');

async function runTests() {
  const calculator = new LoanCalculator();

  // Test calculateMonthlyPayment
  console.log('Testing calculateMonthlyPayment...');
  const monthlyPayment = calculator.calculateMonthlyPayment(200000, 3.5, 30);
  assert.equal(Math.round(monthlyPayment * 100) / 100, 898.09);
  console.log('✓ Monthly payment calculation is correct');

  // Test zero interest rate
  const zeroInterestPayment = calculator.calculateMonthlyPayment(200000, 0, 30);
  assert.equal(Math.round(zeroInterestPayment * 100) / 100, 555.56);
  console.log('✓ Zero interest rate calculation is correct');

  // Test calculateTotalPayment
  console.log('\nTesting calculateTotalPayment...');
  const totalPayment = calculator.calculateTotalPayment(monthlyPayment);
  assert.equal(Math.round(totalPayment * 100) / 100, 323312.40);
  console.log('✓ Total payment calculation is correct');

  // Test calculateTotalInterest
  console.log('\nTesting calculateTotalInterest...');
  const totalInterest = calculator.calculateTotalInterest(monthlyPayment);
  assert.equal(Math.round(totalInterest * 100) / 100, 123312.40);
  console.log('✓ Total interest calculation is correct');

  console.log('\nAll CommonJS tests passed! ✨');
}

runTests().catch(console.error);