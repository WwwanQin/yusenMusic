<template>
  <div class="head">
    <div class="head_left">
      <span class="iconfont iconcaidan"></span>
      <h2 class="left-title" @click="checkSearch">我的音乐</h2>
    </div>
    <div class="head_right">
      <div class="right-search" v-show="!showSearch">
          <van-form>
            <van-field
                v-model="musicName"
                name="搜索"
                placeholder="歌曲名称"
                :rules="[{ required: true, message: '请填写歌曲名称' }]"
              />
          </van-form>
          <span class="iconfont iconsousuo"></span>
      </div>
      <div class="right-icon" v-show="showSearch">
        <div class="iconfont iconsousuo" @click="checkSearch"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showSearch: true,
      musicName: '歌曲一'
    }
  },
  methods:{
    checkSearch(){
      this.musicName = '';
      this.showSearch = !this.showSearch
    }
  }
}
</script>

<style scoped lang="less">
    .head{
      height: 50 / 360 * 100vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .head_left{
        flex: 0 0 35%;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
    }
</style>