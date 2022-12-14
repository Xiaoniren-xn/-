import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//引入pinia
import { createPinia } from 'pinia'

const pinia = createPinia()

//导入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

//公共css
import '@/assets/global.css'

//阿里巴巴矢量图
import "./assets/iconfont/iconfont.css"
createApp(App).use(ElementPlus, {locale: zhCn,}).use(pinia).use(router).mount('#app')
