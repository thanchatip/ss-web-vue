import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBGXFuW2-dgcqzr2Qi3FJHHUNgqchi6qNw",
  authDomain: "mytodo-9c7de.firebaseapp.com",
  databaseURL: "https://mytodo-9c7de.firebaseio.com",
  projectId: "mytodo-9c7de",
  storageBucket: "mytodo-9c7de.appspot.com",
  messagingSenderId: "971316618674",
  appId: "1:971316618674:web:d3644e81ae09d909f630ab"
};

firebase.initializeApp(firebaseConfig)

new Vue({
  render: h => h(App),
}).$mount('#app')
