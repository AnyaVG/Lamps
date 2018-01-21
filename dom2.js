const lamp = document.querySelector('.lamp'); // первый попавшийся
const lampAll = document.querySelectorAll('.lamp'); // все элементы

/*function toggleOn(element) {
    element.classList.toggle('active');
}


lampAll[0].onclick = function() {
    toggleOn(lampAll[1]);
}
lampAll[1].onclick = function() {
    toggleOn(lampAll[1]);
}
*/


const lamps = document.querySelectorAll('div.lamp');
const btns = document.querySelectorAll('div.btn');
const btn_all = document.querySelector('div.btn_all');
let len = lamps.length;
let count=Array(5).fill(0);
console.log(count);


function isOne(element) {
    return element === 1;
}

for (let i = 0; i < len; i++) {
    btns[i].onclick = function () {
        if (btns[i].classList.contains('active')) {
            btn_all.classList.remove('active');
            count[i]=0;
            console.log('Выключаем ' + count);
        }
        else {
            count[i]=1;
            console.log('Включаем ' + count);
        }
        if (count.every(isOne)) {
            btn_all.classList.add('active');
            console.log('All 1 ' + count);
        }
        btns[i].classList.toggle('active');
        lamps[i].classList.toggle('active');
    };
}


btn_all.onclick = function () {
    btn_all.classList.toggle('active');
    for (let i = 0; i < len; i++) {
        if (btn_all.classList.contains('active')){
            btns[i].classList.add('active');
            lamps[i].classList.add('active');
            count.fill(1);
            console.log('Все включаем ' + count);
        }
        else {
            btns[i].classList.remove('active');
            lamps[i].classList.remove('active');
            count.fill(0);
            console.log('Все вЫключаем ' + count);
        }
    }
};


