var table = document.getElementById("table");


//--------- Обнуляем цвет кнопок и по умолчанию делаем активной кнопку "Все рейсы"

function clearColorFunc () {
var color = document.getElementsByClassName('button');
for (var i = 0; i < color.length; i++) {
    if (color[i].classList.contains("orange")) {
    color[i].classList.remove('orange');
}
}
};

document.getElementById("allflight").classList.add('orange');

// --------------------------------------

//--------- Обнуляем выдачу таблицы

function clearTableFunc () {
    while (table.rows.length > 0) {
    table.deleteRow(0);
}
};

// --------------------------------------

// --------- Шаблон строки таблицы

function createTable(i) {
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + data[i].boardNumber + "</td>" + "<td>" + data[i].from + "</td>" +
                   "<td>" + data[i].to + "</td>" +  "<td>" + data[i].startTime + "</td>" +  "<td>" + data[i].endTime + "</td>" +  "<td>" + data[i].status + "</td>";
    table.appendChild(tr);
};

// --------------------------------------

// --------- Функция создает таблицу, вызываеться загрузке окна

function myFunc() {
    for (var i = 0; i < data.length; i++) {
        createTable(i);
    }
};
myFunc();

// --------------------------------------

// --------- Обработчики событий.

window.onload = function() {

// --------- Обработчик при нажатии выдает все вылетевшие рейсы
    document.getElementById("departed").onclick = function () {
        clearColorFunc ();
        document.getElementById("departed").classList.add('orange');
        clearTableFunc ();
    for (var i = 0; i < data.length; i++) {
        if (data[i].status === "departed") {
        createTable(i);
        }
    }
};

// --------------------------------------

// --------- Обработчик при нажатии выдает все прибывшие рейсы

    document.getElementById("arrived").onclick = function () {
        clearColorFunc ();
        document.getElementById("arrived").classList.add('orange');
        clearTableFunc ();
    for (var i = 0; i < data.length; i++) {
        if (data[i].status === "arrived") {
            createTable(i);
        }
    }
};
// --------------------------------------

// --------- Обработчик при нажатии выдает все задержанные рейсы

    document.getElementById("delayed").onclick = function () {
        clearColorFunc ()
        document.getElementById("delayed").classList.add('orange');
        clearTableFunc ();
    for (var i = 0; i < data.length; i++) {
        if (data[i].status === "delayed") {
            createTable(i);
        }
    }
};

// --------------------------------------

// --------- Обработчик при нажатии выдает все рейсы (добавил на всякий случай для удобства)

    document.getElementById("allflight").onclick = function () {
        clearColorFunc ()
        document.getElementById("allflight").classList.add('orange');
        clearTableFunc ();
        myFunc();
    };

// --------------------------------------

// --------- Обработчик поиска срабатываеющий на нажатие Enter

    document.getElementById("search").onkeydown = function(event) {
            var searchQuery = document.getElementById("search").value;
            if (event.keyCode === 13 && searchQuery != "") {
                clearColorFunc ();
                clearTableFunc ();

            for (var i = 0; i < data.length; i++) {
                if (data[i].boardNumber === searchQuery) {
                    createTable(i);
                    return true;
                }
            }
        }
            if (event.keyCode === 13 && searchQuery != "") {
                var tr = document.createElement("tr");
                tr.innerHTML = "<td>По вашему запросу ничего не найдено.</td>"
                table.appendChild(tr);
            }
}
};

// --------------------------------------
