var fs = require('fs');
var proxyquire = require('proxyquireify');

// Create build folder
fs.mkdirSync(__dirname + '/build');

// Build proxied js
proxyquire.browserify()
  .require(require.resolve('./test'), { entry: true })
  .bundle()
  .pipe(fs.createWriteStream(__dirname + '/build/fruitmachine-domdelegate.test.js'))
  .on('error', function(deets) {
    console.log(deets);
  });
