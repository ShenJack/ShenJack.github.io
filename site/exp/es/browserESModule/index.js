// module1Function()

window.loadModule = () => {
    import('./module1.js').then(value => {
        value.module1Function()
    })
}
