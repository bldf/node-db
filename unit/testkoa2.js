const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

const Router = require('koa-router')


console.log(Router);
app.use( async ( ctx ) => {
    ctx.body = 'hello koa2' ;
    console.log('abc') ;
})

app.listen(3000) ;
console.log('[demo] start-quick is starting at port 3000')