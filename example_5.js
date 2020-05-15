'use strict'

// пример 5

function calc(arg1, arg2, operation) {
    switch (operation) {
        case '+' :
            return arg1 + arg2;
        case '-' :
            return arg1 - arg2;
        case '*' :
            return arg1 * arg2;
        case '/' :
            return arg1 / arg2;
        default :
            throw new Error('Неизвестный символ');

    }

}

alert(calc(3, 4, '*'));