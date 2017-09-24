"use strict"
module.exports = function zeros(expression) {
    let arr = [];
    let i;
    arr = expression.split('*');
    let res = '1';

    for (i=0;i<arr.length;i++) {
        if (arr[i].slice(-2) == '!!') {
            arr[i] = doubleFactorial(parseInt(arr[i]));
        }else if (arr[i].slice(-1) == '!') {
            arr[i] = factorial(parseInt(arr[i]));
            }
            res = multiply(res, arr[i]);
    }

    let count = 0;
    i=res.length - 1;
    while (true) {
        if (res[i] == '0') {
            count++;
            i--;
            continue
        }
        break
    }
    return count

};


function multiply(first, second) {
    let arrFirst = [];
    let arrSecond = [];
    let temp = [];
    let i;

    for (i=0; i<first.length; i++) {
        arrFirst.unshift(first[i]);
    }
    for (i=0; i<second.length; i++) {
        arrSecond.unshift(second[i]);
    }

    for (i=0; i< Math.max(arrSecond.length, arrFirst.length); i++) {
        if (arrSecond[i]) {
            let j=0;
            while (j<arrFirst.length) {
                if (!!temp[j+i]) {
                    temp[j+i]+=arrFirst[j]*arrSecond[i]
                }else{
                    temp[j+i] = arrFirst[j]*arrSecond[i]
                }
                j++;
            }
        }
    }

    let result ='';
    for (i=0; i<temp.length-1; i++) {
        temp[i+1] += Math.floor(temp[i]/10);
        temp[i] -= Math.floor(temp[i]/10)*10;
        result = temp[i]+result;
    }
    result =temp[temp.length-1]+result;
    return `${result}`;
};

function factorial(number) {
    if (+number === 0 || +number === 1) {return '1'}
    let arr = [];
    let i;

    for (i=number; i>0; i--) {
        arr.push(i);
    }
    let result = arr[0];
    for (i=1; i<arr.length; i++) {
        result = multiply(`${arr[i]}`,`${result}`);
    }

    return result;
};

function doubleFactorial(number) {
    if (+number === 0 || +number === 1) {return '1'}
    if (+number === 2) {return '2'}
    let arr = [];
    let i;

    for (i=number; i>0;) {
        arr.push(i);
        i-=2;
    }
    let result = arr[0];
    for (i=1; i<arr.length; i++) {
        result = multiply(`${arr[i]}`,`${result}`);
    }

    return result;
};
