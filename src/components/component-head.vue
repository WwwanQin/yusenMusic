<template>
  <div class="head">
    <div class="head-content">
      <div class="head_left">
        <span class="iconfont iconcaidan" style="color:green" @click="showSpace"></span>
        <h2 class="left-title" @click="checkSearch">我的音乐</h2>
      </div>
      <div class="head_right">
        <div class="right-search" v-show="!showSearch">
            <van-form class="search-form">
              <van-field
                  v-model="musicName"
                  name="搜索"
                  placeholder="输入歌曲名称"
                  :rules="[{ required: true}]"
                />
                <van-button>
                  <span class="iconfont iconsousuo"></span>
                </van-button>
            </van-form>
        </div>
      </div>
      <!-- 侧边栏 -->
      <van-popup v-model="show" position="left" :style="{ height: '100%',width: '75%' }" >
        <div class="popup-content">
          <!-- 用户信息 -->
          <div class="user_info">
            <div class="head_img">
              <img src="../static/img/github.jpg"/>
            </div>
            <div class="user_message">
              <div class="user_email">
                <span class="iconfont iconyouxiang"></span>：{{ user.email }}
              </div>
              <div class="user_website">
                <span class="iconfont iconGitHub"></span>：<a :href="user.website">{{ user.website }}</a>
              </div>
            </div>
          </div>
          <!-- 菜单 -->
          <ul class="popup-ul">
            <li v-for="(item,index) in popupMeny" :key="index" @click="item.fn(index)" :class="item.active ? 'active' : ''">
              <span :class="item.icon"></span>{{ item.message }}
            </li>
          </ul>
          <!-- wechat -->
          <div class="wechat">
            <div class="show_wechat" @click="show_wechat = true">
              <span class="iconfont iconiconset0175"></span>
            </div>
            <van-overlay :show="show_wechat" @click="show_wechat = false">
              <div class="wrapper">
                <div class="block">
                  <img src="../static/img/wechat.jpg">
                </div>
              </div>
            </van-overlay>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 用户详情
      user:{
        name: '雨森',
        email: 'xm36447864@126.com',
        website: 'https://github.com/WwwanQin'
      },
      // 展示侧边导航
      activeKey: 0,
      // 展示搜索框
      showSearch: false,
      // 展示侧边栏
      show:false,
      // 展示微信
      show_wechat: false,
      // 侧边栏目录
      popupMeny:[
        {
          message: '我的音乐',
          icon: 'iconfont iconyinle',
          active: true,
          fn: (index) => {
            this.checkType(index);
          }
        },{
          message: '播放列表',
          icon: 'iconfont iconshizhong',
          active: false,
          fn: (index) =>{
            this.checkType(index);
          }
        },{
          message: '正在播放',
          icon: 'iconfont iconyouyinpin',
          active: false,
          fn: (index) =>{
            this.checkType(index);
          }
        },{
          message: '设置',
          icon: 'iconfont iconiconceshi',
          active: false,
          fn: (index) =>{
            this.checkType(index);
          }
        }
      ],
      musicName: ''
    }
  },
  methods:{
    checkSearch(){
      this.musicName = '';
      this.showSearch = !this.showSearch
    },
    showSpace(){
      this.show = !this.show
    },
    checkType(index){
      this.popupMeny.forEach((element,i) => {
        if(index != i){
          element.active = false
        }
      });
      this.popupMeny[index].active = !this.popupMeny[index].active
    }
  }
}
</script>

<style scoped lang="less">
    .head{
      border-bottom: 2px solid transparent;
      background: #f9f3f3;
      padding-top: 6 / 360 * 100vw;
      box-shadow: rgba(121, 99, 99, 0.16) 5px 5px 3px 0px;
      .head-content{
        margin: 5 / 360 * 100vw;
        height: 50 / 360 * 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .head_left{
          flex: 0 0 35%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          h2{
            color: green;
          }
          .iconcaidan{
            font-size: 25 / 360 * 100vw;         
          }
          .left-title{
            font-size: 20 / 360 * 100vw;
          }
        }
        .head_right{
          flex:  0 0 60%;
          .right-search{
            display: flex;
            align-items: center;
            border: 2px solid #c69b9b;
            .search-form{
              display: flex;
              .van-button{
                border: none;
                background-color: transparent;
              }
            }
            /deep/ .van-cell{
              background-color: transparent;
            }
            .iconsousuo{
              font-size: 20 / 360 * 100vw;
            }
          }
          .right-icon{
            display: flex;
            justify-content: flex-end;
            .iconsousuo{
              font-size: 20 / 360 * 100vw;
            }
          }
        }
        .van-sidebar{
          width: 100%;
        }
        .popup-content{
          display: flex;
          flex-direction: column;
          height: 100%;
          .user_info{
            display: flex;
            width: 90%;
            height: 60 / 360 * 100vw;
            padding: 10 / 360 * 100vw;
            .head_img{
              height: 100%;
              flex: 0 0 30%;
              img{
                max-width: 60 / 360 * 100vw;
                height: 100%;
                border: 2px dotted #e9d8d8;
                border-radius: 50%;
                padding: 3 / 360 * 100vw;
                box-sizing: border-box;
              }
            }
            .user_message{
              flex: 0 0 70%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              font-size: 10 / 360 * 100vw;
              margin-top: 6 / 360 * 100vw;
              div{
                width: 95%;
                margin-top: 3 / 360 * 100vw;
                height: 30 / 360 * 100vw;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: flex;
                align-items: center;
                a{
                  color: red;
                }
              }
            }
          }
          .popup-ul{
            margin-top: 30 / 360 * 100vw;
            li{
              box-sizing: border-box;
              height: 60px;
              width: 100%;
              display: flex;
              align-items: center;
              font-size: 15 / 360 * 100vw;
              color: #796868;
              .iconfont{
                font-size: 20px;
                margin-right: 20 / 360 * 100vw;
                margin-left: 20 / 360 * 100vw;
              }
            }
            .active{
              border-left: 4px solid #af7d7d;
            }
          }
          .wechat{
            flex: 1;
            display: flex;
            align-items: flex-end;
            .show_wechat{
              width: 100%;
              padding-bottom: 10 / 360 * 100vw;
              padding-left: 10 / 360 * 100vw;
              padding-top: 5/ 360 * 100vw;
              box-shadow: 0px -10px 9px 0px rgba(192, 177, 177, 0.1);
              span{
                font-size: 40 / 360 * 100vw;
                padding-left: 5 / 360 * 100vw;
              }
            }
            .wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              background-color: white;
            }

            .block {
              width: 120px;
              height: 120px;
              background-color: #fff;
              img{
                width: 100%;
              
              }
            }
          }
        }
      }
    }
</style>