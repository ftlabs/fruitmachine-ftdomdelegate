var dest = __dirname + '/build';
var fs = require('fs');
var proxyquire = require('proxyquireify');

// Create build folder
if (!fs.existsSync(dest)) fs.mkdirSync();

// Build proxied js
proxyquire.browserify()
  .require(require.resolve('./test'), { entry: true })
  .bundle()
  .pipe(fs.createWriteStream(dest + '/fruitmachine-domdelegate.test.js'))
  .on('error', function(deets) {
    console.log(deets);
  });
