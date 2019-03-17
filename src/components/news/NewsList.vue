<template>
    <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="http://s13.sinaimg.cn/mw690/005GetFrty6S1yLSiG8bc&690">
						<div class="mui-media-body">
						<h1>你好</h1>
							<p class='mui-ellipsis'>
                                    <span>发表时间：2012-12-12 12:11:11</span>
                                    <span>点击：0次</span>
                            </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="http://s13.sinaimg.cn/mw690/005GetFrty6S1yLSiG8bc&690">
						<div class="mui-media-body">
						<h1>你好</h1>
							<p class='mui-ellipsis'>
                                    <span>发表时间：2012-12-12 12:11:11</span>
                                    <span>点击：0次</span>
                            </p>
						</div>
					</a>
				</li>
								<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="http://s13.sinaimg.cn/mw690/005GetFrty6S1yLSiG8bc&690">
						<div class="mui-media-body">
							<h1>你好</h1>
							<p class='mui-ellipsis'>
                                    <span>发表时间：2012-12-12 12:11:11</span>
                                    <span>点击：0次</span>
                            </p>
						</div>
					</a>
				</li>
          <!-- <li class="mui-table-view-cell mui-media" v-for="item in newslist"
          :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                    <span>发表时间{{item.add_time}}</span>
                                    <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</a>
				</li> -->
			</ul>
    </div>
</template>
<script>
import {Toast}from "mint-ui";
export default{
    data(){
        return{
            newslist:[]
        };
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            this.$http.get('').then(result=>{
                if(result.body.status===0){
                    this.newslist=result.body.message;
                }else{
                    Toast('获取新闻列表失败！');
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{font-size:14px;}
        .mui-ellipsis{
            font-size: 12px;
            color:#0c52df81;

        }
    }
}
</style>

