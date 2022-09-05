function delay(time){
    return new Promise((resolve, e) => {
        setTimeout(resolve, time)
    });
}


async function task(time){
    console.log("Async function started")
    await delay(time);
    console.log("After first delay");
    await delay(time);
    console.log("After second delay");
    return 2000;
}

task(-100)
.then(data => console.log("Async function ended " + data))
.catch((error) => console.log(error))
.finally(()=> console.log("Finalize"));

console.log("Main")