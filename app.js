/*
import './test.css'
import axios from "axios";
import add from "./mode1";
import _ from "lodash";

add(1,2)
console.log("app")
let a=50
setInterval(()=> {
    console.log(a++)
},500)
console.log(baseURL)

/!* 手动开启热更新，
效果等同  webpack.config.js 中的devserver的hot开启
一般情况没必要这样使用
if (module.hot) {
    module.hot.accept()
}*!/

/!*axios.get('http://localhost:3000/api/getNum1').then(res => {
    console.log(res)
})*!/
/!*axios.get('/api/getNum1').then(res => {
    console.log(res)
})*!/
// 路径重写
axios.get('/num1').then(res => {
    console.log(res)
})
console.log(baseURL)
*/

let _a=123
function f1() {
    console.log(_a)
}
f1()
// 上面这一小段代码，webpack能做到极致的压缩，最终结果只有一行 => console.log(123)
// webpack的压缩还具有混淆的功能
