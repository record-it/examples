const fs = require('fs');

fs.stat(__filename, (err, stats) => {
    if(err) {
        Console.Error(err);
    }
    console.log(stats)
    console.log(stats.isDirectory())
    console.log(stats.isFile())
    console.log(stats.isSymbolicLink())
});