'use strict'

// пример 6

let money = prompt('Введите сумму для пополнения');
let lastNum = money[money.length - 1];
if(money[money.length - 2] == 1){
    alert(`Ваша сумма в ${money} рублей успешно зачислена.`);
}else {
    if(lastNum == 1){
        alert(`"Ваша сумма в ${money} рубль успешно зачислена`);

    }else if(lastNum == 0 || lastNum >= 5 && lastNum <= 9 ){
        alert(`Ваша сумма в ${money} рублей успешно зачислена.`);
    }else {
        alert(`Ваша сумма в ${money} рубля успешно зачислена`);
    }
}
