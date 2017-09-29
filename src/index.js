"use strict";
module.exports = function zeros(expression) {
        let count2 = 0;
        let count5 = 0;
        let arr = expression.split('*');

        for (let i = 0; i < arr.length; i++) {
            let tempNum = parseInt(arr[i]);
            if (arr[i].endsWith('!!')) {
                if (tempNum % 2) {
                    count5 += countOdd(tempNum);
                }else {
                    let [twos, fives] = countEven(tempNum);
                    count2 += twos;
                    count5 += fives;
                };
            } else if (arr[i].endsWith('!')) {
                count5 += countOdd(tempNum);
                let [twos, fives]  = countEven(tempNum);
                count2 += twos;
                count5 += fives;
            };
        };

        if (count2 < count5) {
            return (count2);
        } else {
            return (count5);
        };

        function countOdd(num) {
            let tempCount = 0;
            for (let i=5; i<=num; i+=10){
                let k=5;
                while (!(i%k)) {
                    k *=5;
                    tempCount++;
                };
            };
            return tempCount;
        };

        function countEven(num) {
            let tempCount2 = 0;
            for (let i=2; i<=num; i+=2) {
                let k=2;
                while (!(i%k)) {
                    k *=2;
                    tempCount2++;
                };
            };
            let tempCount5 = Math.floor(num/10);
            tempCount2 -= Math.floor(num/10);

            let j = 50;
            while (Math.floor(num/j)) {
                tempCount5 += Math.floor(num/j)
                tempCount2 -= Math.floor(num/j);
                j += 100;
            };
            return [tempCount2, tempCount5]
        };
    };

// Previous version
/*
    let arr = [];
    let i;
    arr = expression.split('*');
    let res = '1';

    for (i = 0; i < arr.length; i++) {
        if (arr[i].slice(-2) == '!!') {
            arr[i] = doubleFactorial(parseInt(arr[i]));
        } else if (arr[i].slice(-1) == '!') {
            arr[i] = factorial(parseInt(arr[i]));
        }
        res = multiply(res, arr[i]);
    }

    let count = 0;
    i = res.length - 1;
    while (true) {
        if (res[i] == '0') {
            count++;
            i--;
            continue
        }
        break
    }
    return count


    function multiply(first, second) {
        let arrFirst = [];
        let arrSecond = [];
        let temp = [];
        let i;

        for (i = 0; i < first.length; i++) {
            arrFirst.unshift(first[i]);
        }
        for (i = 0; i < second.length; i++) {
            arrSecond.unshift(second[i]);
        }
        for (i = 0; i < Math.max(arrSecond.length, arrFirst.length); i++) {
            if (arrSecond[i]) {
                let j = 0;
                while (j < arrFirst.length) {
                    if (!!temp[j + i]) {
                        temp[j + i] += arrFirst[j] * arrSecond[i]
                    } else {
                        temp[j + i] = arrFirst[j] * arrSecond[i]
                    }
                    j++;
                }
            }
        }

        let result = '';
        for (i = 0; i < temp.length - 1; i++) {
            temp[i + 1] += Math.floor(temp[i] / 10);
            temp[i] %= 10;
            result = temp[i] + result;
        }
        result = temp[temp.length - 1] + result;
        return result;
    };

    function factorial(number) {
        if (+number === 0 || +number === 1) {
            return '1'
        }
        let arr = [];
        let i;

        for (i = number; i > 0; i--) {
            arr.push(i);
        }
        let result = arr[0];
        for (i = 1; i < arr.length; i++) {
            result = multiply(`${arr[i]}`, `${result}`);
        }
        return result;
    };

    function doubleFactorial(number) {
        if (+number === 0 || +number === 1) {
            return '1'
        }
        if (+number === 2) {
            return '2'
        }
        let arr = [];
        let i;

        for (i = number; i > 0;) {
            arr.push(i);
            i -= 2;
        }
        let result = arr[0];
        for (i = 1; i < arr.length; i++) {
            result = multiply(`${arr[i]}`, `${result}`);
        }
        return result;
    };
};*/
