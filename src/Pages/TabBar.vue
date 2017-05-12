<template>
	<div id="animateBox">
		<div class="pageBox">
			<router-view></router-view>
		</div>
		<div id="TabBar">
			<ul>
				<router-link to='home' tag='li' replace>
					<span>首页</span>
				</router-link>
				<router-link to='category' tag='li'>
					<span>分类</span>
				</router-link>
				<router-link to='order' tag='li'>
					<span>购物车</span>
				</router-link>
				<router-link to='person' tag='li'>
					<span>我</span>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<style scoped>
#TabBar{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #eee;
}
.pageBox{
	position:absolute; 
	bottom: 80px; 
	width: 100%; 
	top: 0; 
	overflow-y: scroll; 
	-webkit-overflow-scrolling: touch; 
}
ul {
	height: 98px;
	padding: 0;
}
ul li {
	width: 25%;
	height: 100%;
	float: left;
	text-align: center;
}
ul li span {
	bottom: 0;
	margin: 0 auto;
	display: block;
	width: 100%;
	height: 100%;
	padding-top: 58px;
	font-size: 20px;
}
ul li:nth-child(1) span{
	background: url(../assets/tabBar/tab_home_select@2x.png) no-repeat;
	background-size: 50px;
	background-position: 70px 5px;
}
ul li:nth-child(2) span{
	background: url(../assets/tabBar/tab_category_select@2x.png) no-repeat;
	background-size: 50px;
	background-position: 70px 5px;
}
ul li:nth-child(3) span {
	background: url(../assets/tabBar/tab_order_select@2x.png) no-repeat;
	background-size: 50px;
	background-position: 70px 5px;
}
ul li:nth-child(4) span {
	background: url(../assets/tabBar/tab_personal_select@2x.png) no-repeat;
	background-size: 50px;
	background-position: 70px 5px;
}
</style>