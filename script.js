do {
    var quest = +prompt('Сколько примеров вы хотите?');
} while (quest == 0 || isNaN(quest));

var a = Math.ceil(Math.random()*(25 + 1 - 1) + 1);
var b = Math.ceil(Math.random()*(25 + 1 - 1) + 1);
var d = Math.ceil(Math.random()*(25 + 1 - 1) + 1);
var e = Math.ceil(Math.random()*(25 + 1 - 1) + 1);
var l = Math.ceil(Math.random()*(25 + 1 - 1) + 1);
var f = Math.ceil(Math.random()*(25 + 1 - 1) + 1);
var g = Math.ceil(Math.random()*(25 + 1 - 1) + 1);
var h = Math.ceil(Math.random()*(25 + 1 - 1) + 1);

function ask(c) {
    с = Math.round(Math.random() * (4 + 1 - 1) + 1);
    if (с == 1) {
        с = +prompt(a + "+" + b);
        if (с == a + b) {
            console.log("Верно");
        } else {
            console.log('Неверно , ответ ' + (a + b));
        }
    }
    if (с == 2) {
        с = +prompt(d + "-" + e);
        if (с == d - e) {
            console.log('Верно');
        } else {
            console.log('Неверно , ответ ' + (d - e));
        }
    }
    if (с == 3) {
        с = +prompt(l + "*" + f);
        if (с == l * f) {
            console.log("Верно");
        } else {
            console.log('Неверно , ответ ' + (l * f));
        }
    }
    if (с == 4) {
        с = +prompt(g + "/" + h);
        if (с == g / h) {
            console.log('Верно');
        } else {
            console.log('Неверно , ответ ' + (g / h));
        }
    } return c;
    } 

var answer;

for (let i = 0; i < quest; i++) {
    ask(answer);
}