<template>
    <Top :hovervalue='0' />
  <div class="middle">
    <div class="askTop">
        <!-- 富文本编辑器 -->
        <MyEditor/>
    </div>
    <div class="askBottom">
        <!-- 添加问题标签 -->
        <div class="lab">
            <lable>问题标签：</lable>
            <el-select v-model="value" multiple filterable allow-create default-first-option :reserve-keyword="false"
                placeholder="+ 添加问题标签">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>

        <div class="btn">
            <button @click="getInfo">发布问题</button>
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
  name: "AskQuestion",
  setup() {
    const value = ref('')
    const options = [
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
        value,
      options,
      getInfo,
    };
  },
};
</script>

<style lang="scss" scoped >
@import "../style/index.scss";

.askTop {
  width: 70%;
  margin: 0 auto;
  background-color: #ABCCD9;
}

.askBottom {
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
  height: 60px;
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
