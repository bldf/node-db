describe('测试断言库jasmine，测试tools.js的api',function(){
    // 注意最好这里不要使用  ES6 的函数
    // 要在karma.conf.js 中的files将 index.js 和index.spect.js关联起来

    it('测试_T.validate()',function(){
        // expect   我们期望  wintdow.text(2) 的结果是  3 ；
        expect(_T.validate('','fk')).toEqual({ re: false, info: '不能为空' });
        expect(_T.validate('23','fk')).toEqual({ re: true, info: '' });
        // el:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
        //     els:'非邮箱格式',
        //     sj:/^1[34578]\d{9}$/,
        //     sjs:'非手机格式',
        //     dh:/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
        //     dhs:'非电话格式',
        //     wz:/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,
        //     wzs:'非网址格式',
        //     rq:/((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/,
        //     rqs:'非日期格式',
        //     fk:/\S{1,}/gi,
        //     fks:'不能为空',
        //     ll:
        expect(_T.validate('','el')).toEqual({ re: false, info: '非邮箱格式'});
        expect(_T.validate('124','el')).toEqual({ re: false, info: '非邮箱格式'});
        expect(_T.validate('124@qq.com','el')).toEqual({ re: true, info: ''});
        expect(_T.validate('124@qq.com','sj')).toEqual({ re: false, info: '非手机格式'});
        expect(_T.validate('156189','sj')).toEqual({ re: false, info: '非手机格式'});
        expect(_T.validate('15545666666','sj')).toEqual({ re: true, info: ''});
        expect(_T.validate('','wz')).toEqual({ re: false, info: '非网址格式'});
        console.log(_T.validate('http://www.baidu.com','wz'));
        expect(_T.validate('02155555','wz')).toEqual({ re: false, info: '非网址格式'});
        expect(_T.validate('www.baidu','wz')).toEqual({ re: false, info: '非网址格式'});
        expect(_T.validate('http://www.baidu.com','wz')).toEqual({ re: true, info: ''});
        expect(_T.validate('www.baidu.com','fk')).toEqual({ re: true, info: ''});
        expect(_T.validate('','fk')).toEqual({ re: true, info: '不能为空'});
    });

    // it('测试checkType是否能返回正确的值',function(){
    //    expect(checkType({})).toBe('object');
    // });
    // it("测试获取假数据是否正常", function() {
    //     var obj = getTestData({
    //         obj:{
    //             'aa3-4' : 'HH3-9',
    //             'AA3-4' : 'am8-8',
    //             'Aa3-4' : 'DD3-3',
    //         },
    //         size:8
    //     });
    //     console.log(obj);
    //     expect(obj).toEqual({});
    // });

});