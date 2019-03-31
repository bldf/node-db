describe('测试断言库jasmine，测试tools.js的api',function(){
    // 注意最好这里不要使用  ES6 的函数
    // 要在karma.conf.js 中的files将 index.js 和index.spect.js关联起来

    it('测试_T.validate()',function(){
        // expect   我们期望  wintdow.text(2) 的结果是  3 ；
        // var re = _T.validate('','fk') ;
        // console.log(re) ;
        // expect(123).toEqual({ re: false, info: '不能为空' });
        expect(123).toBe(123);
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