function init (arr,dbFn,obj){
    var obj2 = dbFn({STRING:true});//增加一个验证，防止写错
    var keys = Object.keys(obj);
    keys.map(function(o){
        if(!obj2[o]){
            throw `字段填写错误【${o}】`;
        }
    });
    // 如果是数组就是留下什么验证
    if(({}).toString.call(arr).replace(/\[|\]/gi,'').replace(/[a-zA-Z]+\s+/gi,'').toLowerCase() ==='array'){
        let obj3 = {} ;
        arr.map(function(d){
            if(obj[d]){
                obj3[d] =obj[d] ;
            }else{
                throw `字段填写错误【${d}】`;
            }
        })
        return obj3 ;
    }
    // 如果是字符串就是去掉什么验证
    if(({}).toString.call(arr).replace(/\[|\]/gi,'').replace(/[a-zA-Z]+\s+/gi,'').toLowerCase() ==='string'){
        delete obj[arr];
    }
    return obj ;
}
module.exports = init ;