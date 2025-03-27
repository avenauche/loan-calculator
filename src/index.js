class LoanCalculator {
  constructor() {
    this.principal = 0;
    this.annualRate = 0;
    this.termInYears = 0;
  }

  calculateMonthlyPayment(principal, annualRate, termInYears) {
    this.principal = principal;
    this.annualRate = annualRate;
    this.termInYears = termInYears;

    // Handle zero interest rate case
    if (annualRate === 0) {
      return Number((principal / (termInYears * 12)).toFixed(2));
    }

    const monthlyRate = this.annualRate / 12 / 100;
    const numberOfPayments = this.termInYears * 12;

    const monthlyPayment =
      (this.principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return Number(monthlyPayment.toFixed(2));
  }

  calculateTotalPayment(monthlyPayment) {
    return Number((monthlyPayment * this.termInYears * 12).toFixed(2));
  }

  calculateTotalInterest(monthlyPayment) {
    const totalPayment = this.calculateTotalPayment(monthlyPayment);
    return Number((totalPayment - this.principal).toFixed(2));
  }
}

module.exports = LoanCalculator;