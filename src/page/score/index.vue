<template>
  <div class="score-page">
    <div class="your-score">
        <span>{{score}}分</span>
        <i>{{scoreTips}}</i>
    </div>
    <div class="share-img" @click="operateRemind"></div>
    <div class="remind-view" v-show="remindView" @click="operateRemind">
      <img src="../../images/5-2.png"  class="share_img">
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      remindView: false,
      score: 0,
      scoreTips: '',
      rightAnswer: [2, 7, 12, 13, 18],
      scoreTipsArr: ['你说，是不是把知识都还给小学老师了？', '还不错，但还需要继续加油哦！', '不要嘚瑟还有进步的空间！', '智商离爆表只差一步了！', '你也太聪明啦，葡萄之家欢迎你！'],
    };
  },
  computed: mapState(['answerid']),
  methods: {
    getCalcScore() {
      this.answerid.forEach((item, index) => {
        if (item === this.rightAnswer[index]) {
          this.score += 20;
        }
      });
    },
    getScoreTip() {
      const scoreAssess = Math.ceil(this.score / 20) - 1;
      this.scoreTips = this.scoreTipsArr[scoreAssess];
    },
    operateRemind() {
      this.remindView = !this.remindView;
    },
  },
  created() {
    document.body.style.background = 'url(static/img/4-1.jpg)';
    this.getCalcScore();
    this.getScoreTip();
  },
};
</script>
<style lang="less">
.score-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .your-score {
    width: 3.027rem;
    height: 2.84rem;
    background: url('../../images/4-2.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: .667rem;
    display: flex;
    justify-content: center;
    text-align: center;
    span {
      position: absolute;
      font-size: 40px;
      font-weight: bold;
      top: 1.6rem;
      color: #a51d31;
    }
    i{
      position: absolute;
      font-size: .16rem;
      font-style: normal;
      top: 2.4rem;
    }
  }
  .share-img{
    margin-top: .8rem;
    width: 1.893rem;
    height: .747rem;
    background: url('../../images/4-3.png') no-repeat;
    background-size: 100% 100%;
  }
  .remind-view{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background:url('../../images/5-1.png') no-repeat;
    background-size: 100% 100%;
    opacity: .92;
    .share_img{
      position: absolute;
      width: 3.733rem;
      height: 3.427rem;
      top: .133rem;
      left: 50%;
      transform: translateX(-1.86rem)
    }
  }
}
</style>
