<template>
<div>
    <div class="title" @mouseenter="hoverin" @mouseleave="hoverout">
        <a><nuxt-link to="/projects">{{title.title}}</nuxt-link></a>
    </div>
    </div>
</template>

<script>
export default {
    name:"Title",
    props:{
        title: Object,
        index:Number,
    },

    methods:{
        hoverin(){
            console.log("mousein");
         
            this.$store.commit("titleToggle", this.title.title);
        },
        hoverout(){
               console.log("mouseout");
               this.$store.commit("clearTitle");
        }
    }
}
</script>

<style lang="scss" scoped>

a{
    list-style: none;
    color:white;
    text-decoration: none;
}
    .image-container{
        position:fixed;
          height: 100vh;
            width: 100vw;
            max-width:40vw;
            margin: 0;
            transition: opacity 1s;
            align-items: center;
            transform: translateX(-50%);
    }
.title{
    opacity: 0.8;
    mix-blend-mode: exclusion;
    margin-left:3rem;
    pointer-events: all;
    cursor: pointer;
}
    .title:hover{
        font-style: italic;
          cursor: pointer;
    }
</style>