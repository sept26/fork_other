<template>
  <section>
    <header class="top-tips">
      <span v-if="roleJudge === 'home'" class="home-top-tip">{{level}}</span>
      <span v-if="roleJudge === 'item'" class="item-top-tip">题目{{itemNum}}</span>
    </header>
    <div v-if="roleJudge === 'home'" class="home-section">
      <div class="middle-img"></div>
      <router-link to="item" class="start-btn"></router-link>
    </div>
    <div v-if="roleJudge === 'item'" class="item-section">
      <div v-if="itemDetail.length>0">
        <div class="subject-box">
          <header class="item-title">{{itemDetail[itemNum-1].topic_name}}</header>
          <ul class="mian-subject">
            <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" :key="index">
              <span :class="{'high-color':index === choosedNum }">{{chooseType(index)}}</span>
              <span>{{item.answer_name}}</span>
            </li>
          </ul>
        </div>
        <div v-if="itemDetail.length > itemNum"  @click="nextItem" class="next-btn"></div>
        <div v-if="itemDetail.length === itemNum" @click="submitItem" class="submit-btn"></div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: ['roleJudge'],
  data() {
    return {
      itemId: null,
      choosedNum: null,
      choosedId: null,
    };
  },
  computed: mapState([
    'itemNum',
    'level',
    'itemDetail',
    'timer',
  ]),
  methods: {
    ...mapActions([
      'addNum',
      'initializeData',
    ]),
    choosed(idx, id) {
      this.choosedNum = idx;
      this.choosedId = id;
    },
    nextItem() {
      if (this.choosedNum !== null) {
        this.choosedNum = null;
        this.addNum(this.choosedId);
      } else {
        alert('请选择一个答案'); // eslint-disable-line no-alert
      }
    },
    submitItem() {
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId);
        clearInterval(this.timer);
        this.$router.push('score');
      } else {
        alert('请选择一个答案'); // eslint-disable-line no-alert
      }
    },
    /*eslint-disable*/
    chooseType(idx) {
      switch (idx) {
        case 0:
          return 'A';
        case 1:
          return 'B';
        case 2:
          return 'C';
        case 3:
          return 'D';
      }
    },
  },
  created() {
    if (this.roleJudge === 'home') {
      this.initializeData();
    }
  },
};
</script>
<style lang="less">
.top-tips {
  position: absolute;
  width: .96rem;
  height: 2.187rem;
  background: url('../images/WechatIMG2.png') no-repeat;
  top: -0.4rem;
  right: .493rem;
  background-size: 100% 100%;
  z-index: 10;
  span {
    position: absolute;
    font-size: .187rem;
    width: .96rem;
    height: .213rem;
    color: #a57c50;
    top: 1.62rem;
    font-weight: bold;
    text-align: center;
    left: .027rem;
  }
}
.home-section {
  .middle-img{
    position: absolute;
    width: 4.107rem;
    height: 3.627rem;
    top: 1.333rem;
    left: 50%;
    transform:translateX(-2.05rem);
    background: url('../images/1-2.png') no-repeat;
    background-size: 100% 100%;
    z-index: 20;
  }
  .start-btn {
    position: absolute;
    width: 1.36rem;
    height: .667rem;
    top: 5.16rem;
    left: 50%;
    transform: translateX(-.68rem);
    background: url('../images/1-4.png') no-repeat;
    background-size: 100% 100%;
    z-index: 20;

  }
}
.item-section {
  .subject-box {
    position: relative;
    align-items: center;
    justify-content: center;
    font-size: .213rem;
    width: 4.107rem;
    height: 3.627rem;
    top: 1.333rem;
    left: 50%;
    transform: translateX(-2.05rem);
    background: url('../images/2-1.png') no-repeat;
    background-size: 100% 100%;
    .item-title {
      color: #00e;
      position: absolute;
      left: 25%;
      top: 20%;
    }
    .mian-subject {
      position: absolute;
      left: 25%;
      top: 30%;
      li {
        line-height: .347rem;
        span{
          color: #00e;
          font-size: .187rem;
        }
        span:first-child{
          display: inline-block;
          font-size: .16rem;
          width: .213rem;
          height: .213rem;
          line-height: .213rem;
          text-align: center;
          border: 1px solid #fff;
          border-radius: 50%;
        }
        .high-color {
          color: #fff;
          background: #ffd400;
        }
      }
    }
  }
  .next-btn {
    position: absolute;
    width: 1.36rem;
    height: .667rem;
    background: url('../images/2-2.png') no-repeat;
    background-size: 100% 100%;
    top: 5.067rem;
    left: 50%;
    transform: translateX(-.68rem);
  }
  .submit-btn {
    position: absolute;
    width: 1.36rem;
    height: .667rem;
    background: url('../images/3-1.png') no-repeat;
    background-size: 100% 100%;
    top: 5.067rem;
    left: 50%;
    transform: translateX(-.68rem);
  }
}
</style>
