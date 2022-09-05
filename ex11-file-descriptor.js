const fs = require('fs')

fs.open(__filename, 'r', (err, fd) => {
    console.log(fd)
})

const fd = fs.openSync(__filename);
console.log(fd);

const promiseFd = fs.promises.open(__filename, 'r')
promiseFd
.then((fd) => {
    fd.readFile({encoding: "utf-8"})
    .then((text) => {
        console.log(text)
    })
    .finally(() => fd.close())
})