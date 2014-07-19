module.exports = function onehost(options) {
  options = options || {};
  var host = options.host;
  var exclude = options.exclude || [];
  if (!Array.isArray(exclude)) {
    exclude = [ exclude ];
  }
  if (host) {
    exclude.push(host);
  }
  return function (req, res, next) {
    if (!host || exclude.indexOf(req.headers.host) >= 0 || req.method !== 'GET') {
      return next();
    }
    res.writeHead(301, {
      'Location': 'http://' + host + req.url
    });
    res.end();
  };
};
