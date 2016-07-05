/**
 * Created by ClothesForMe on 16/7/5.
 */
//临时保存
function saveStorage(id) {
    var target = document.getElementById(id);
    var str = target.value;
    sessionStorage.setItem("mess",str);
}
function loadStorage(id) {
    var target = document.getElementById(id);
    var msg = sessionStorage.getItem("mess");
    target.innerHTML = msg;
}

//永久保存
function saveStorageLocal(id) {
    var target = document.getElementById(id);
    var str = target.value;
    localStorage.setItem("mess",str);
}
function loadStorageLocal(id) {
    var target = document.getElementById(id);
    var msg = localStorage.getItem("mess");
    target.innerHTML = msg;
}