import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/vue3'
import MainLayout from "@/layout/MainLayout.vue";
import '../css/app.css';
import AuthLayout from "@/layout/AuthLayout.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: title => `${title} ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
        // page.default.layout = MainLayout
        page.default.layout = name.startsWith('Auth/') ? AuthLayout : MainLayout

        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ElementPlus)
            .component('Head', Head)
            .component('Link', Link)
            .mount(el)
    },
})
