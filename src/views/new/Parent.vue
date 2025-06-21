<script setup>
//引入
import Hhh from '../../components/Hhh.vue'
import {onMounted, ref} from "vue";
//使用
//父往子传
// props

const sonMoney = ref(null)
const name = ref('张三')
const getMoney = (value, newName) => {
  console.info('儿子赚钱给我了,赚了:'+value)
  name.value = newName
  sonMoney.value = value
}
//不能保证

//生命周期 创建时(刚创建) 创建时(页面已经渲染) 修改时 销毁时
//       created     mounted          updated destroyed
onMounted(() => {
  //保证页面的元素全部加载完成
})
on

</script>

<template>
<!--  只允许存在一个儿子 -->
<div>
  <h1>我是生父</h1>
  <Hhh dad="parent" :name="name" @xx="getMoney"></Hhh>
  儿子赚了{{sonMoney}}钱
</div>
</template>

<style scoped>

</style>