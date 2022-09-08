<template>
<div class="menu-container">
    <div  class="menu-collapsed" :class="{'menu-font-white':menuWhite}">
        <div class="logo"><nuxt-link class="nuxt-link" to="/" :class="{'menu-font-white':menuWhite}">Blue Lane</nuxt-link></div>
        <div class="Collection"><div class="circle" :class="{'circle-white':menuWhite}"></div><a v-if="!menuWhite">Acne Studios</a><a v-else>Ugly Shadow</a></div>
        <div class="Menu" @click="expandMenu" v-if="hideMenu">Menu</div>
        <div class="Menu" @click="expandMenu" v-else>Close</div>
    </div>
    <div  class="menu-expanded">
        <div class="logo-container">
         
           </div>
           <!-- <div class="current-collection" :class="{'list-staggered':listLoaded}">
           <div v-for="(titleImage,index) in fashImages" :key="index"  >
                    <ProjectImage :titleImage="titleImage" :index="index"/>
           </div>
           </div> -->
        <div class="list-collection" :class="{'list-staggered':listLoaded}"><a class="list-title">Collection</a>
            <div class="titles" v-for="(title, index) in titleObject" :key="index">
               <Title  :title="title" :index="index"></title>
            </div>
            </div>
        <div class="Info" :class="{'list-staggered':listLoaded}">Info</div>
        <!-- <div class="shipping">
            SHIPPING&RETURNS
        </div>
        <div class="contact">
            <a>CONTACT</a>
            <a>INFO@BLUELANE.COM@BLUELANE</a>
        </div>
     -->
    <div class="image-container" v-for="(titleImage,index) in titleObject" :key="index">
        <Title-Image :index="index" :titleImage="titleImage"/>
    </div>
    </div>
    </div>
</template>

<script>
import Title from './Title.vue'
import Image from './Title-Image.vue';
import ProjectImage from './Project-Image.vue';
export default {
  components: { Title, Image, ProjectImage },
    name: "Menu",

    data(){
        return{
            titleObject: [],
            titleImages: [],
            fashImages: [],
            titles: [
                "Supreme",
                "Acne Studios",
                "Ugly Shadow",
                 "Westwood",
                 "Sad Boy Hours",
                 "Battery Almost Out",
            ],
           
            
        }
    },
    props:{
        hideMenu:Boolean,
    },
    mounted(){
             this.importAll(require.context("~/assets/fashion/hoverimages/", true, /\.(jpe?g|png|gif|svg)$/i));
                this.importFashAll(require.context("~/assets/fashion/fash/", true, /\.(jpe?g|png|gif|svg)$/i));
        console.log(this.$route.path);
         this.combineTitle();
        // this.staggerLogo();
        
    },

    computed:{
        listLoaded(){
          if(!this.$store.state.expandMenu)
        //   setTimeout(()=> {
                 return true;
            //  },500);
            else 
            return false;
           
        },

        menuWhite(){
            return this.$route.path == "/projects"
        }
    },
    methods:{
        expandMenu(){
       
            if(!this.$store.state.expandMenu){
              
            this.$store.commit("expandMenu", true)
               
            }
            else
            this.$store.commit("expandMenu", false);
         
        },

        // staggerLogo(){
        //     console.log(this.hideMenu);
        //     if(this.hideMenu){
        //         setTimeout(()=> {
        //             this.listLoaded = true;
        //         }, 200);
        //     }
        //     else{
        //         this.listLoaded = false;
        //     }
        // },
        

         importAll(r) {
            r.keys().forEach(key => (this.titleImages.push({ pathLong: r(key), pathShort: key, })));
            //console.log(r.keys());
        },

         importFashAll(r) {
            r.keys().forEach(key => (this.fashImages.push({ pathLong: r(key), pathShort: key, })));
        },
          combineTitle() {
            const titleArray = this.titles;
           
            const imagesArray = this.titleImages;
            
             this.titleObject = imagesArray.map((function(x,i) { return {"image": x, "title": titleArray[i]}}));
                
            //this.combineImages = imagesArray.map(blurImagesArray);
            console.log(this.titleObject);
        },
    }
}
</script>

<style lang="scss" scoped>
.menu-container{
    position:fixed;
    left:0px;
    top:0px;
    width:100vw;
   height:100vh;
   // background-color:white;
    z-index:2;
  
     transition: all 0.8s cubic-bezier(0.215, 0.6, 0.355, 1);
    //  transition-delay:0.5s;
}

.nuxt-link{
    text-decoration: none;
      color:black;
    list-style: none;
}

.circle{
    width:30px;
    height:30px;
    border-radius: 100%;
    border:solid 1px black;
    background-color: black;
    display:inline-block;
    z-index:2;
    margin-right:5px;
    
}
.circle-white{
     border:solid 1px white;
    background-color: white;
}
.logo-container{
    display: flex;
    width:70vw;
    align-items: center;
    //  transform: translate(0, 90vh);
    //   transition: all 3s cubic-bezier(0.215, 0.6, 0.355, 1);
}

.logo-expanded{
    //padding-top:5vh;
    padding-left:5rem;
    font-size:126px;
}

.logo-translate{

}
.menu-collapsed{
    display: flex;
    justify-content: space-between;
    font-family:Helvetica;
    font-style: normal;
    font-size: 50px;
    padding:1.5rem;
    mix-blend-mode: difference;
}

.menu-expanded{
    display:flex;
    flex-wrap:wrap;
    color:white;
    font-size:50px;
    width:100vw;
    height:100vh;
      font-family:Helvetica;
    font-style: normal;
    background-color:black;
          transition: all 1s cubic-bezier(.37,.19,1,.68);
}

.current-collection{
    display:grid;
    width: 70vw;
    grid-template-columns: repeat(6, 10vw);
    grid-auto-rows:auto;
    grid-gap:20px;
    padding-top: 3rem;
    padding-left:2rem;
    opacity: 0;
    // grid-auto-rows: 10vw;
   transition: ease-in-out 0.3s;
   transition-delay: 0.1s;
}


.list-collection{
    opacity:0;
    padding-top:3rem;
    font-size:36.5px;
    transition: 0.3s;
}



.Info{
   opacity:0;
     padding-top:3rem;
     padding-left:2.8rem;
    font-size:36.5px;
       transition: ease-in-out 0.1s;
}

.list-staggered{
    opacity:80%;
    transition: ease-in-out 1s;
   transition-delay: 0.3s;
}
.shipping{
    position:fixed;
    bottom:5rem;
    left:3rem;
    width:5vw;
    font-size:12px;
}

.menu-font-white{
    color:white;
}

.contact{
    position:fixed;
    width:5vw;
    font-size:12px;
    bottom:4rem;
    left:30rem;
}

.image-container{
    position:relative;
    width:100vw;
    height:100vh;
}

</style>