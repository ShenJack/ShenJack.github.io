// 向document注入style
function appendStyle (content) {
    var style = document.createElement('STYLE');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(content));
    document.head.appendChild(style);
}

const CLASSNAME_PREVENT_ANIMATION = '__prevent_offscreen_animation__'; // 用于移除 animation 的classname

const intersectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            // 可见时允许 animation
            entry.target.classList.remove(CLASSNAME_PREVENT_ANIMATION);
        } else if (entry.intersectionRatio <= 0) {
            // 不可见时移除 animation
            entry.target.classList.add(CLASSNAME_PREVENT_ANIMATION);
        }
    });
});

// 向document注入style
appendStyle(`.${CLASSNAME_PREVENT_ANIMATION} {
            animation: none!important; //阻止动画
        }`);


/**
 * 移除元素在离屏后的animation
 * 实质是使用 IntersectionObserver监听元素是否出现可见
 * @param element
 */
window.preventOffscreenAnimation = function preventOffscreenAnimation (element) {
    intersectionObserver.observe(element);
}
