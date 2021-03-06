import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import echarts from 'echarts'
Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 9999);
  }, 0)
}
if (document.documentElement.clientWidth > 500) {
  window.alert("请使用【移动设备】或者【开发者工具移动设备模式】并刷新以保证浏览效果");
  const img = document.createElement('img');
  img.src = "https://i.loli.net/2020/07/13/RcQHgCmJSahEDlK.png";
  img.style.position = "fixed"
  img.style.left = "50%"
  img.style.top = "50%"
  img.style.transform = "translate(-50%,-50%)"
  img.style.boxShadow = "0 0 10px rgba(0,0,0,0.25)"
  document.body.appendChild(img);
}

