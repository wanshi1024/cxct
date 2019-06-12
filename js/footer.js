/**
 * 
 * @param {*} params 
 * containerId 
 */
function footer(params) {
    // console.log(params);
    var p1 = 'Copyright @ 2015-2018 北京建筑环艺能源科技有限公司 版权所有 Power by MeiDe';
    var p2 = '地址：北京市丰台区造甲南里20号院西院';
    var _html = `
    <p class="p1">${p1}</p>
    <p class="p1">${p2}</p>
    `;
    var $this = $(params.containerId);
    $this.html(_html);

    // css ----------------
    $this.css({
        height:'100px',
    }).children('p').css({
        margin:'1em 0',
        'text-align': 'center',
        color:'#727272'
    })
}