'use strict'

function printNum() {
    for(let i = 0; i <= 10; i++){
        if(i === 0){
            console.log(i + ' - это 0');
        }else if(i % 2 === 0){
            console.log(i + ' - это четное число');
        }else{
            console.log(i + ' - это нечетное число');
        }
    }
}

printNum();