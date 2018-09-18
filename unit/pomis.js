 function pomF(url){
    return new Promise((suF,erF)=>{
        setTimeout((d)=>{
            suF({obj:'asdf',url:url});
        },2000);
    });
 }

 async function asyF(){

     var aaa =  await pomF('www.baidu.com') ;
     console.log(aaa) ;
     var bbb =  await pomF('www.baid') ;
     console.log(aaa,bbb) ;
 }
 asyF() ;