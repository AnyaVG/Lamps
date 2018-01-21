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
let count=[0,0,0,0,0];

for (let i = 0; i < len; i++) {
    btns[i].onclick = function () {
        if (btns[i].classList.contains('active')) {
            btn_all.classList.remove('active');
            count[i]=0;
            console.log(count);
        }
        else {
            count[i]=1;
        }
        let count_num=0;
        for (let j= 0; j < len; j++) {
            count_num+=count[j];
            console.log(count);
            console.log('count_num in for ' + count_num);
        }
        if (count_num >= 5) {
            btn_all.classList.add('active');
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
        }
        else {
            btns[i].classList.remove('active');
            lamps[i].classList.remove('active');
            for (let j= 0; j < len; j++) {
                count[j]=0;
            }
            console.log(count);
        }
    }
};


