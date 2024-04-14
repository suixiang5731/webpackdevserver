import './test.css'
import axios from "axios";
console.log("app")
let a=50
setInterval(()=> {
    console.log(a++)
},500)

/* 手动开启热更新，
效果等同  webpack.config.js 中的devserver的hot开启
一般情况没必要这样使用
if (module.hot) {
    module.hot.accept()
}*/

/*axios.get('http://localhost:3000/api/getNum1').then(res => {
    console.log(res)
})*/
/*axios.get('/api/getNum1').then(res => {
    console.log(res)
})*/
// 路径重写
axios.get('/num1').then(res => {
    console.log(res)
})
