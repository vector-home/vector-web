<template>
  <div class="root">
    <div class="dataList" v-for="(data,index) in dataList" :key="index">
      <a href="javascript:0" class="top">
        {{ data.title }}
      </a>
      <div class="content">
        {{ data.content }}/
      </div>
      <div class="bottom">
        <li>发布：{{ data.createtime }}</li>
        <li>{{ data.viewCount }} 阅读</li>
        <li>标签:{{ data.categeoryName }}</li>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

const dataList = reactive([{
    title: "解决wordpress上传限制",
    content:
        "在WordPress网站上传媒体文件时，文件过大，提示 ”超过了站点的最大上传限制”，这是因为网站默认情况下文件上传大小限制是50m，一旦超过这个大小，就会上传失败。今天我就给大家讲解一下如何修改WordPress文件上传大小限制。你不需要去碰任何的代码，也不需要去修改任何的PHP配置文件",
    createtime: "2007-9-7",
    viewCount: "55",
    categeoryName: "wordpress",
    },{
    title: "解决wordpress上传限制",
    content:
        "在WordPress网站上传媒体文件时，文件过大，提示 ”超过了站点的最大上传限制”，这是因为网站默认情况下文件上传大小限制是50m，一旦超过这个大小，就会上传失败。今天我就给大家讲解一下如何修改WordPress文件上传大小限制。你不需要去碰任何的代码，也不需要去修改任何的PHP配置文件",
    createtime: "2007-9-7",
    viewCount: "55",
    categeoryName: "wordpress",
}]);

</script>

<style lang="scss" scoped >
.root {
  padding: 20px 20px 0 20px;
  .dataList{
      margin-bottom: 10px;
      padding-bottom:10px;
      border-bottom: 1px solid $border-color;
  .top {
    color: $text-color;
    font-size: 16px;
  }
  .top:hover {
    color: $color-hover;
  }

  .content {
    font-size: 14px;
    padding-top: 8px;
    height: 40px;
    width: 100%;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .bottom {
    margin-top: 10px;
    display: flex;
    justify-content: left;
    flex-flow: row;
    li {
      list-style: none;
      font-size: 14px;
      margin-right: 20px;
    }
  }      
  }
  .dataList:last-child{
      border: none;
  }

}
</style>
