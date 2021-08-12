// api文件下所有接口方法的命名方式以后端给的接口为方法名，如password_login_app
//  return post("/api/base/emp_login/password_login_app", params)


// 对于数组方法推荐：
const list = []
// 对于list返回新的数组
const newList = list.map(callback)
// 对数组中每个元素处理
list.forEach(item => {
    // doSomething(item)
})
// bad
// 对于list返回新的数组
const newList = []
list.forEach(item => {
    newList.push(item)
})
// 对数组中每个元素处理
list.map(item => {
    // doSomething(item)
})



// 对象的遍历：
// 方法一：
for (let key of Object.keys(foo)) {
    let value = foo[key];
}
// 方法二：
for (let [key, value] of Object.entries(foo)) {

}
