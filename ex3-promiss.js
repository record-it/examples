function longTime(time) {
    return new Promise(
        (resolve, reject) => {
            if (time < 1000) {
                setTimeout
                    (() => resolve("End. Success")
                        , time)
            }
            else {
                reject("Time is to big")
            }
        }
    );
}
console.log("Start")
let promise = longTime(2000);
promise
    .then((succesValue) => {
        console.log(succesValue)
    })
    .catch((error) => {
        if (error) {
            console.log("Error: " + error)
        }
    });
console.log("Waiting...");