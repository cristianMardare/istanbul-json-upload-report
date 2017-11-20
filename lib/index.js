const request = require('request');

function JsonUploadReport(opts){
    this.result = {};
    this.options = opts || {};
}

JsonUploadReport.prototype.onStart = function(root, context){
     this.result = {};
}

JsonUploadReport.prototype.onDetail = function(node){
    var coverage = node.getFileCoverage(),
    summary = node.getCoverageSummary(),
    key = coverage.path;

    var sources = [];

    if (this.result[key])
        sources.push(this.result[key]);

    sources.push(summary);
    this.result[key] = Object.assign({}, ...sources);
}

JsonUploadReport.prototype.onEnd = function(root, context){
    if (this.options.url)
        upload(this.options.url, this.result);
}

function upload(url, json)
{
  request.post(
    {
      url,
      json,
      headers : {
        'Content-Type': 'application/json'
      }
    }, function(err, response, result){
      if (err || response.statusCode !== 200) {
        console.log(`JSON upload error:${err || response.body}`);
      } else {
        console.log('JSON upload success!');
      }
    });
}

module.exports = JsonUploadReport;