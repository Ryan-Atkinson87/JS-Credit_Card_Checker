// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

//start at last digit and iterate left
//double each digit, if doubled digit is greater than 9, subtract 9
//add all doubled digits together
//if sum is divisible by 10, return true, else false
const validateCred = inputArray => {
    // temporary array to store the input array
    let tempArray = inputArray;
    // new array to store the doubled/not doubled values
    let newArray = [];
    // iterate over the input array in reverse order and double/not double each digit, then add to newArray
    for (let i = tempArray.length - 1; i >= 0; i--) {
        let doubled = 0
        if ((tempArray.length - i) % 2 === 0 && i !== (tempArray.length - 1)) {
            doubled = tempArray[i] * 2;
            if (doubled > 9) {
                doubled -= 9;
            }
            newArray.push(doubled);
        } else {
            newArray.push(tempArray[i]);
        }
    }
    // calculate the sum of the doubled/not doubled digits
    let sum = 0;
    for (let i = newArray.length - 1; i >= 0; i--) {
        sum += newArray[i];
    }
    // return true if sum is divisible by 10, else false
    return sum % 10 === 0;
}

// Test validateCred()
//console.log(validateCred(valid1)); //true
//console.log(validateCred(invalid1)); //false
//console.log(validateCred(mystery1)); //false


// Function to find all invalid credit card numbers in a given array
// check through all credit card numbers in a given array
// return a new array of credit card numbers that are invalid
const findInvalidCards = cardNumbersArray => {
    let invalidCards = [];
    for (card of cardNumbersArray) {
        if (!validateCred(card)) {
            invalidCards.push(card);
        }
    }
    return invalidCards;
}

// Test findInvalidCards
console.log(findInvalidCards(batch));

// identify the credit card company
const idInvalidCardCompanies = invalidCardsArray => {
    let countAmex = 0;
    let countVisa = 0;
    let countMastercard = 0;
    let countDiscover = 0;
    for (card of invalidCardsArray) {
        switch (card[0]) {
            case 3:
                countAmex++;
                break;
            case 4:
                countVisa++;
                break;
            case 5:
                countMastercard++;
                break;
            case 6:
                countDiscover++;
                break;
            default:
                console.log('Company not found');
                break;
        }
    }
    let badCompany = [];
        if (countAmex > 0) {
            badCompany.push('American Express');
        }
        if (countVisa > 0) {
            badCompany.push('Visa');
        }
        if (countMastercard > 0) {
            badCompany.push('MasterCard');
        }
        if (countDiscover > 0) {
            badCompany.push('Discover');
        }
    console.log(`Amex: ${countAmex}`);
    console.log(`Visa: ${countVisa}`);
    console.log(`MasterCard: ${countMastercard}`);
    console.log(`Discover: ${countDiscover}`);
    return badCompany;
}

// Test idInvalidCardCompanies

console.log(idInvalidCardCompanies(findInvalidCards(batch)))