function evenDelay(limit) {
    return new Promise((resolve, reject) => {
        if (limit <= 0) {
            reject({ status: 1, message: "Delay is non positive!" })
            return;
        }
        if (limit % 2) {
            reject({ status: 2, message: "Delay is even!" })
            return;
        }
        setTimeout(() => {
            resolve(limit)
        },
            limit
        )

    })
}

evenDelay(1000)
    .then((data) => console.log("After delay " + data))
    .catch((error) => console.log(error))

evenDelay(1001)
    .then((data) => console.log("After delay " + data))
    .catch((error) => console.log(error))
evenDelay(-1000)

    .then((data) => console.log("After delay " + data))
    .catch((error) => console.log(error))
