<template>
    <Top :hovervalue='0' />
  <div class="middle">
    <div class="writeTop">
        <!-- 富文本编辑器 -->
        <MyEditor />
    </div>
    <div class="writeBottom">
        <!-- 文章标签 -->
        <div class="lab">
            <lable >文章标签：</lable>
            <el-select v-model="lablevalue" multiple filterable allow-create default-first-option :reserve-keyword="false"
                placeholder="+ 添加文章标签">
                <el-option v-for="item in lableoptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>

        <!-- 文章形式 -->
        <div class="lab">
            <lable >文章形式：</lable>
            <el-select v-model="typevalue" clearable placeholder="选择文章形式">
                <el-option v-for="item in typeoptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>

        <div class="btn">
            <button @click="getInfo">保存草稿</button>
            <button @click="getInfo">发布文章</button>
        </div>
    </div>

  </div>
</template>

<script>
import { test } from "../api/api";
import { ElMessage } from 'element-plus'
import Top from "../components/top.vue"
import MyEditor from "../components/MyEditor.vue";
import { ref } from 'vue'
export default {
  components: { Top,MyEditor },
  name: "WriteArticle",
  setup() {
    const lablevalue = ref('')
    const lableoptions = [
      {
        value: 'HTML',
        label: 'HTML',
      },
      {
        value: 'CSS',
        label: 'CSS',
      },
      {
        value: 'JavaScript',
        label: 'JavaScript',
      },
    ]
    const typevalue = ref('')
    const typeoptions = [
      {
        value: '原创',
        label: '原创',
      },
      {
        value: '转载',
        label: '转载',
      },
      {
        value: '翻译',
        label: '翻译',
      },
    ]


    function getInfo() {
      test().then((res) => {
        // console.log(res);
        ElMessage({
            message: res.content,
            type: 'success',
            duration:"2000"
        })
      });
    }

    return {
      getInfo,
      lablevalue,
      lableoptions,
      typevalue,
      typeoptions
    };
  },
};
</script>

<style lang="scss" scoped >
@import "../style/index.scss";

.writeTop {
  width: 70%;
  margin: 0 auto;
  background-color: #ABCCD9;
}

.writeBottom {
  border: 1px solid #ccc;
  width: 70%;
  height: 300px;
  background-color: #ABCCD9;
  margin: 20px auto;
  position: relative;
}

.lab{
  margin-left:10%;
  padding: 20px;
  height: 40px;
  text-align: left;
}

.btn {
  position: absolute;
  right: 100px;
  bottom: 30px;
}

button {
  border-radius: 50%;
  width: 160px;
  height: 60px;
  background-color: #2775B6;
  margin: 20px;
}
</style>
