<template>
    <div class="footer">
        <div class="footer-top">
            <div class="musicDetails">
                <p class="musicName">米兰的小铁匠</p>
                <small class="author">周杰伦</small>
            </div>
            <div class="playControl">
                <ul class="controller-list">
                    <li v-for="(item,index) in controlList" :key="index">
                        <van-button>
                             <span :class="item.icon" @click="item.fn"></span>
                        </van-button>
                       
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="progress"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            controlList:[
                {
                    icon: 'iconfont iconshangyishou_huaban',
                    fn(){
                        console.log(1);
                    }
                },
                {
                    icon: 'iconfont iconbofang',
                    fn(){
                        
                    }
                },
                {
                    icon: 'iconfont iconxiayishou_huaban',
                    fn(){
                        
                    }
                },
                {
                    icon: 'iconfont icongengduo',
                    fn(){
                        
                    }
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .footer{
        background: rgb(173, 119, 93);
        color: white;
        position: fixed;
        bottom: 0;
        height: 100px;
        width: 100%;
        box-shadow: rgba(121, 99, 99, 0.16) 2px -2px 3px 0px;
        display: flex;
        flex-direction: column;
        .footer-top{
            flex: 0 0 70%;
            display: flex;
            justify-content: space-between;
            .musicDetails{
                flex: 0 0 40%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 10 / 360 * 100vw;
                .musicName{
                    font-size: 18 / 360 * 100vw;
                    font-weight: 700;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                        width: 135 / 360 * 100vw;
                }
            }
            .playControl{
                flex: 0 0 60%;
                display: flex;
                .controller-list{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    justify-content: space-around;
                    margin-right: 15px;
                    li{
                        display: flex;
                        justify-content: center;
                        button{
                            background: transparent;
                            border: 0;
                            border-radius: 50%;
                            padding: 0px;
                            height: 50 / 360 * 100vw;
                            width: 50 / 360 * 100vw;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            .van-button__text{
                                display: flex;
                                .iconfont{
                                    font-size: 30 / 360 * 100vw;  
                                    color: white;
                                }
                                .iconshangyishou_huaban{
                                    padding-right: 5 / 360 * 100vw;
                                }
                                .iconbofang{
                                    padding-left: 5 / 360 * 100vw;
                                }
                                .iconxiayishou_huaban{
                                    padding-left: 5 / 360 * 100vw;
                                }
                            }
                        }
                    }
                }
            }
        }
        .footer-bottom{
            flex: 0 0 30%;
        }
    }
</style>