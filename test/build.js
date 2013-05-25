var fs = require('fs');
var proxyquire = require('proxyquireify');

proxyquire.browserify()
  .require(require.resolve('./test'), { entry: true })
  .bundle()
  .pipe(fs.createWriteStream(__dirname + '/build/fruitmachine-domdelegate.test.js'));
