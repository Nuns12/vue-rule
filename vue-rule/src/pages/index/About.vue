<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<!--处理各点击事件以handleClick开头，如   @click="handleClickHome"
    组件中emit的方法以on-开头，如   this.$emit('on-showName',data);
    css名以页面模块开头，外部盒子以container结尾，同时采用中划线命名方式 如   fang-house-img-container、fang-house-img等
    id：用小驼峰法
    Vue组件命名：大驼峰
    其他文件命名：小驼峰
    文件夹命名：中划线命名
    常量使用 全部字母大写，单词间下划线分割 的命名方式


    * 如果是大括号内为空，则简洁地写成{}即可，不需要换行
     例：{}
     * 非空代码块则:
     （1）左大括号前不换行有空格；
     （2）左大括号后换行；
     （3）右大括号前换行；
     （4）右大括号后还有else等代码则不换行;
     （5）表示终止的右大括号后必须换行。
      例：
          methods: {
              testFunc () {
                  console.log("测试方法");
                  var flag = false;
                  if (this.num === 0) {
                      flag = true;
                  } else {
                       flag = false;
                  }
              }
          }


     空格：
if (this.num === 0) {  // 左右小括号()中间字符直接不出现空格
if/for/while/switch 等保留字与括号之间都必须加空格。
int a = 1, b = 2, z, c = 3;  任何二目、三目运算符的左右两边都需要加一个空格。
 testFunc (pra1, pra2, pra3) 方法参数在定义和传入时，多个参数逗号后边必须加空格。


 CSS属性编写顺序（一般遵循显示属性 -> 自身属性 -> 文本属性 -> 其他属性的书写格式）
-->