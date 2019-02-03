Табло аэропорта
Разработайте клиентское приложение(сайт), где будет табло аэропорта.
У табло должны быть следующие функции:
просмотр только вылетающий рейсов
просмотр только прилетающих рейсов
просмотр задержанных рейсов
поиск по номеру рейса
В качестве примера можно посмотреть на http://www.svo.aero/.
Ограничений на использование шаблонизаторов и библиотек нет.
Выложите готовый код в репозиторий на гитхаб.
Плюсом будет, если данные для табло вы получите из публичных api. Если решите их не использовать,
то положите данные в отдельный файл в репозитории.

Ticker
Почему this._i не увеличивается. Как исправить?

function Ticker() {
this._i = 0
};

Ticker.prototype = {
tick: function() {
console.log(this._i++);
}
};

var ticker = new Ticker();
setInterval(ticker.tick, 1000);


setInterval - получил функцию а нее контекст (var f = ticker.tick; setInterval (f, 1000) -- контекст ticker потерян).
Функция tick ищет свойство _i, в объекте window, найти не может и возвращает undefined. При каждом вызове метода ticker.tick, свойство _i увеличиваеться на единицу undefined + 1 == NaN. Решение: создать замыкание при помощи функции-обертки.

//-----------Вариант №1 ------------


function Ticker() {
this._i = 0;
};

Ticker.prototype = {
 tick: function() {
 console.log(this._i++);
 }
};
var ticker = new Ticker();


setInterval(function() { ticker.tick();
} , 1000);


//-----------Вариант №2 ------------

function Ticker() {
this._i = 0;
};

Ticker.prototype = {
 tick: function() {
 console.log(this._i++);
 }
};
var ticker = new Ticker();

setInterval(ticker.tick.bind(ticker), 1000);
