import { createApp } from 'vue';
import App from './App.vue';
import Vintersection from './directives/Vintersection';


const app = createApp(App);

app.directive('intersection', Vintersection);

app.mount('#app');
