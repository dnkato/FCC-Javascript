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
    //console.log("<1> Change Due = " + changeDue + ", Cash in Drawer = " + totalCashInDrawer);
  
    // check for early exit conditions
    if (changeDue > totalCashInDrawer) {
        return { status: "INSUFFICIENT_FUNDS", change: []};
    } else if (changeDue === totalCashInDrawer) {
        return { status: "CLOSED", change: cid};   
    }
    
    // figure out how much change to give
    var changeArr = [];
    var changeGiven = 0;
    for (let curr in currencyValue) {
        if (!cashInDrawer[curr]) continue;
        if ((currencyValue[curr] <= changeDue) && (cashInDrawer[curr] > 0)) {
            let amt = currencyValue[curr]*Math.trunc(changeDue/currencyValue[curr]);
            amt = Math.min(cashInDrawer[curr], amt);
            changeDue = +((changeDue - amt).toFixed(2));
            changeGiven = +((changeGiven + amt).toFixed(2));
            changeArr.push([ curr, amt ]);
            //console.log("    >>>>>>> " + curr +": " + amt); 
            if (changeDue === 0) break;
        }
    }
  
    //console.log("<2> Change Due = " + changeDue + ", Change Given = " + changeGiven) 
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