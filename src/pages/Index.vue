<template >
  <div>
    <Top :hovervalue="0" />
    <div class="middle">
      <el-carousel
        height="200px"
        trigger="click"
        class="Carousel"
        interval="5000"
      >
        <el-carousel-item v-for="item in imagelist" :key="item">
          <div class="small justify-center" text="2xl" style="height: 200px">
            <el-image
              :src="item"
              style="height: 200px; width: 1300px"
              fit="cover"
            />
          </div>
        </el-carousel-item>
      </el-carousel>

      <div class="middleBelow">
        <div class="article">
          <div class="articletitle">
            <span>热门文章</span>
          </div>
          <div v-for="(article,index) in artclelist" :key="index">
            <Article :article="article" />
          </div>
        </div>
        <div class="middleright">
          <div class="function">
             <button class="gopa" id="gop" @click="router.push('/askquestion')">去提问</button>
             <button class="gopa" id="goa" @click="router.push('/writearticle')">写文章</button>
          </div>
          <div class="userRank">
              <span>用户排行榜</span>
              <div class="userRankList" v-for="rank in userRankList" :key="rank.id">
                  <UserRankList :rank="rank"/>
              </div>
          </div>
          
        </div>
      </div>

      
    </div>
    <div class="bottom">

    </div>
  </div>
</template>

<script>
import { test } from "../api/api";
import { ElMessage } from "element-plus";
import Top from "../components/top.vue";
import Article from "../components/articleList.vue";
import UserRankList from "../components/userRankList.vue";
import { ref } from "@vue/reactivity";
import router from "../router/main"

export default {
  components: { Top, Article,UserRankList },
  name: "Index",
  setup() {
    const imagelist = [
      "https://i.328888.xyz/img/2022/11/30/iiLDC.jpeg",
      "https://i.328888.xyz/img/2022/11/30/iiMrP.jpeg",
      "https://i.328888.xyz/img/2022/11/30/iiP5X.jpeg",
      "https://i.328888.xyz/img/2022/11/30/iiQzc.jpeg",
    ];

    function getInfo() {
      test().then((res) => {
        // console.log(res);
        ElMessage({
          message: res.content,
          type: "success",
          duration: "2000",
        });
      });
    }

    const artclelist = ref([
      {
        //虚拟文章列表
        title: "标题一",
        view_count: 9,
        summary:
          "阿巴阿巴叭叭叭Qt+OSG/osgEarth跨平台编译（用Qt Creator组装各个库，实现一套代码、一套框架，跨平台编译）Qt+OSG/osgEarth跨平台编译（用Qt Creator组装各个库，实现一套代码、一套框架，跨平台编译）Qt+OSG/osgEarth跨平台编译（用Qt Creator组装各个库，实现一套代码、一套框架，跨平台编译）Qt+OSG/osgEarth跨平台编译（用Qt Creator组装各个库，实现一套代码、一套框架，跨平台编译）",
        likeNum: 9,
        thumbnail:
          "https://upload-bbs.mihoyo.com/upload/2021/06/22/74554653/89787bc2dc48ad3e38b4fb7666e590d3_2268648260912686209.jpg",
        userinfo: {
          id: "73",
          nickname: "戴艳",
        },
        tags: [
          {
            id: 18,
            name: "层须元参力",
            parentId: null,
            childrenList: null,
            entity: null,
          },
          {
            id: 77,
            name: "世打样而验拉",
            parentId: null,
            childrenList: null,
            entity: null,
          },
        ],
      },
      {
        title: "标题二",
        view_count: 9,
        summary: "描述",
        likeNum: 9,
        thumbnail:
          "https://pic3.zhimg.com/80/v2-7aae1904b0ea14e6f16822a8297bce36_qhd.jpeg",
        userinfo: {
          id: "74",
          nickname: "皮卡丘",
        },
        tags: [
          {
            id: 18,
            name: "层须元参力",
            parentId: null,
            childrenList: null,
            entity: null,
          },
          {
            id: 77,
            name: "世打样而验拉",
            parentId: null,
            childrenList: null,
            entity: null,
          },
        ],
      },
    ]);

    const userRankList=ref([
      {
        "userid": 22,
        "name": "神里凌华",
        "articleQuantityStatistics": 444,
        "avatarUrl": "https://files.catbox.moe/idgd9l.png"
      },
      {
        "userid": 23,
        "name": "迪奥娜",
        "articleQuantityStatistics": 6,
        "avatarUrl": "https://files.catbox.moe/z5q921.png"
      }
    ])
    return {
      getInfo,
      imagelist,
      artclelist,
      userRankList,
      router
    };
  },
};
</script>

<style lang="scss" scoped >
@import "../style/index.scss";
</style>
