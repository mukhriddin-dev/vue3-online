import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { focusElement, hideElement, toggleElement, bgColor } from './directives'

const app = createApp(App)

app.directive('focus', focusElement);
app.directive('hide', hideElement);
app.directive('toggle', toggleElement);
app.directive('bgcolor', bgColor);



app.use(createPinia())
app.use(router)

app.mount('#app')
