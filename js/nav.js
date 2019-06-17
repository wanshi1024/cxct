/**
 * @param {Object} params
 * containerId 容器id
 * navArr 导航内容数组 {text:'',url:''}
 * 
 */
function nav(params) {
    // console.log(params);
    var _html = `
        <ul></ul>
    `;
    var $this = $(params.containerId);
    var li_html = '';
    $this.html(_html);
    $.each(params.navArr, function (index, item) {
        li_html += `
         <li index=${index}>
            <a href='${item.url}'>${item.text}</a>
         </li>
         `
    });

    $this.children('ul').html(li_html);

    // css ------------------------

    $this.children('ul').css({
        display: 'flex',
        'justify-content': 'space-between',
        padding: '8px 0',
        'border-bottom': '2px rgba(60, 196, 252, 1) solid'
    }).children('li').css({
        transition: 'transform 200ms'
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
        'text-decoration': 'none',
        color: 'rgba(80, 80, 80, 1)',
        'font-size': '16px',
        'line-height': '16px',
        padding: '10px 10px',
    })

    // 选中
    function select(e) {
        e.find('a').css({
            background: 'rgba(60, 196, 252, 1)',
            color: 'white'
        })
    }
    //取消
    function unselect(e) {
        e.find('a').css({
            background: 'none',
            color: 'rgba(80, 80, 80, 1)'
        })
    }
    var currentIndex = sessionStorage.getItem('navIndex') | 0;
    // console.log(location);

    function clickNav() {
        $this.find('li').each(function (index, item) {
            var Iindex = $(this).attr('index');
            if (currentIndex == Iindex) {
                select($(this))
            } else {
                unselect($(this))
            }
        })
    }
    clickNav();
    $this.children('ul').delegate('li', 'click', function () {
        var Iindex = $(this).attr('index');
        currentIndex = Iindex;
        sessionStorage.setItem('navIndex', currentIndex);
        clickNav();
    })
    console.log(location.href);
    
    switch (location.href) {
        case 'https://wanshi1024.github.io/cxct-project/index.html':
            currentIndex = 0;
            clickNav();
            break;
        case 'https://wanshi1024.github.io/cxct-project/commercial.html':
            currentIndex = 2;
            clickNav();
            break;
        case 'https://wanshi1024.github.io/cxct-project/household.html':
            currentIndex = 3;
            clickNav();
            break;
        case 'https://wanshi1024.github.io/cxct-project/civil.html':
            currentIndex = 4;
            clickNav();
            break;
        default:
            break;
    }
}