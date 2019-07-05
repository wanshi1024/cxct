/**
 * 
 * @param {Object} params 
 * containerId 容器id
 * arr 行业链接内容数组 {text:'文本',url:'跳转链接'}
 */
function tradeLink(params) {
    // console.log(params);
    var _html = `
    <ul>
        <li><a href=""></a></li>
    </ul>
    `;
    var $this = $(params.containerId);
    $this.html(_html)
    var li_html = '';
    $.each(params.arr, function (index, item) {
        li_html += `
         <li><a href="${item.url}">${item.text}</a></li>
         `;
    });
    $this.children('ul').html(li_html);

    // css --------------------
    $this.children('ul').css({
        display: 'flex',
        'justify-content': 'center',
        // border:'1px #505050 solid'
    }).children('li').css({
        width: '88px',
        height: '40px',
        'line-height': '40px',
        margin: '0 28px',
        'text-align': 'center'
    }).hover(function () {
        // over
        $(this).css({
            transform: 'scale(1.04)'
        })
    }, function () {
        // out
        $(this).css({
            transform: 'scale(1)'
        })
    }
    ).children('a').css({
        color: '#505050'
    })

}