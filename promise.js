function msgAfterTimeout (msg, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Hello ${msg}!`), timeout)
    })
}

msgAfterTimeout("Foo", 5000).then((data) => {
    console.log(`asynchronous response:${data}`)
});