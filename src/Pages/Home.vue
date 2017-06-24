<template>
    <div id="Home">
        <router-link to='goodsDetail' tag='li' replace>
            <div class="nav">
                <span @click=''>送到 漾河人家></span>
                <img src="../assets/navBar/search.png">
                <img src="../assets/navBar/email.png">
            </div>
        </router-link>
        <div class="banner">
            <img src="../assets/navBar/banner.png" class="banner-img">
            <img :src="bannerImg2" class="banner-img2">
			<ul class="banner-item">
				<li>我常买</li>
				<li>热销排行</li>
				<li>粉丝专区</li>
				<li>分类</li>
			</ul>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
	data(){
		return{
			bannerImg2:''
		}
	},
    methods: {
        getData() {
			this.$http.jsonp('https://www.52shangou.com/api/shop.do?ak=aMdi6T4a2kA%3D&dt=1&lid=1211549&md=1&pc=zx_1&pos=&sn=4100d21a1bb67d8815a34efb03ebd349&tsid=91F3D048-5F77-4956-9FD8-75D3D3A215D0',{
                            word:'a'
                        }).then(function(res){
                            // var data = JSON.parse(res)
                            //extra.adv.hourActBanner.imgUrl;
                            this.bannerImg2 = res.body.extra.adv.hourActBanner["0"].imgUrl;
                        },function(res){
                            alert(res);
            });
        }
    },
    created(){
    	this.getData();
    }
}
</script>
<style scoped>
#Home {
    height: 100%;
}

.nav {
    background-color: rgb(255, 235, 0);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 132px;
}

.nav span:nth-child(1) {
    display: inline-block;
    padding-left: 32px;
    padding-top: 74px;
    font-size: 15px;
    line-height: 30px;
    height: 30px;
}

.nav img:nth-child(2) {
    display: inline-block;
    position: absolute;
    right: 145px;
    top: 70px;
    width: 40px;
    height: 40px;
}

.nav img:nth-child(3) {
    position: absolute;
    top: 70px;
    right: 70px;
    height: 40px;
    width: 40px;
}

.banner {
    position: absolute;
    top: 130px;
    left: 0;
}

.banner .banner-img {
    width: 100%;
    height: 160px;
}

.banner .banner-img2 {
    width: 100%;
    height: 220px;
}
.banner .banner-item {
	height: 160px;
	
}
</style>
