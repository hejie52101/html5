/**
 * Created by ClothesForMe on 16/7/13.
 */
$(document).ready(function () {
    //滚动条发生滚动时
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        var menu = $("#menu");
        var items = $("#content").find(".item");
        var currentId = ""; //当前所在的楼层(item) #id
        items.each(function () {
            var m = $(this);
            var itemIop = m.offset().top;
            if (top > itemIop - 100) {
                currentId = "#" + m.attr("id");
            }
            else {
                return false;
            }
        });
        //给相应的楼层a设置current,取消其他链接的current
        var currentLink = menu.find(".current");
        if (currentId && currentLink.attr("href") != currentId) {
            currentLink.removeClass("current");
            menu.find("[href='" + currentId + "']").addClass("current");
        }
        // console.log(top);
    });
});