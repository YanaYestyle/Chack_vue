import { createApp } from 'vue';
import App from './App.vue';
import VIntersection from './directives/VIntersection';


const app = createApp(App);

app.directive('intersection', VIntersection);

app.mount('#app');
