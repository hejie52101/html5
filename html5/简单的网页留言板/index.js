/**
 * Created by ClothesForMe on 16/7/5.
 */
function saveStorage(id) {
    var data = document.getElementById(id).value;
    var time = new Date().getTime();
    localStorage.setItem(time,data);
    alert("保存数据成功!");
    loadStorage("msg");
}
function loadStorage(id) {
    var result = "<table border='1'>";
    for (var i = 0; i < localStorage.length; ) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var date = new Date();
        date.setTime(key);
        var dateStr = date.toGMTString();
        result += "<tr><td>" + "这是第" + ++i + "条数据</td><td>" + value + "</td><td>" + dateStr + "</td></tr>";
    }
    result += "</table>";
    var target = document.getElementById(id);
    target.innerHTML = result;
}
function clearStorage(id) {
    localStorage.clear();
    alert("清除缓存成功!");
    loadStorage("msg");
}