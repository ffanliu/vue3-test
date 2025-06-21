<script setup>
import {ref} from "vue";
const emit = defineEmits(['xx'])
defineProps({
  dad: {
    type: String,
    default: '佚名'
  },
  name: {
    type:String,
    default: "狗蛋"
  }
})
const money = ref(0)
const submit = () => {
  // name.value = '张四'
  //不允许在子组件中修改父组件传过来的值
  //非要改那必须先给父组件要改的值 再传进子组件
  emit('xx', money.value, '李四')
}
</script>

<template>
<div>
  <h1>我是{{name}},我的爹是{{dad}}</h1>
  <h1>hhhh</h1>
  <h1>hhhh</h1>
  <h1>hhhh</h1>
  <h1>hhhh</h1>

  赚了<input type="text" v-model="money">钱
  <button @click="submit">我要上交</button>
</div>
</template>

<style scoped>

</style>