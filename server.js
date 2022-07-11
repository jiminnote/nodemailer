const  express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log("StartServer : localhost:3000");  //app이 포트 3000으로 정상 작동되면 출력
});


app.set('views',__dirname + '/views');
app.set('view engine','ejs')  //ejs : 임베디드 자바 템블릿
app.engine('html',require('ejs').renderFile);

//라우터 만들기
app.get('/', function(req, res) {    //localhost:3000
    res.render('index.html');
  });
//라우터 만들기
app.get('/about', function(req, res) {    //localhost:3000/about
    res.render('about.html');
  });

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'root',
  password        : 'secret',
  database        : 'db_name'
});
//라우터 만들기
app.get('/db',function(req, res){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('select * from conformations', function (error, results, fields) {
            res.send(JSON.stringify(results))
            console.log('results',results)
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
})