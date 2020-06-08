let loopTimes = 1000000

function reverseLoop() {
    var t0 = Date.now();
    var tmp;
    var someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (var p = 0; p < loopTimes; p++) {
        for (var i = someNumbers.length - 1; i >= 0; i--) {
            tmp = someNumbers[i];
        }
    }
    var t1 = Date.now();
    console.log("Took: " + (t1 - t0) + "msecs");
}


function loop() {
    var t0 = Date.now();
    var tmp;
    var someNumbers = [1,2,3,4,5,6,7,8,9,10];
    for (var p = 0; p < loopTimes; p++){
        for(var i = 0; i<someNumbers.length; i++){
            tmp = someNumbers[i];
        }
    }
    var t1=Date.now();
    console.log("Took: "+(t1-t0)+"msecs");
}

function es6Loop(){
    var t0 = Date.now();
    var tmp;
    var someNumbers = [1,2,3,4,5,6,7,8,9,10];
    for (var p = 0; p < loopTimes; p++){
        for(var value of someNumbers){
            tmp = value;
        }
    }
    var t1=Date.now();
    console.log("Took: "+(t1-t0)+"msecs");
}

function forinLoop(){
    var t0 = Date.now();
    var tmp;
    var someNumbers = [1,2,3,4,5,6,7,8,9,10];
    for (var p = 0; p < loopTimes; p++){
        for(var key in someNumbers){
            tmp = someNumbers[key];
            console.log(tmp)
        }
    }
    var t1=Date.now();
    console.log("Took: "+(t1-t0)+"msecs");
}


reverseLoop()
loop()
es6Loop()
// forinLoop()
