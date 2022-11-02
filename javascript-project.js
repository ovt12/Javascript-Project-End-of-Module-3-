// Functions Challeneg

let isNumberPositive = (number) => {
    if (number >= 0) {
        return true;
    } else if (number < 0) {
        return false;
    } else {
        console.log("Please enter a number!");
    }
}
isNumberPositive("O");

const convertDaysToAge = (days) => {
    calculate =  days / 365;
    return calculate;
}
console.log(convertDaysToAge(6570));

const getLargestNumber = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}
console.log(getLargestNumber(6,2,3));

const getLastName = (n) => {
    lastname = n[n.length - 1]
    console.log(lastname);

}
getLastName(["Alex", "Ollie", "Tom"]);

const allNumbersPositive = (numbers) => {
    if (numbers < 0) {
            return false;
        } else {
            return true;
        }
    }
console.log(allNumbersPositive([2, 7, 12]));

