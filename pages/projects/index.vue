<template>
<transition name="page">
    <div data-scroll-container class="project-body">
        <div data-scroll   class="title">UGLY SHADOW F/W 22</div>
        <div data-scroll  class="project-container">
            <div data-scroll class="container-1">
            <img class="img-1" data-scroll-speed="2" src="~assets/fashion/uglyshadow/ug1.jpeg" />
            </div>
            <div data-scroll data-scroll-speed="2" class="container-2">
            <img class="img-2" loading="lazy" src="~assets/fashion/uglyshadow/ug2.jpeg" />
            <img class="img-3" loading="lazy" src="~assets/fashion/uglyshadow/ug3.jpeg" />

            </div>
            
            </div>
        </div>
        </transition>
</template>

<script>
export default {
    name: "Project",
    data(){
        return{
            scroll: undefined,
        };
    },

    beforeDestroy() {
  if (typeof this.scroll !== 'undefined') {
      this.scroll.destroy()
    }
  },

    mounted(){
        this.loaded=true;
              this.$nextTick(() => {
     this.locomotiveScrollInit();
      this.scroll.update();
              });
     this.$store.commit("expandMenu",true);
    },

    methods:{
        locomotiveScrollInit(){
                  if (process.client && typeof this.scroll === 'undefined') {
        this.scroll = new this.$LocomotiveScroll({

        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
          
      })
     
    }
        }
    },
}
</script>

<style lang="scss" scoped>
.project-body{
    background-color:black;
    color:white;


}
.title{
    font-family: Helvetica;
    font-style: bold;
    font-size: 150px;
    letter-spacing: 2rem;
    line-height: 1.18;
}

.container-1{
    width:100vw;
    display: flex;
    justify-content: center;
    align-content: center;
}

.img-2{
    padding-left:5rem;
    width:40vw;
        transform: translateY(-8%);
}
.img-3{
    padding-right:5rem;
    width:40vw;
        transform: translateY(-8%);
}

.container-2{
    width:100vw;
    display:flex;
    justify-content: space-around;
        padding-bottom:30rem;
}
.img-1{
    transform: translateY(-8%);
    width:40vw;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>