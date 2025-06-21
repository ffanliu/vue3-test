<script setup>
import {ref} from "vue";
import axios from "axios";

const user = ref({
  a: '',
  b: ''
})
const login = ()=>{
  const u = {
    loginName: user.value.a,
    password: user.value.b
  }
  axios.post('/api/user/login', u).then(res => {
    //res是axios封装后的运行结果
    //res.data才是后端返回的json
    //res.data.data才是数据库查询出来的数据
    console.info(res.data.data)
  })
}
</script>

<template>
<div>
  用户名<input type="text" v-model="user.a"> <br>
  密码<input type="text" v-model="user.b"> <br>
  <button @click="login">登录</button>
</div>
</template>

<style scoped>

</style>