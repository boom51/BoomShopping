<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="3000">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 6  改造-->
        		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/newslist">
		                    <span class="mui-icon mui-icon-chat"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-image"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-map"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-bars"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-videocam"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>

		        </ul>
      
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
	
}
.mint-swipe-item{
&:nth-child(1){
    background:url(../../lib/images/1.png);
}
&:nth-child(2){
    background:url(../../lib/images/2.png);
}
&:nth-child(3){
    background:url(../../lib/images/3.png);
}
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border:0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
}

</style>