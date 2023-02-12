<template>
<div id="root">
    <div id="top">
        <div class="logo">
            this is a logo
        </div>
        <ul class="topMiddle">
            <li ><a href="javascript:;" :class='[hovervalue==0?"topListHover":"topList"]' >首页</a></li>
            <li ><a href="javascript:;" id="two" :class='[hovervalue==1?"topListHover":"topList"]'>问答</a></li>
            <li ><a href="javascript:;" :class='[hovervalue==2?"topListHover":"topList"]'>文章</a></li>
        </ul>

        <div class="search">
            <input class="searchInput" type="search" placeholder="点击搜索更多内容"/>
            <el-button class="searchBtn">搜索</el-button>
        </div>
        
        <div class="user">
            <div class="nologin" v-if="!islogin">
                <a href="javascript:;" class="lgre" @click="router.push('/login')">登录</a>
                | 
                <a href="javascript:;" class="lgre">注册</a>
            </div>
            
            <div class="login" v-if="islogin">
                {{name}} 
                
                <el-dropdown class="avatar">
                    <span class="el-dropdown-link">
                        头像
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="router.push('/usercenter')">我的主页</el-dropdown-item>
                            <el-dropdown-item>个人设置</el-dropdown-item>
                            <el-dropdown-item divided>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                        </template>
                </el-dropdown>

            </div>
        </div>


    </div>    
</div>

</template>

<script setup>
import { ref } from '@vue/reactivity'
import {useStore} from "vuex"
import router from '../router/main';

const store =useStore()

const name=store.getters.userInfo.name
var islogin=ref(true)

const props = defineProps({
    hovervalue:Number  //0是首页,1是问答,2是文章
})

if (store.getters.userInfo.name){
     islogin=true
}

    function gologin(){
      router.push('/login')
    }





      

</script>

<style scoped lang="scss">
#root{
    height: 47px;
    background-color: #fff;
    border-bottom: 1px solid $border-color;
}
#top{
    display: flex;
    justify-content: space-between;
    width: 1100px;
    margin: 0 auto;

}
.logo{
    width: 50px;
}

.topMiddle{
    display: flex;
    float: left;
    flex-direction: row;
    justify-content: center;
    margin: 0 0 0 20px;
    padding: 0;
    width: 300px;
    li{
        list-style: none;
        // border-right: 1px solid $border-color;
    }
    .topList{
        display: block;
        width: 80px;
        height: 45px;

        padding: 0;
        line-height: 48px;
        text-align: center;
        color: $text-color;
    }
    .topListHover,.topList:hover{
        display: block;
        width: 80px;
        height: 45px;

        padding: 0;
        line-height: 48px;
        text-align: center;       
        background-color: $color-hover;
        color: $text-color-inverse;
    }
    #two{
        border-right: 1px solid $border-color;
        border-left: 1px solid $border-color;
    }

}
.search{

    .searchInput{
        padding-left: 35px;
        background: url("../src/assets/fontIcon/搜索.png") no-repeat 10px center/16px ;
        background-color: white;
        border: 2px solid $border-color;
        border-radius:5px ;
        height: 30px;
        margin-top: 10px;
    }
    .searchInput:focus{
        outline: 0;
    }
    .searchInput:hover{
        border-color: $color-hover ;
    }
    .searchBtn{
        margin: 1px 0 0 1px;
        padding: 5px 12px;
        height: 30px;
    }
    .searchBtn:hover{
        background-color: $color-hover;
        color: $text-color-inverse;
    }
}
.user{
    line-height: 50px;
    .nologin{
        float: left;
        .lgre{
            color: $text-color;
        }
        .lgre:hover{
            color: $color-hover;
        }        
    }
    .login{
        float: left;
    }
    .avatar{
        margin-top: 17px;

    }

}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
