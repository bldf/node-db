const  _T = function(){

}
/**
 * 将日期转换为指定格式的字符串
 * str="yyyy/MM/dd HH:mm:ss"
 * 不传递参数默认格式为： str="yyyy/MM/dd HH:mm:ss"
 *传递1表示 str =  "yyyy-MM-dd HH:mm:ss "
 *传递2表示 str="HH:mm:ss"
 */
_T.format=function(date,str){
    var y = date.getFullYear(), M = date.getMonth()+1, d = date.getDate(), H = date.getHours(), m = date.getMinutes() , s = date.getSeconds() ;
    !str && (str = 'yyyy/MM/dd HH:mm:ss');
    str === 1&&(str ="yyyy-MM-dd HH:mm:ss");
    str === 2&&(str ="HH:mm:ss");
    return str.replace('yyyy',y).replace('MM',_T.toO(M)).replace('dd',_T.toO(d)).replace('HH',_T.toO(H)).replace('mm',_T.toO(m)).replace('ss',_T.toO(s)) ;
};
_T.toO=function(str){
    var str= Number(str) ;
    return str<10 ?('0'+str) : str ;
}
module.exports = _T;
// console.log(_T.format(new Date(),'yyyyMMddHHmmss')) ;
// console.log(_T.toO(2));