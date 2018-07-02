Vue 用于开发SPA，路由接管一切

页面/views 跟 router url相匹配

router-link取代a VueRouter提供的组件
Vue.use(VueRouter提供的组件)全局

route 前端路由 区别后端路由npnix apache等
前端路由解决的是SPA 
url 切换， 页面不会刷新
history API pushState() onPopState() 移除之前的组件，更新新的组件 ，它的格式和传统后端url是一样的 /foo
缺点：兼容性

二 hash 模式
在url后面加描点 ie8以后就不会刷新页面了，同样可以得到事件
同一个页面,不同的状态(对应url)