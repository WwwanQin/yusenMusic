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
        <div class="right-icon" v-show="showSearch">
          <div class="iconfont iconsousuo" @click="checkSearch"></div>
        </div>
      </div>
      <!-- 侧边栏 -->
      <van-popup v-model="show" position="left" :style="{ height: '100%',width: '70%' }" >
        <div class="popup-content">
          <ul class="popup-ul">
            <li v-for="(item,index) in popupMeny" :key="index" @click="item.fn(index)" :class="item.active ? 'active' : ''">
              <span :class="item.icon"></span>{{ item.message }}
            </li>
          </ul>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 展示侧边导航
      activeKey: 0,
      // 展示搜索框
      showSearch: false,
      // 展示侧边栏
      show:false,
      // 侧边栏目录
      popupMeny:[
        {
          message: '我的音乐',
          icon: 'iconfont iconyinle',
          active: false,
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
          .popup-ul{
            li{
              box-sizing: border-box;
              height: 60px;
              width: 100%;
              display: flex;
              align-items: center;
              font-size: 20px;
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
        }
      }
    }
</style>