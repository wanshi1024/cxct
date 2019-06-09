
/**
 * 热销商品
 * @param {*} options 
 * containerId 容器id
 * dataArr 数组数据 4个 
 *  每一项为json {imgSrc:'',title:'',synopsis:'',url:''}
 *  imgSrc 封面图路径 title 商品标题 synopsis 商品简介 url 商品跳转链接
 * moreUrl 更多商品跳转路径
 */
function hotProduct(options) {
    // console.log(options);
    var _html = '<div class="hot_goods">' +
        '        <div class="header">' +
        '            <span>热销商品</span>' +
        '            <a href="">更多商品>></a>' +
        '        </div>' +
        '        <div class="hot-goods-content">' +
        '            <div class="box">' +
        // '                <a href="#">' +
        '                    <img src="" alt="">' +
        '                    <div class="txt">' +
        '                        <p class="title"></p>' +
        '                        <p class="synopsis"></p>' +
        '                    </div>' +
        // '                </a>' +
        '            </div>' +
        '        </div>' +
        '    </div>';

    $(options.containerId).html(_html);

    var $hotGoods = $('.hot_goods');

    $hotGoods.find('.header a').attr('href', options.moreUrl)// 设置更多商品跳转url

    var _box = '';
    $.each(options.dataArr, function (index, item) {
        _box += '<div class="box">' +
            '                    <img src="' + item.imgSrc + '" alt="">' +
            '                    <div class="txt">' +
            '                        <p class="title">' + item.title + '</p>' +
            '                        <p class="synopsis">' + item.synopsis + '</p>' +
            '                    </div>' +
            '        </div>'
    });
    $(options.containerId).find('.hot-goods-content').html(_box);

    // 循环给商品点击跳转事件
    $('.hot_goods .box').each(function (index, element) {
        // element == this
        $(this).click(function () {
            // console.log($(this).find('.title').text());
            // console.log(index);
            window.location.href = options.dataArr[index].url;
        })

    });

    (function () {

        //.header css
        $hotGoods.find('.header').css({
            padding: '1%',
            background: '#f4f4f4'
        }).children('a').css({
            float: 'right',
            'text-decoration': 'none',
            color: 'rgb(3, 144, 212)'
        }).hover(function () {
            // over
            $(this).css({
                'text-decoration': 'underline',
            })
        }, function () {
            // out
            $(this).css({
                'text-decoration': 'none',
            })
        }
        ).siblings('span').css({
            'font-weight': 'bold'
        });
        //container css
        $hotGoods.find('.hot-goods-content').css({
            display: 'flex',
            'justify-content': 'space-between',
            padding: '1% 0%'
        }).find('.box').css({
            width: '22%',
            background:'#FFFFFF',
            cursor: 'pointer',
            'box-shadow': '2px 2px 30px rgba(0,0,0,.05)',
            transition:'all 300ms'
        }).hover(function () {
            $(this).css({
                'box-shadow': '2px 2px 30px rgba(0,0,0,.15)',
                transform: 'scale(1.02)'
            })
        }, function () {
            $(this).css({
                'box-shadow': '2px 2px 30px rgba(0,0,0,.05)',
                transform: 'scale(1)'
            })
        }).find('img').css({
            width: '100%',
        }).siblings('.txt').css({
            padding: '0 4%'
        }).children('.title').css({
            'font-size': '1.1em',
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': '1',
            '-webkit-box-orient': 'vertical'
        }).siblings('.synopsis').css({
            'font-size': '.9em',
            color: '#999',
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical'
        })

    })()


}