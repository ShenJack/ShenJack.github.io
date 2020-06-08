let map = []

compilation._modules.forEach(module=>{
    map.push({
        request:module.request,
        value:module._source._value
    })
})

console.log(JSON.stringify(map))
