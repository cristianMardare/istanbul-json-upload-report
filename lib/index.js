function JsonUploadReport(opts){
    this.result = {};
}

JsonUploadReport.prototype.onStart = function(root, context){
     this.result = {};
}

JsonUploadReport.prototype.onDetail = function(node){
    var coverage = node.getFileCoverage(),
    key = coverage.path;

    var sources = [];

    if (this.result[key])
        sources.push(this.result[key]);

    sources.push(coverage);
    this.result[key] = Object.assign({}, ...sources);
}

JsonUploadReport.prototype.onEnd = function(root, context){
    console.log('Json Upload on end', this.result);
}

module.exports = JsonUploadReport;