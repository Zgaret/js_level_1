'use strict';

/**
 * функция разбирает число на составляющие и преобразовывает его в объект
 * @param numb число которое нужно разобрать
 * @returns {ConvertNumberToObj|{}} возвращает полученный объект
 */
function getConvertNumberToObj(numb) {
    if(Number.isInteger(numb) && numb > 0 && numb < 999){
        let hundreds = Math.floor(numb / 100);
        let tens = Math.floor(numb % 100 / 10);
        let units = numb % 10;
        return new ParseNumber(hundreds, tens, units);

    }else {
        console.log('Некорректно переданный параметр');
        // хотел сделать сначала так, но подумал что это будет не пустой массив
        // return new GetHundreds();
        return {};
    }

}

function ParseNumber (hundreds, tens, units) {
    this.hundreds = hundreds;
    this.tens = tens;
    this.units = units;
}
// Другой вариант
/*ParseNumber.getConvertNumberToObj = function (numb) {
    if(Number.isInteger(numb) && numb > 0 && numb < 999){
        let hundreds = Math.floor(numb / 100);
        let tens = Math.floor(numb % 100 / 10);
        let units = numb % 10;
        return new ParseNumber(hundreds, tens, units);

    }else {

        return {};
    }
}
console.log(ParseNumber.getConvertNumberToObj(102));*/

const number = getConvertNumberToObj(102);
console.log(number)