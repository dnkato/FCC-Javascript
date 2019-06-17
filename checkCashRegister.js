/**
 * Cash Register drawer function
 * reference: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
 *  
 * @param {number} price    The purchase price
 * @param {number} cash     The cash payment
 * @param {object} cid      The cash-in-drawer
 * @return {object}         status, change
 */
function checkCashRegister(price, cash, cid) {

    // Here is your change, ma'am.
    //
    // Note: the hardest thing to figure out was how to round a number to two digits.
    //       The correct method turned out to be using toFixed(2) -- which converts to a string
    //       then using the unary "+" to convert the string back to a number:
    //
    //                      e.g.,   +(sum.toFixed(2))
    //
  
    // lookup table for currency values, highest to lowest
    var currencyValue = {
        "ONE HUNDRED": 100.0,
        "TWENTY": 20.0,
        "TEN": 10.0,
        "FIVE": 5.0,
        "ONE": 1.0,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY" : 0.01,
    }
  
    // Returns the total amount of money in a cash drawer
    function cashTotal(obj) {
        var sum = 0;
        for (let currency in obj) {
            sum += obj[currency];
        }
        return +(sum.toFixed(2)); // Round a number to 2 digit precision
    }
  
    // Read in the cash in the drawer input array (cid) into an object for key:value lookup
     var cashInDrawer = {};
     for (let arr of cid) {
       cashInDrawer[arr[0]] = arr[1];
     }
  
    // compute the change due
    var totalCashInDrawer = cashTotal(cashInDrawer);
    var changeDue = +((cash - price).toFixed(2)); 
  
    // check for early exit conditions
    if (changeDue > totalCashInDrawer) {
        return { status: "INSUFFICIENT_FUNDS", change: []};
    } else if (changeDue === totalCashInDrawer) {
        return { status: "CLOSED", change: cid};   
    }
    
    // figure out how much change to give
    var changeArr = [];
    var changeGiven = 0;
    // Iterate from highest to lowest currency values: one hundred, fifty, twenty, etc.
    for (let curr in currencyValue) {
        // If there are no bills of this type of currency in the drawer, continue to the next currency
        if (!cashInDrawer[curr]) continue;
        // If the currency value is less than the change still due,
        // figure out how much of this type of currency we are giving back in change.
        if ((currencyValue[curr] <= changeDue) && (cashInDrawer[curr] > 0)) {
            // figure out the amount based on what we need and what's in the drawer
            let amt = currencyValue[curr]*Math.trunc(changeDue/currencyValue[curr]);
            amt = Math.min(cashInDrawer[curr], amt);
            // update the running totals, push the change onto the array
            changeDue = +((changeDue - amt).toFixed(2));     // Round to two digits
            changeGiven = +((changeGiven + amt).toFixed(2)); // Round to two digits
            changeArr.push([ curr, amt ]);
            // if the change due is now zero, we are done!
            if (changeDue === 0) break;
        }
    }
  
    if (changeDue === 0) {
      return { status: "OPEN", change: changeArr };
    } else {
      return { status: "INSUFFICIENT_FUNDS", change: []};
    }
  
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  //checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  //checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])