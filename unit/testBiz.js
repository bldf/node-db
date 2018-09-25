function init(router){
    /********** Begin 加载测试代码 **************/
    router.get('/a.do',ctx=>{//加载测试页面，为了方便可以发送 ajax
        console.log(ctx.session.abc) ;
        ctx.body=`<h1>本页面为测试页面</h1><script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>`;
    });
    router.post('/b.do',ctx=>{//测试获取前台传递过来的参数
        console.log(ctx.session.abc="456") ;
        console.log('测试获取数据集',ctx.request.body)
        ctx.body = ctx.request.body;
    });
    /********** 加载测试代码  End**************/
}

module.exports=init ;