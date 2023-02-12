<template>
    <div class="root">
       <div class="title">{{props.title}}</div>
       <div class="mid">
            <div style="float:left"><el-image :src=props.thumbnail fit="cover" class="image"/></div>
            <div class="trod">{{props.summary}}</div>  
            <div class="username">作者：{{props.userinfo.nickname}}</div>
       </div>
       
       
    </div>
</template>

<script>
    
    export default {
      name:'',
      props:{
          article:Object
          },
      setup(props){
        //   console.log(props.article)
       return {
           props:props.article
       }
      }
}
</script>

<style scoped lang="scss">
.root{
    height: 170px;
    width: 100%;
    
    border-bottom: 1px solid $border-color;
}
.title{
    padding-top: 15px;
    text-align: left;
    font-size: 18px;
    font-weight: 500;
}
.mid{
    padding-bottom: 15px;
    height: 100px;
    padding-top: 10px;
    .image{
        width: 150px;
        height: 100px;
        float: left;

    }
    .trod{
        text-align: left;
        float: left;
        margin-left: 20px;
        height: 60px;
        width: 850px;
        font-size: 14px;
        color: $text-color;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;

    }
    .username{
        float: left;
        margin-left: 20px;
        margin-top: 24px;
        font-size: 14px;
    }
}

</style>
