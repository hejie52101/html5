/**
 * Created by ClothesForMe on 16/7/13.
 */
// 根据class name获取元素
function getByClassName(obj, cls) {
    var elements = obj.getElementsByTagName("*");
    var result = [];
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].className == cls) {
            result.push(elements[i]);
        }
    }
    return result;
}

function hasClass(obj, cls) {
    return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        obj.className = obj.className.replace(reg, "");
    }
}

function addClass(obj, cls) {
    if (!hasClass(obj, cls)) {
        obj.className += " " + cls;
    }
}
window.onload = function () {
    window.onscroll = function () {
        var top = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
        var menus = document.getElementById("menu").getElementsByTagName("a");
        console.log(menus);
        var items = getByClassName(document.getElementById("content"), "item");
        var currentId = "";
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemTop = item.offsetTop;
            if (top > itemTop - 100) {
                currentId = item.id;
            }
            else {
                break;
            }
        }
        if (currentId) {
            // 给正确的menu下的a元素class赋值
            for (var j = 0; j < menus.length; j++) {
                var menu = menus[j];
                var href = menu.href.split("#");
                console.log(href);
                if (href[href.length - 1] != currentId) {
                    removeClass(menu, "current");
                }
                else {
                    addClass(menu, "current");
                }
            }
        }
    }
}