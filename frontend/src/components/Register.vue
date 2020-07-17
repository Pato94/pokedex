<template>
  <div class="caja">
    <form class="box" method="post">
      <h1>Sign up</h1>
      <input type="text" id="username" name placeholder="Username" />
      <input type="password" id="password" name placeholder="Password" />
      <button class="submit" v-on:click="datos()">Di que</button>
    </form>
  </div>
</template>

<script>
const express = require("express")
const router = express.Router()
const accounts = []

 export default {
   name: "Register",
  datos: function() {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    if ( username == undefined || password == undefined ){
      console.log("llena bien los campos")
    }
    else { 
      router.post("/register", (req, res) => {
        accounts.push({username: username, password: password})
        res.status(201).end()
        console.log("cuenta creada")
})
    }
    return
  }
 }
</script>

 <style>
.caja {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  background-color:#34495e;
}
.box {
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #191919;
  text-align: center;
}
.box h1{
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}
.box input[type = "text"], .box input[type="password"]{
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}
.box input[type = "text"]:focus, .box input[type="password"]:focus{
  width: 280px;
  border-color: #2ecc71;
}
.submit {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}
.submit:hover {
  background: #2ecc71;
}
</style>