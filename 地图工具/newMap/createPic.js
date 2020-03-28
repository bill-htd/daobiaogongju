
var fs = require('fs')
, gm = require('gm');

gm('./test.jpg')
.resize(1240, 240, '!')
.write('./_small.jpg', function (err) {
    if(err){
        console.log(err)
    }
  if (!err) console.log('done');
});