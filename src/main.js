import {clerkPlugin} from '@clerk/vue';
import {createPinia} from 'pinia';
import {createApp} from 'vue';
import App from './App.vue';
import router from './router/index.js';
import vuetify from './plugins/vuetify.js';

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!clerkPublishableKey) {
	throw new Error('VITE_CLERK_PUBLISHABLE_KEY is required to initialize Clerk.');
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(clerkPlugin, {
	publishableKey: clerkPublishableKey,
});

app.mount('#app');
