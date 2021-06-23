// Menu_burger

menu.onclick = function myFunction() {
    var x = document.getElementById('myTopnav');

    if (x.className === "nav_menu") {
        x.className += "responsive"
    } else {
        x.className = "nav_menu";
    }
}



// Popup

// Объявить переменную модального окна в текущей области видимости
var model = document.getElementById('myModel');
// Переменная кнопки, открывающей модальное окно
var btn = document.getElementById('myBtn');
// Получение элемента <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];
// Когда пользователь нажимает кнопку, открывается pop-up форма 
btn.onclick = function() {
    model.style.display = "block";
}
// Когда пользователь нажимает кнопку (x) <span>, закрывается окно формы
span.onclick = function() {
    model.style.display = "none";
}
// Когда пользователь нажимает в любое место вне формы, закрыть окно формы
window.onclick = function(event) {
    if (event.target == model) {
        model.style.display = "none";
    }
}










































// var model_win = document.getElementById('Model');
// var services_btn = document.getElementById('details');
// var span = document.getElementsByClassName("close")[0];



// services_btn.onclick = function() {
//     model_win.style.display = "block";
// }
// span.onclick = function() {
//     model_win.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == model) {
//         model_win.style.display = "none";
//     }
// }