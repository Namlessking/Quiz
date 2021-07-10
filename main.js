const question = document.querySelector('.quest');
const button = document.querySelector('.butt');
let i = 0, comp = 0;
const _questions = ['what day is to day ?', "what's up?", "what does HTML stand for ?"];
const _answer1 = ['is today', "i don't know", "wait, what day is it ?", "yes"];
const _answer2 = ['YES', "Yes", "Yes?", "yes!"];
const _answer3 = ["Hyper Text Markup Language", "Human That Make Lol", "I ran out of answers", "N/A"]

function fun() {
    if (comp == 0) {
        question.innerText = _questions[comp]
        for(i = 0; i < 4 ; i++) {
            const radio = document.getElementsByName('1')[i];
            console.log(i);
            console.log(radio);
            radio.innerText = _answer1[i];
        }
        comp++;
    } else if (comp == 1) {
        question.innerText = _questions[comp]
        for(i = 0; i < 4 ; i++) {
            const radio = document.getElementsByName('1')[i];
            console.log(i);
            console.log(radio);
            radio.innerText = _answer2[i];
        }
        comp++;
    }else if (comp == 2){
        question.innerText = _questions[comp]
        for(i = 0; i < 4 ; i++) {
            const radio = document.getElementsByName('1')[i];
            console.log(i);
            console.log(radio);
            radio.innerText = _answer3[i];

            button.innerHTML = "Refresh"
        }
        comp++;
    }else {
        location.reload();
    }
}