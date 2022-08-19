<template>
<div class="image-component">
    <img class="image" :src="titleImage.pathLong" :class="{'imageHovered': titleHovered}" />
</div>
</template>

<script>
export default {
    name:"Project-Image",
        data(){
            return{
               // titleHovered: false,
            }
        },
    props:{
       // titleHovered:boolean,
        titleImage: Object,
    },

    computed:{
        // titleHovered(){
        //     return this.titleImage.title === this.$store.state.currentTitle;
        // }
    }
}
</script>

<style lang="scss" scoped>
.image-component{
position:relatve;

    width:100%;
    height:100%;
    z-index:2;
    
    // height:100vh;
   
}

.image{
    width:100%;
    height:100%;
  
    // z-index:2;
     // opacity:0;
        transition:opacity 0.5s ease-in-out;
}

.imageHovered{
    opacity:1;
    transition:opacity 0.5s ease-in-out;
}


</style>