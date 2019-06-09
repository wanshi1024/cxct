

/**
 * 
 * @param {Object} options 
 * containerId 容器id string
 * logoURL logo图片路径 string
 * indexURL 首页路径
 * title1 标题一
 * title2 标题二
 * tel1 电话一
 * tel2 电话二
 */
function header(options) {
    // console.log(options);

    var _html = '<div class="top">' +
        '		<div class="logo"><a href="#" title="点击跳转到首页"><img src="#" alt="logo" /></a></div>' +
        '		<div class="pic01">' +
        '			<p class="txt_1"></p>' +
        '			<p class="txt_2"></p>' +
        '		</div>' +
        '		<div class="br">' +
        '			<div class="tel">' +
        '				<p></p>' +
        '				<p></p>' +
        '			</div>' +
        '		</div>' +
        '	</div>';
    $(options.containerId).html(_html);
    // css
    (function () {
        $('.top').css({
            margin: '5px auto 0px auto',
            padding: '0px',
            width: '1030px',
            height: '102px',
            'text-align': 'left'
        })
        $('.logo').css({
            width: '260px',
            height: '70px',
            float: 'left',
            'margin-top': '0px',
        })
        $('.pic01').css({
            width: '500px',
            height: '70px',
            float: 'left',
            margin: '20px 0px 0px 20px',
        })
        $('.txt_1').css({
            'font-family': "宋体",
            'font-size': '20px',
            margin: '10px 0 0 0',
            'padding-left': '0px',
        })
        $('.txt_2').css({
            'font-family': "宋体",
            'font-size': '20px',
            margin: '10px 0 0 0px'
        })
        $('.options').css({
            float: 'right',
            margin: '48px 0px 0px 0px',
        })
        $('.br').css({
            width: '200px',
            height: '90px',
            float: 'right',
            margin: '50 0px 0px 50px',
        })
        $('.tel').css({
            background: 'url(./img/10_09.gif) no-repeat 0',
            height: '31px',
            width: '200px',
            'font-family': 'Verdana, Geneva, sans-serif',
            color: '#c63d2a',
            'font-size': '18px',
            'text-indent': '80px',
            'line-height': '5px',
            'font-style': 'italic',
            'letter-spacing': '-3px',
            'margin-top': '45px',
        })
    })()
    // 设置logo
    $('.logo img').attr('src', options.logoURL);
    $('.logo a').attr('href', options.indexURL);

    // 设置标题
    $('.pic01 .txt_1').text(options.title1)
    $('.pic01 .txt_2').text(options.title2)

    //设置电话
    $('.tel p:first').text(options.tel1)
    $('.tel p:last').text(options.tel2)


    //函数底部
}