
var express = require('express');
var app = express();
var axios = require('axios')
//解决跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
 
app.get('/getList.json',function(req,res){
 
    //返回的json对象
    var obj = {};
    var params = {
        username: 'admin',
        password: 'admin369874125'
        }
    axios.post('http://120.79.232.23/api/user/login', params)
    .then(response => {
        console.log(response.data.data)
        obj = response.data.data
        res.jsonp(obj)
    });
    // console.log(obj)
    
});
 
app.listen(3030);