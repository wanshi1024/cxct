/**
 * 
 * @param {*} params 
 * containerId 容器id
 * homeUrl 首页链接
 * logoSrc logo图片
 * title1 标题1
 * title2 标题2
 * tel1 电话1
 * tel2 电话2
 */
function header(params) {
    var _html = `
    <div class="header">
        <a href="${params.homeUrl}" class="logo">
            <img src="${params.logoSrc}" alt="">
        </a>
        <div class="title">
            <p class="title-1">${params.title1}</p>
            <p class="title-2">${params.title2}</p>
        </div>
        <div class="tel">
            <img src="./img/10_09.gif" alt="">
            <div class="tel-text">
                <p class="tel-1">${params.tel1}</p>
                <p class="tel-2">${params.tel2}</p>
            </div>
        </div>
    </div>
    `;
    $this = $(params.containerId);
    $this.html(_html);

    // css -------------------
    $this.find('.header').css({
        display: 'flex',
        'justify-content': 'space-between'
    }).find('.title').css({
        'width': '500px',
        'font-family': "宋体",
        'font-size': '20px',
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
    }).find('p').css({
        'line-height': '2em'
    });
    $this.find('.tel').css({
        width: '216px',
        height: '44px',
        display: 'flex',
        'justify-content': 'space-between',
        'align-self': 'center',
        color: '#c63d2a',
        'font-size': '18px',
    }).find('.tel-text').css({
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between',
       ' box-sizing': 'content-box'
    })
}