const fs = require('fs')
const path = require('path')
if (!fs.existsSync('temp')) {
    fs.mkdirSync('temp')
}

fs.readdir(__dirname, (err, dirs) => {
    if (err) {
        console.err(err)
        return
    }
    dirs
        .map(f => path.join(__dirname, f))
        .filter(f => path.extname(f) == '.js')
        .forEach(f => console.log(f))
})
if (fs.existsSync('temp')) {
    fs.renameSync('temp', 'new-temp')
}
setTimeout(() => {
    if (fs.existsSync('new-temp')) {
        fs.rmdirSync('new-temp')
        console.log('Folder new-temp removed!')
    }
}, 2000);

