// timeout_vs_immediate.js
setTimeout(function timeout() {
    console.log('timeout');
}, 0);

process.nextTick(function nextTick() {
        console.log('nextTick')
    }
)

setImmediate(function immediate() {
    console.log('immediate');
});
