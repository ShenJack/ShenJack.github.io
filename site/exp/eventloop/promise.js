setTimeout(function () {
    console.log("timeout1")
}, 0)

var p1 = new Promise(function (resolve, reject) {
    resolve()
});

setTimeout(() => {
    console.log("timeout2")
}, 0)


p1.then(() => {
    console.log("promise then - 1")
});
