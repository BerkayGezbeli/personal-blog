import homePage from '@/components/homePage.vue'
import aboutPage from '@/components/aboutPage.vue'
import websitePage from '@/components/websitePage.vue'
import gitPage from '@/components/gitPage.vue'

export const routes = [
    { path: '', component: homePage, name: 'homePage'},
    { path: '/aboutPage', component: aboutPage, name: 'aboutPage'},
    { path: '/websitePage', component: websitePage, name: 'websitePage'},
    { path: '/gitPage', component: gitPage, name: 'gitPage'},
]