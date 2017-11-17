function JsonUploadReport(opts){
    console.log('JsonUploadReport options', opts);
}

JsonUploadReport.prototype.onStart = function(root, context){
    console.log('Json Upload on start');
}

JsonUploadReport.prototype.onDetail = function(root, context){
    console.log('Json Upload on start');
}

JsonUploadReport.prototype.onEnd = function(root, context){
    console.log('Json Upload on start');
}

module.exports = JsonUploadReport;