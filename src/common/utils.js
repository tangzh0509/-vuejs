export function debounce(func, delay){
    let timer = null
    return function (...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
            //console.log('-----'); 确实只执行了一次，因此防抖动函数是有效的
        }, delay)
    }
}
