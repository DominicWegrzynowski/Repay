function getData() {

    //gather user input
    let balance = parseFloat(document.getElementById("balance").value);
    let term = parseFloat(document.getElementById("term").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);

    //make calculations
    let totalMonthlyPayment = calculateTotalMonthlyPayment(balance, term, interestRate);
    let startingRemainingBalance = calculateStartingRemainingBalance = balance
    let interestPayment = calculateInterestPayment(balance, term, interestRate);
    let principalPayment = calculatePrincipalPayment(balance, term, interestRate);
    let finalRemainingBalance = calculateFinalRemainingBalance(balance, term, interestRate);
    let totalPrincipal = balance;

    //write data to the page
    displayData(paymentAmount, principalPaidThisMonth, interestPaidThisMonth, totalInterestPaidToDate, endOfMonthBalance);

}

function calculateTotalMonthlyPayment(balance, term, interestRate) {

    let output;

    output = (balance) * ( interestRate / 1200) / (1 - (1 + interestRate / 1200)**(-term) )

    return output;

}

function calculateStartingRemainingBalance(balance, term, interestRate) {

    let output;



    return output;

}

function calculateInterestPayment(previousRemainingBalance, interestRate) {

    let output;

    output = (previousRemainingBalance * rate / 1200);

    return output;

}

function calculatePrincipalPayment(totalMonthlyPayment, interestPayment) {

    let output;

    output = totalMonthlyPayment - interestPayment;

    return output;

}

function calculateFinalRemainingBalance(balance, term, interestRate) {

    let output;

    

    return output;

}

function displayData() {

    document.getElementById("totalPrincipalLabel").value = totalPrincipal;
    document.getElementById("totalInterestLabel").value = totalInterestPaidToDate;

}