/**
 * 
 * @param {Object} options 
 * containerId 容器id
 * navArr 行业数组 每一项 {text:'文本',url:'跳转链接'}
 */
function tradeLink(options) {
    console.log(options.containerId);

    var _html = '<div class="trade_link">' +
        '			<p class="txt_3"></p>' +
        '		<div class="trade_link_con">' +
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
    $('.trade_link_con ul').html(li_html);
    //css
    (function () {
        $('.trade_link').css({
            margin: '9px 0px 0px 0px',
            padding: '0px',
            width: '100%',
            height: '50px',
            'line-height': '50px',
            background: 'url(./img/121.jpg)',
            overflow: 'hidden'
        })
        $('.txt_3').css({
            'font-family': "宋体",
            'font-size': '24px',
            margin: '2px 0 0 0',
            width:'10%',
            'padding-left': '0px',
            float: 'left',
            

        })
        $('.trade_link ul').css({
            margin: '0 auto',
            padding: '0px',
            width: '90%',
            'list-style': 'none',
            display: 'flex',
           'justify-content': 'space-around',
           'align-items': 'center'
        })
        $('.trade_link ul li').css({
            padding: '0px 6px',
            display:'inline-block',
            height:'100%',
            cursor: 'pointer'
        })

        $('.trade_link ul li a').css({
            'font-size': '18px',
            color: '#17233d',
            'font-weight': 'bold',
            'text-decoration': 'none'

        })
    })()


    //选中样式
    function selected(e) {
        e.css({
            background: 'url(./img/122.jpg)',
            // padding: '0px 13px 0px 13px',
            // margin: ' -3px -5px 0px 0px',
            // color: '#000000',
            // 'text-align': 'left'

        })
    }
    //未选中样式
    function unselected(e) {
        e.css({
            background:'none'
        })
    }
    $('.trade_link_con li').hover(function () {
            // over
            selected($(this))
        }, function () {
            // out
            unselected($(this))
        }
    );
    // var currentIndex = 0;
    // function clicktrade_link() {
    //     $('.trade_link_con ul li').each(function (index, element) {
    //         // element == this
    //         var Iindex = $(this).attr('index');
    //         if (currentIndex == Iindex) {
    //             selected($(this))
    //         } else {
    //             unselected($(this))
    //         }
    //     });
    // }
    // clicktrade_link();
    // $('.trade_link_con ul').delegate('li', 'click', function () {
    //     var Iindex = $(this).attr('index');
    //     currentIndex = Iindex;
    //     clicktrade_link();
    //     //处理每一项导航点击事件处

    // })
    $('.trade_link .txt_3').text(options.title3)
    //函数底部
}