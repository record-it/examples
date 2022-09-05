const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Wpisz x: ", (x) => {
    rl.question("Wpisz y: ", (y) => {
        console.log("Suma %f", (Number(x) + Number(y)));
        rl.close();
    })
}
)

