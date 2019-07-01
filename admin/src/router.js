import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import CategoryEdit from './views/CategoryEdit'
import CategoryList from './views/CategoryList'
import ItemEdit from './views/ItemEdit'
import ItemList from './views/ItemList'
import HeroEdit from './views/HeroEdit'
import HeroList from './views/HeroList'
import ArticleEdit from './views/ArticleEdit'
import ArticleList from './views/ArticleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children:[
        {
          path: '/categories/create',
          component: CategoryEdit
        },
        {
          path: '/categories/edit/:id',
          component: CategoryEdit,
          props:true
        },
        {
          path: '/categories/list',
          component: CategoryList
        },
        {
          path: '/items/create',
          component: ItemEdit
        },
        {
          path: '/items/edit/:id',
          component: ItemEdit,
          props:true
        },
        {
          path: '/items/list',
          component: ItemList
        },
        {
          path: '/heros/create',
          component: HeroEdit
        },
        {
          path: '/heros/edit/:id',
          component: HeroEdit,
          props:true
        },
        {
          path: '/heros/list',
          component: HeroList
        },
        {
          path: '/articles/create',
          component:ArticleEdit
        },
        {
          path: '/articles/edit/:id',
          component: ArticleEdit,
          props:true
        },
        {
          path: '/articles/list',
          component: ArticleList
        }
      ]
    }
    
  ]
})
