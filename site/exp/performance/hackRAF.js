(function hackRequestAnimationFrame() {
    let originRAF = window.requestAnimationFrame;
    let count = 0;

    function onAnimationFrame() {
        count++;
        console.log(Date(),count)
    }

    window.requestAnimationFrame = function (...argument) {
        originRAF(...argument);
        onAnimationFrame();
    }
})()