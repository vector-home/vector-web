<template>
    <div class="root">
        
        <el-image :src=props.avatarUrl fit="cover" class="image"/>
        <div class="rankinfo">
            <span class="username">{{props.name}}</span>
            <span class="articlequantity">发表文章数量{{props.articleQuantityStatistics}}</span>
                    
        </div>
    
       
    </div>
</template>

<script>
    
    export default {
      name:'',
      props:{
          rank:Object
          },
      setup(props){
        //   console.log(props.rank)
       return {
           props:props.rank
       }
      }
}
</script>

<style lang="scss" scoped >
.root{
    width: 100%;
    height: 100px;
    background-color: skyblue;
    border-bottom:1px solid  grey;
    
    .image{
        width: 60px;
        height: 60px;
        padding: 10px;
        float: left;
    }
    .rankinfo{
        float: left;
        padding: 10px;
        .articlequantity{
            margin-top: 20px;
            display: block;
        }
    }


}

</style>
