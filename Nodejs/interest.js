var bigdecimal = require("bigdecimal");


//float num input must be string
function simpleInterest(day, capital, rate, isAnnualInterestRate = false) {
    var one = new bigdecimal.BigDecimal('1');
    var yearCalcDay = new bigdecimal.BigDecimal('360');
    var day = new bigdecimal.BigDecimal(day);
    var capital = new bigdecimal.BigDecimal(capital);
    var rate = new bigdecimal.BigDecimal(rate);

    var interest = capital.multiply(rate).multiply(day);
    // console.log(capital.multiply(rate).multiply(day) + "");
    if (isAnnualInterestRate) {
        interest = interest.divide(yearCalcDay);
    }
    return interest;
}

//float num input must be string
function simpleInterestSum(day, capital, rate, isAnnualInterestRate = false) {
    var capital = new bigdecimal.BigDecimal(capital);
    return simpleInterest(...arguments).add(capital);
}


function compoundInterest(day, capital, rate, isAnnualInterestRate = false) {
    var capital = new bigdecimal.BigDecimal(capital);
    return compoundInterestSum(...arguments).subtract(capital);
}

function compoundInterestSum(day, capital, rate, isAnnualInterestRate = false) {
    var one = new bigdecimal.BigDecimal('1');
    var yearCalcDay = new bigdecimal.BigDecimal('360');
    var capital = new bigdecimal.BigDecimal(capital);
    var rate = new bigdecimal.BigDecimal(rate);
    //if the exact quotient cannot be represented (because it has a non-terminating decimal expansion) an ArithmeticException is thrown.
    if (isAnnualInterestRate) {
        try {
            rate = rate.divide(yearCalcDay);
        } catch (e) {
            console.log(console.log('日利率是无理数', e));
        }
    }
    var sum = capital.multiply(rate.add(one).pow(day));
    return sum;
}



// 获得期内天数，因为要获取开始日，所以没用Date对象
function getDaysTillDeadline(year, month, startDate, interestDate = 20) {
    var daysOfMonth = 32 - new Date(year, month - 1, 32).getDate();
    // console.log(daysOfMonth, '=');
    if (startDate < interestDate) {
        return interestDate - startDate + 1;
    } else return daysOfMonth - startDate + 1 + interestDate;
}

//Date object 版本
function getDaysTillDeadlineOO(date, interestDate = 20) {
    var year = date.getFullYear()
    var month = date.getMonth()
    var startDate = date.getDate()
    var daysOfMonth = 32 - new Date(year, month, 32).getDate();
    // console.log(daysOfMonth, '=');
    if (startDate < interestDate) {
        return interestDate - startDate + 1;
    } else return daysOfMonth - startDate + 1 + interestDate;
}

// 打印按月结算
function bigLogger(startTime, endTime, interestDate) {
  var days = getDaysTillDeadline(startTime.getFullYear(), startTime.getMonth() + 1, startTime.getDate(), interestDate);
  console.log(startTime.getMonth() + 1);
  console.log(days);
  console.log(simpleInterest(days, 4500000, "0.06", true).toString());
}
var startTime = new Date(2013, 10, 21)
bigLogger(startTime, startTime, 20)

// console.log(getDaysTillDeadline(2014, 7, 21, 17));
// todo
function test() {
    console.log(simpleInterest(getDaysTillDeadline(2013, 11, 14, 20),
        4500000, "0.06", true).toString());
    for (var i = 11; i < 13; i++) {
        console.log(simpleInterest(getDaysTillDeadline(2013, i, 21), 4500000, "0.06", true).toString());
    }
    for (var i = 1; i < 7; i++) {
        console.log(getDaysTillDeadline(2014, i, 21), simpleInterest(getDaysTillDeadline(2014, i, 21), 4500000, "0.06", true).toString());
    }
    console.log(getDaysTillDeadline(2014, 7, 21, 17), simpleInterest(getDaysTillDeadline(2014, 7, 21, 17), 4500000, "0.06", true).toString());
}



// test()
//test
var single = simpleInterest(30, 4500000, "0.06", true).toString()
var com = compoundInterest(30, 90750.00, "0.09", true).toString()
// console.log(single);
// console.log(com);
