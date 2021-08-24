// ライブラリ読み込み
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000; // port番号を指定


// GET http://localhost:3000/api/v1/
var router = require('./routes/v1/'); ///routes/v1/は/routes/v1/index.jsとして扱われる
app.use('/api/v1/', router);

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);