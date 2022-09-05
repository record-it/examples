const { exit } = require("process")
process.once('exit', (arg) => console.log(`Exiting with code ${arg}`))
process.stdin.on('data', (text) => {    
    console.log(text.toString().trim())
    if (text.toString().trimEnd() == 'exit'){
        console.log('quiting...')
        process.exit();
    }
})


