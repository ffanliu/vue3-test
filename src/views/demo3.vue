<script setup>
import {ref} from "vue";
import {useRouter, useRoute} from "vue-router"

const router = useRouter() //表示跳转
const route = useRoute() //表示获取当前路由
const queryValue = route.query
//vue组件
//可以当页面的组件：有路由
//挂在页面的组件：没有路由

const age = 20;
const name = '刘卓凡';
const name1 = '<span style = "color: blue">hello</span>'
const flag = 1;
const score = 44;
const id_value = 'ccccc'
const person = ref({
  name: '张三',
  age: 20
})
const arr = ref([1,2,3,4])
const showHhh = () => {
  console.info(inputValue.value)
}
const inputValue = ref('我晚上晚上') //ref底层定义是一个对象 {value:''我晚上晚上''}
//写发请求的方法
const xxx = function () {

}

const yyy = () => {

}
function zzz() {

}

</script>
<!--{{}} 写表达式的内容-->
<!--语句不叫表达式-->
<!--  v- 前缀的特殊属性-->
<!--  v-text 把文本值赋予标签内部-->
<!--  v-html 可以转换HTML代码到标签内部-->

<!--  v-if 根据表达式的值(任意值)，0 空字符串'' false 未定义
空数组[] 空对象{} 都是有值判断标签是否  存在-->
<!--  v-show 根据表达式的值(任意值)，0 空字符串'' false 未定义
 判断标签是否 显示 和 v-if 是在检查中看得到和看不到的区别-->
<!--v-bind 将变量的值绑定到属性 可以缩写 : -->
<!--v-for  (item, index) in arr   v-for一定要加key属性-->
<!--  v-on 表示给标签增加事件, 事件的本质是方法，需要调用方法 缩写@-->
<!--  v-model 双向绑定表单元素的值-->
<template>
  传过来的参数：{{queryValue.id}}
  <h1>{{name.length}}</h1>
  <h1>{{name}}</h1>
  <h1>{{name.length > 0}}</h1>
  <h1 v-text="name"></h1>
  <h1 v-html="name1"></h1>
  <h1 v-if="flag">存在</h1>
  <h1 v-show="!flag">显示</h1>
  <div v-if="isAdmin">管理员面板</div>
  <div v-else>普通用户面板</div>
  <h1 v-if = "score >= 90">优秀</h1>
  <h1 v-else-if = "score >= 60">及格</h1>
  <h1 v-else>不及格</h1>

  <div id="id_value"></div>
  <div v-bind:id="id_value"></div>
  <div :id="id_value"></div>

  <p v-for="(item, index) in arr" :key = index>{{index}}, {{item}}</p>

  <button v-on:click="showHhh">按钮</button>
  <button @click="showHhh" >按钮</button>
  <input type="text" v-model="inputValue">
  <br>
  inputValue变量的值：{{inputValue}}
  <img src="" alt="">
  <a href=""></a>

</template>

<style scoped>
h1 {
  color: red;
}
</style>