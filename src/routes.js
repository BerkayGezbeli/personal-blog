import homePage from '@/components/homePage.vue'
import aboutPage from '@/components/aboutPage.vue'

export const routes = [
    { path: '', component: homePage, name: 'homePage'},
    { path: '/aboutPage', component: aboutPage, name: 'aboutPage'},
]