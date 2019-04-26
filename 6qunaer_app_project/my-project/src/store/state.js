//使用localStorage在外层包裹一层try,catch，捕捉异常。如果某些浏览器关闭本地存储功能，或者使用隐身模式，就会报异常。
let defaultCity = "上海"

try {
    if (localStorage.city){
        defaultCity = localStorage.city
    }
} catch (e) {}

export default {
    // 先从localStorage.city中取，如果取不到再取上海
    // city: localStorage.city || "上海"
    city:defaultCity
}