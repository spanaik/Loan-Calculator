This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [Material-UI](https://material-ui.com/) v4.1.1 for stlying and slider components
Can be viewed here [Loan Calculator](https://spanaik.github.io/Loan-Calculator)

Loan Calculator App
===================

This is a react app that calculates the number of payments & the monthly payment EMI

Interface
=========

Has two input sliders, to select the loan amount, and the tenure of the loan, post selection the App makes a call to [https://ftl-frontend-test.herokuapp.com/interest?amount=<loanAmount>&numMonths=<numOfMonths>](https://ftl-frontend-test.herokuapp.com/interest?amount=500&numMonths=12) which inturn returns a JSON with the following data

Response
--------

```json
{
  "interestRate": 0.25,
  "monthlyPayment": {
    "amount": 52,
    "currency": "USD"
  },
  "numPayments": 12,
  "principal": {
    "amount": 500,
    "currency": "USD"
  }
}
```

The Json is stored in the state and passed down to the DisplayResult Component to Render.
