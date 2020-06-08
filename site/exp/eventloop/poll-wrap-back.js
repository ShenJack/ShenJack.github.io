setTimeout(()=>{
    console.log('timeout')
},10);



setImmediate(function immediate() {
    console.log('immediate');
});
