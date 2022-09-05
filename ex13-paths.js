const path = require('path')

const filePath = '/home/joe/test.txt'

console.log(path.dirname(filePath))
console.log(path.basename(filePath))
console.log(path.extname(filePath))

console.log(path.join("c:", "folder", 'notes.txt'))
console.log(path.join("/", "folder", 'notes.txt'))

console.log(path.resolve(__filename))
console.log(path.normalize('c:\\data\\.\\temp\\..\\notes.txt'))
const fs = require('fs');

const content = 'Some content!';

fs.writeFile('/Users/joe/test.txt', content, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});

