<script setup>
import {ref} from "vue";
//引入axios
import axios from "axios";
//发请求
//处理请求
const loginName = ref('')
const password = ref('')
const login = () => {
  //axios是异步请求
  //get(url, {params: {}})
  //url?xxx=yy&aa=bb
  //字符串拼接
  axios.get('/api/suibian?loginName='+loginName.value+'&password='+password.value)
      .then((res)=>{
    //请求发送成功并且响应成功要做的事
    console.info(11111)
    console.info(res)
  }).catch((error)=>{
    console.info(error)
  }).finally(()=>{

  })
  console.info(22222)
  //axios提供的api
  axios.get('/api/suibian', {params: {loginName: loginName.value, password: password.value}})
  //占位符
  axios.get(`/api/suibian?loginName=${loginName.value}&password=${password.value}`)

  //post(url, data) 发送的是json数据
  axios.post('/api/suibianpost', {loginName: loginName.value, password: password.value}).then((res)=>{
    //请求发送成功并且响应成功要做的事
    console.info(res)
  }).catch((error)=>{
    console.info(error)
  }).finally(()=>{

  })
}
</script>

<template>
<div>
  用户名 <input type="text" v-model="loginName"> <br>
  密码 <input type="password" v-model="password"> <br>
  <button @click="login">登录</button>
</div>
</template>

<style scoped>

</style>