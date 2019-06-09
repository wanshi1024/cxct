/**
 * 
 * @param {Object} options 
 * containerId 容器id
 * navArr 导航数组 每一项 {text:'文本',url:'跳转链接'}
 */
function nav(options) {
    console.log(options.containerId);

    var _html = '<div class="nav">' +
        '		<div class="nav_con">' +
        '			<ul>' +
        '			</ul>' +
        '		</div>' +
        '	</div>';

    $(options.containerId).html(_html);

    // 插入 li
    var li_html = '';
    $.each(options.navArr, function (indexInArray, valueOfElement) {
        li_html += '<li index=' + indexInArray + '><a href="' + valueOfElement.url + '"><span>' +
            valueOfElement.text + '</span></a></li>';
    });
    $('.nav_con ul').html(li_html);
    //css
    (function () {
        $('.nav').css({
            margin: '9px 0px 0px 0px',
            padding: '0px',
            width: '100%',
            height: '40px',
            'line-height': '40px',
            background: 'url(./img/nav_bg3.jpg) repeat-x',
            'vertical-align': 'middle',
            'text-align': 'left',
        })

        $('.nav_con').css({
            margin: '0px auto',
            padding: '0px',
            width: '1000px',
        })
        $('.nav ul').css({
            margin: '0px 0px 0px 15px',
            padding: '0px',
            width: '1000px',
            'list-style': 'none',
        })
        $('.nav ul li').css({
            margin: '0px 13px 0px 0px',
            padding: '0px',
            float: 'left',
            transition:'all 900ms'
        })

        $('.nav ul .cur a').css({
            'font-size': '14px',
            'font-weight': 'bold',
            padding: '0px 13px',
            color: '#000',
            display: 'block',
            padding: '0px 13px 0px 13px',
            margin: '-3px -25px 0px 0px',
            position: 'relative',
            display: 'inline',
            overflow: 'hidden',
            transition:'all 900ms'
        })
        $('.nav ul .cur span ').css({
            display: 'block',
            height: '43px',
            padding: '3px 25px 0px 0px',
            float: 'left',
            transition:'all 900ms'
        })
        $('.nav ul li a').css({
            'font-size': '14px',
            color: '#000',
            'font-weight': 'bold',
            padding: '0px 13px',
            float: 'left',
            'text-decoration': 'none',
        })
    })()


    //选中样式
    function selected(e) {
        e.children('a').css({
            background: 'url(./img/left.jpg) no-repeat left top',
            padding: '0px 13px 0px 13px',
            margin: ' -3px -25px 0px 0px',
            color: '#FFF',
        }).children('span').css({
            display: 'block',
            background: 'url(./img/right1.png) no-repeat top right',
            height: '43px',
            padding: '3px 25px 0px 0px'
        })
    }
    //未选中样式
    function unselected(e) {
        e.children('a').css({
            background: 'none',
            color: '#000',
        }).children('span').css({
            background: 'none',
        })
    }
    var currentIndex = 0;
    function clickNav() {
        $('.nav_con ul li').each(function (index, element) {
            // element == this
            var Iindex = $(this).attr('index');
            if (currentIndex == Iindex) {
                selected($(this))
            } else {
                unselected($(this))
            }
        });
    }
    clickNav();
    $('.nav_con ul').delegate('li', 'click', function () {
        var Iindex = $(this).attr('index');
        currentIndex = Iindex;
        clickNav();
        //处理每一项导航点击事件处
        
    })


    // $('.nav ul li a').hover(function () {
    //     // over
    //     $(this).css({
    //         background: 'url(./img/left.jpg) no-repeat left top',
    //         padding: '0px 13px 0px 13px',
    //         margin: ' -3px -25px 0px 0px',
    //         color: '#FFF',
    //     }).children('span').css({
    //         display: 'block',
    //         background: ' url(./img/right1.png) no-repeat top right',
    //         padding: ' 3px 25px 0px 0px'
    //     })
    // }, function () {
    //     // out
    //     $(this).css({
    //         background: 'none',
    //         color: '#000',
    //     }).children('span').css({
    //         background: 'none',
    //     })
    // }
    // );

    //函数底部
}