<template>
  <div>
    <Top />
    <div class="user">
      <el-avatar :size="110" class="avatar" :src="data.circleUrl" />
      <div class="userinfo">
        <span class="username">用户昵称</span>
        <div class="account">
          <span class="article">文章数量 {{ data.article }}</span>
          <span class="answer">回答数量 {{ data.answer }}</span>
          <span class="attention">关注数量 {{ data.attention }}</span>
          <span class="like">点赞数量 {{ data.like }}</span>
        </div>
      </div>
    </div>
    <div class="relevant" :style="[add == 1 ? addwidth : 0]">
      <div class="relevant-left" :style="[add == 1 ? addwidthleft : 0]">
        <ul class="relevant-option">
          <li>作品数据</li>
          <li>数据2</li>
          <li>数据3</li>
        </ul>
      </div>
      <div class="relevant-right" :style="[add == 1 ? addwidthright : 0]">
        <div class="relevant-right-top">
          <a
            class="tab"
            href="javascript:0"
            @click="switchTab(tab)"
            v-for="(tab, index) in tabdata"
            :key="index"
          > 
            <a href="javascript:0"  :style="[tab.name==currentTab.name?sectab:0]">{{ tab.name }}</a>
          </a>
        </div>
        <div class="relevant-right-bottom">
          <component :is="currentTab.tabComp"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { markRaw, reactive, ref } from "@vue/reactivity";
import Top from "../../components/top.vue";
import Article from "../../components/userCenterArticle.vue";
import Answer from "../../components/userCenterAnswer.vue";
import Attention from "../../components/userCenterAttention.vue";
import { nextTick, onMounted, watch } from "@vue/runtime-core";

export default {
  name: "UserCenter",
  components: { Top, Article, Answer, Attention },
  setup() {
    const data = reactive({
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      article: "5",
      attention: "4",
      answer: "1",
      like: "66",
    });
    const bodywidth = ref();
    let add = ref();
    const addwidth = reactive({
      width: "1300px",
    });
    const addwidthleft = reactive({
      width: "300px",
    });
    const addwidthright = reactive({
      width: "968px",
    });
    //动态组件
    let tabdata = reactive([
      {
        name: "文章",
        tabComp: markRaw(Article),
      },
      {
        name: "回答",
        tabComp: markRaw(Answer),
      },
      {
        name: "收藏",
        tabComp: markRaw(Attention),
      },
    ]);

    const switchTab = (tab) => {
      currentTab.name = tab.name;
      currentTab.tabComp = tab.tabComp;
    };

    let currentTab = reactive({
      name:tabdata[0].name,
      tabComp: tabdata[0].tabComp,
    });

    const sectab=reactive({
      borderTop:"4px solid #27a9c9",
    })


    onMounted(() => {
      bodywidth.value = document.documentElement.clientWidth;
      window.onresize = () => {
        //检测浏览器宽度
        return (bodywidth.value = document.documentElement.clientWidth);
      };

      if (bodywidth.value >= 1360) {
        add.value = 1;
      }
    });
    //根据浏览器宽度增加宽度
    watch(bodywidth, (value, oldvalue) => {
      if (value >= 1360) {
        add.value = 1; //增加宽度
      } else {
        add.value = 0; //减少宽度
      }
    });

    return {
      data,
      bodywidth,
      addwidth,
      addwidthleft,
      addwidthright,
      add,
      tabdata,
      currentTab,
      switchTab,
      sectab
    };
  },
};
</script>

<style lang="scss" scoped >
@import "../../style/userCenter.scss";
</style>
