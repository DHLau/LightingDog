import Home from '../Pages/Home.vue'
import Category from '../Pages/Category.vue'
import Person from '../Pages/Person.vue'
import Order from '../Pages/Order.vue'
import Tabbar from '../Pages/TabBar.vue'
import GoodsDetail from '../Pages/GoodsDetail.vue'
export default {
	routes: [
		{
			path:'/',
			component: Tabbar,
			children:[
				{
					path: '/home',
					component:Home
				},
				{
					path: '/category',
					component: Category
				},
				{
					path: '/person',
					component: Person
				},
				{
					path: '/order',
					component: Order
				}
			]
		},
		{
			path:'/goodsDetail',
			component: GoodsDetail
		},
		{
			path: '*',
			redirect: '/home'
		}
	]
}