const path = require('path');

module.exports = {
  entry: 'https://blog-cdn.californiapsychics.com/blog/wp-content/themes/wp-zefir/css/bootstrap.min.css?ver=3.3.5',
  output: {
    path: path.resolve(__dirname, '../css'),
    filename: 'a.css'
  }
};