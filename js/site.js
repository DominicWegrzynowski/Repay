function getData() {

    //gather user input
    let balance = parseFloat(document.getElementById("balance").value);
    let term = parseFloat(document.getElementById("term").value);
    let rate = parseFloat(document.getElementById("interestRate").value);

    //make calculations
    let calculatedData = calculateData(balance, term, rate);
    //write data to the page    
    display(calculatedData);
}

function calculateData(balance, term, rate) {

    let output = { 
        totalInterestPaid: 0,
        totalPrincipalPaid: 0,
        dataArray: [],
    };

    let previousRemainingBalance = balance;
  
    
    for (let month = 1; month <= term; month++) {
        
        let totalMonthlyPayment = (balance) * (rate / 1200) / (1 - (1 + rate / 1200)**(-term));

        let interestPayment = previousRemainingBalance * rate / 1200;
        output.totalInterestPaid += interestPayment;

        let principalPayment = totalMonthlyPayment - interestPayment;
        output.totalPrincipalPaid += principalPayment;

        let remainingBalance = previousRemainingBalance - principalPayment;
        previousRemainingBalance = remainingBalance;

        if(remainingBalance < 0) {
            remainingBalance = 0;
        }

        output.dataArray.push(month);
        output.dataArray.push(formatToCurrency(totalMonthlyPayment));
        output.dataArray.push(formatToCurrency(principalPayment));
        output.dataArray.push(formatToCurrency(interestPayment));
        output.dataArray.push(formatToCurrency(output.totalInterestPaid));
        output.dataArray.push(formatToCurrency(remainingBalance));
        
    }

    return output;
}
function formatToCurrency(amount) {

    return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 

}


function display(output) {

    //financial variables
    totalPrincipalPaid = output.totalPrincipalPaid;
    totalInterestPaid = output.totalInterestPaid;
    totalCost = totalPrincipalPaid + totalInterestPaid;
    dataArray = output.dataArray;
    
    if(dataArray[1] == undefined) {
        document.getElementById("monthlyPaymentLabel").innerHTML = '$' + formatToCurrency(0)
    } 
    else {
        document.getElementById("monthlyPaymentLabel").innerHTML = '$' + dataArray[1];
    } 

    document.getElementById("totalPrincipalLabel").innerHTML = '$' + formatToCurrency(totalPrincipalPaid);
    document.getElementById("totalInterestLabel").innerHTML = '$' + formatToCurrency(totalInterestPaid);
    document.getElementById("totalCostLabel").innerHTML = '$' + formatToCurrency(totalCost);
    
    //DOM variables
    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("repayTemplate");

    for(let i = 0; i < dataArray.length; i += 6) {

        let tableRow = document.importNode(templateRow.content, true);
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].textContent = dataArray[i];
        rowCols[1].textContent = dataArray[i + 1];
        rowCols[2].textContent = dataArray[i + 2];
        rowCols[3].textContent = dataArray[i + 3];
        rowCols[4].textContent = dataArray[i + 4];
        rowCols[5].textContent = dataArray[i + 5];

        tableBody.appendChild(tableRow);
    }

}