<template>
  <div class="hello">
  <form @submit="login()">
      <h1>Login</h1>
      <div class="title">
        <h3>Email</h3>
        <input v-model="email" type="text" class="input"       placeholder="Email">
      </div>
      <div class="title">
         <h3>Password</h3>
         <input v-model="password" type="password" class="input" placeholder="Password">
      </div>
      <button type="submit" value="submit" class="btn">Login</button>
    </form>
    <div>or Sign in with 3rd Party</div>
    <button id="google" @click="loginWithThirdParty" class="btn-pic">
      <img src="../assets/google-logo.png" alt width="100px" height="100px">
    </button>
  </div>
</template>

<script>
// import firebase from 'firebase/app'
// const firebaseConfig = {
//   apiKey: "AIzaSyBGXFuW2-dgcqzr2Qi3FJHHUNgqchi6qNw",
//   authDomain: "mytodo-9c7de.firebaseapp.com",
//   databaseURL: "https://mytodo-9c7de.firebaseio.com",
//   projectId: "mytodo-9c7de",
//   storageBucket: "mytodo-9c7de.appspot.com",
//   messagingSenderId: "971316618674",
//   appId: "1:971316618674:web:d3644e81ae09d909f630ab"
// };
// firebase.initializeApp(firebaseConfig)

export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
