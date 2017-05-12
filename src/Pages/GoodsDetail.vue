<template>
	<div>
		<div @click="goback">pageA</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'pageA',
		methods: {
			goback(){
				this.$router.goBack();
			}
		}
	}
</script>