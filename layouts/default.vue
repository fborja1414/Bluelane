<template>
<div>
  <transition v-if="loaded" name="page">
            <Menu  :hideMenu="hideMenu" :class="{menuCollapsed: hideMenu}"></Menu>
            </transition>
    <nuxt />
    
    </div>
</template>

<script>
import Menu from '../components/Menu.vue'
export default {
  components: { Menu },
    name: "Landing",

    data() {
        return{
            loaded:false,
           // hideMenu:true,
        }
    },
       computed:{
            hideMenu(){
              
                return this.$store.state.expandMenu;
       
        },
       },
    methods: {
     
    },

    mounted(){
      
        setTimeout(()=>{  this.loaded = true;},500);
     }
    
}
</script>

<style lang="scss">
body{
    margin:0;
    width:100vw;
    height:100vh;
}

.menuCollapsed{
    transform: translate(0,90vh);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 1s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}




// * {
//   box-sizing: border-box;
//   margin:0;
//   &:active {
//     outline: none;
//   }
// }

</style>