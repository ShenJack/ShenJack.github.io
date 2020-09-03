let total = 0;
let countElement;

function onanimationiteration() {
    total++;
    countElement.innerHTML = total;
}

function stopCount(){
    document.querySelectorAll('.animation').forEach(ele => {
        ele.removeEventListener("animationiteration", onanimationiteration)
    })
}

function onGroupAnimationIteration(){

}

replaceIntersectionObserverWithPolyfill();

// start observing
requestAnimationFrame(()=>{
    countElement = document.getElementById('count');
    (function appendElements() {
        function createAnimationChild(){
            let element = document.createElement('DIV');
            element.classList.add('animation')
            return element;
        }
        let animationGroup = document.querySelector(".animation-group");
        animationGroup.addEventListener("animationiteration", onGroupAnimationIteration)
        for (let i = 0; i < 100; i++) {
            animationGroup.appendChild(createAnimationChild());
        }
    })();

    requestAnimationFrame(()=>{
        document.querySelectorAll('.animation').forEach(ele => {
            ele.addEventListener("animationiteration", onanimationiteration)
            preventOffscreenAnimation(ele);
        })

        setTimeout(stopCount,2000)
    })
})
