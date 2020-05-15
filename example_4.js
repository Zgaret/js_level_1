'use strict'

// пример 4

//функция проверяет передано число или нет.
function isNumber(arg) {
    if(Number(isNaN(arg))){
        throw new Error('Не число');

    }else {
        return arg;
    }

}

// сложение 
function sum(arg1, arg2) {
    return isNumber(arg1) + isNumber(arg2);
}

// вычитание
function deduction(arg1, arg2) {
    return isNumber(arg1) - isNumber(arg2);
}

// умножение
function multiple(arg1, arg2) {
    return isNumber(arg1) * isNumber(arg2);
}

// деление
function division(arg1, arg2) {
    return isNumber(arg1) / isNumber(arg2);
}
