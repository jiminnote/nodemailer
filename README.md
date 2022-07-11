# node.js test

## 라우터로 페이지 구성하기
```js

/*server.js*/
const  express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log("StartServer : localhost:3000");  //app이 포트 3000으로 정상 작동되면 출력
});

//라우터정해주기

app.get('/', function(req, res) {    //localhost:3000
    res.send('hello world');
  });

  app.get('/about', function(req, res) {    //localhost:3000/about
    res.send('about page');
  });
```

* `localhost:3000`
![스크린샷 2022-07-12 오전 1 52 07](https://user-images.githubusercontent.com/95075455/178316827-6c79d208-253f-4291-8394-822d4c8e7919.png)
* `localhost:3000/about`
![](https://velog.velcdn.com/images/jiminnote/post/f64c28db-d402-4bd9-901e-cc7fbdf40976/image.png)


## html 파일 만들어서 페이지 구성하기
```js
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

```

* `localhost:3000/about`
![스크린샷 2022-07-12 오전 1 53 07](https://user-images.githubusercontent.com/95075455/178316998-926b48bc-8a26-4367-91b1-95c5974c0bfc.png)


### reference

[nodemailer](https://nodemailer.com/about/) </br>
[mailtrap.io](https://mailtrap.io/inboxes/1815431/messages/2875792635) </br>
[express js](https://expressjs.com/ko/guide/routing.html)
