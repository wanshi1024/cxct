
/**
 * 
 * @param {Object} options 
 */
function copyright(options) {
    console.log(options);

    var _html = '<div class="copyright">' +
        '		<div class="logo"><a href="#" title="点击跳转到首页"><img src="#" alt="logo" /></a></div>' +
        '		<div class="copy_1">' +
        '			<p class=txt_1></p>' +
        '			<p class=txt_2></p>' +
		'			<p class=txt_4></p>' +
        '		</div>' +
        '		</div>' +
        '	</div>';
    $(options.containerId).html(_html);
    // css
    (function () {
        $('.copyright').css({
            margin: '10px 0 0 0',
            padding: '35px 10%',
            // width: '100%',
			background: 'url(./img/cbg.jpg) repeat-x',
            // height: '180px',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
			// 'vertical-align': 'middle',
            // 'text-align': 'left' 
        })
        $('.copyright .logo').css({
            // width: '260px',
            // height: '70px',
            // float: 'left',
            // margin: '17px 15px 0px 390px',			
        })
        $('.copyright .copy_1').css({
			// width:'100%',
			// height:'70',
            // margin: '0px 5px 0px 0px',
            'margin-left':'20px'
		})
        $('.copyright .txt_1').css({
            'font-family': "宋体",
            'font-size': '20px',
			color:'#dcdcdc',
            margin: '0px 0 0 0',
            // 'padding-left': '0px',
            
        })
        $('.copyright .txt_2').css({
            'font-family': "宋体",
            'font-size': '20px',
			color:'#dcdcdc',
            margin: '10px 0 0 0px'
           
        })
        $('.copyright .txt_4').css({
            'font-family': "宋体",
            'font-size': '20px',
			color:'#dcdcdc',
            margin: '10px 0 0 0px'
        })
    })()
    // 设置logo
    $('.copyright .logo img').attr('src', options.logoURL);
    $('.logo a').attr('href', options.indexURL);

    // 设置标题
    $('.copyright .copy_1 .txt_1').text(options.title1)
    $('.copyright .copy_1 .txt_2').text(options.addr)
	$('.copyright .copy_1 .txt_4').text(options.tel)

    //设置电话


    //函数底部
}