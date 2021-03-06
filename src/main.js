import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Panel from 'primevue/panel';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'


const app = createApp(App);

app.use(PrimeVue);

app.component('Dialog', Dialog);
app.component('Panel', Panel);
app.component('Button', Button);

app.mount('#app')