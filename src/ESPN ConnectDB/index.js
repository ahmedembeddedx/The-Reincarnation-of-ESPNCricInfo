const sql = require('mssql/msnodesqlv8');

var config = {
    server : '9bbf385de28f',
    database : 'ESPNCricInfo',
    driver : 'msnodesqlv8',
    options: {
        trustedConnection: true
    },
    port: 1433
};

sql.connect(config, function(err) {
    if(err) 
        console.log(err);
    var request = new sql.Request();
    request.query('select * from Matches', function(err, records) {
        if(err) console.log(err);
        else console.log(records);
    });
});
