<template>
<transition name="page">
  <div ref="scrollSections" data-scroll-container>
      <div data-scroll-section class="image-component" id="container" v-for="(entry,index) in arrayImages"  :key="index"  >
       <LandingImage :index="index" :progress="progress" :scroll="scroll"  class="image-container" :entry="entry" />
    </div>
  </div>
  </transition>
</template>

<script>
import LandingImage from '../components/LandingImage.vue';
export default {
    name: "LandingPage",
      components: { 
        LandingImage 
        },
    data() {
        return {
            imageDir: "~/assets/fashion/fash/",
            arrayImages: [],
            images: [],
            blurImages:[],
            scroll: undefined,
            progress: [1,1,1,1,1,1,1,1],
        };
    },
  transition: {
    appear:true,
  },
    mounted() {
      this.$store.commit("expandMenu",true);
        this.importAll(require.context("~/assets/fashion/fash/", true, /\.(jpe?g|png|gif|svg)$/i));
           this.importblurAll(require.context("~/assets/fashion/blurfash/", true, /\.(jpe?g|png|gif|svg)$/i));
           this.combineImages();
        
         this.$nextTick(() => {
     this.locomotiveScrollInit();

          this.scroll.update()
    })

      
       
    },
  

  beforeDestroy() {
  if (typeof this.scroll !== 'undefined') {
      this.scroll.destroy()
    }
  },


    methods: {
        importAll(r) {
            r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key, })));
            //console.log(r.keys());
        },
        importblurAll(r) {
            r.keys().forEach(key => (this.blurImages.push({ pathLong: r(key), pathShort: key })));
            //console.log(r.keys());
        },
        combineImages() {
            const imagesArray = this.images;
            console.log(imagesArray);
            const blurImagesArray = this.blurImages;
            console.log(blurImagesArray);
             this.arrayImages = imagesArray.map((function(x,i) { return {"image": x, "blurImage": blurImagesArray[i]}}));
                
            //this.combineImages = imagesArray.map(blurImagesArray);
            console.log(this.arrayImages);
        },
        // setOpacity(section){
        //     console.log("hi" + section);
        // },

         locomotiveScrollInit() {
             if (process.client && typeof this.scroll === 'undefined') {
      this.scroll = new this.$LocomotiveScroll({

        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
          getDirection: true

          
      })
    //   this.scroll.start();
    
    this.scroll.on("scroll", (args) => { 
    //     const sectionArr = [];
    //     const currIndex = 1;
        //console.log(JSON.stringify(args));
   //   for(let x=0; x < args.currentElements.length; x++){
        const currSection1  = "#_1";
        const currSection2 = "#_2";
        const currSection3 = "#_3";
        const currSection4 = "#_4";
        const currSection5 = "#_5";
        const currSection6 = "#_6";
        const currSection7 = "#_7";
        const currSection8 = "#_8";

      // args.currentElements.forEach(element => (console.log(element.progress)));
    
          if (typeof args.currentElements[currSection1] === "object") {
             let sec1 = (1 - args.currentElements[ currSection1].progress ) - 0.5;
            // console.log(sec1);
             if(sec1 > 0.4) {
                
                sec1 = sec1 + 0.5;
                 
            }
             this.progress[0]= sec1;
            const section1 = document.querySelector("._1");
           
            section1.style.opacity = this.progress[0];
            // console.log(this.progress[0]) ;
            }
            if (typeof args.currentElements[currSection2] === "object") {
             let sec2 = (1 - args.currentElements[ currSection2].progress) - 0.5;
                   if(sec2 > 0.4) {
                
                sec2 = sec2 + 0.5;
                 
            }
                 this.progress[1]=sec2;
                   const section2 = document.querySelector("._2");
            section2.style.opacity = this.progress[1];
          
            }
            if (typeof args.currentElements[currSection3] === "object") {
             let sec3 = (1 - args.currentElements[ currSection3].progress) - 0.5;
               if(sec3 > 0.4) {
                
                sec3 = sec3 + 0.5;
                 
            }
             this.progress[2]=sec3;}
                   const section3 = document.querySelector("._3");
            section3.style.opacity = this.progress[2];

              
            if (typeof args.currentElements[currSection4] === "object") {
             let sec4 =(1- args.currentElements[ currSection4].progress) - 0.5;
                if(sec4 > 0.4) {
                
                sec4 = sec4 + 0.5;
                 
            }
              
              this.progress[3]=sec4;
                     const section4 = document.querySelector("._4");
            section4.style.opacity = this.progress[3];

              }
            if (typeof args.currentElements[currSection5] === "object") {
             let sec5 = (1 - args.currentElements[ currSection5].progress) - 0.5;
                if(sec5 > 0.4) {
                
                sec5 = sec5 + 0.5;
                 
            }
              this.progress[4]=sec5;
                     const section5 = document.querySelector("._5");
            section5.style.opacity = this.progress[4];

              }
            if (typeof args.currentElements[currSection6] === "object") {
             let sec6 = (1 - args.currentElements[ currSection6].progress) - 0.5;
               if(sec6 > 0.4) {
                
                sec6 = sec6 + 0.5;
                 
            }
             this.progress[5]=sec6;
                     const section6 = document.querySelector("._6");
            section6.style.opacity = this.progress[5];
}
            if (typeof args.currentElements[currSection7] === "object") {
             let sec7 = (1 - args.currentElements[ currSection7].progress) - 0.5;
                if(sec7 > 0.4) {
                
                sec7 = sec7 + 0.5;
                 
            }
              this.progress[6]=sec7;
                     const section7 = document.querySelector("._7");
            section7.style.opacity = this.progress[6];
}
            if (typeof args.currentElements[currSection8] === "object") {
             let sec8 = (1 - args.currentElements[ currSection8].progress) - 0.5;
                if(sec8 > 0.4) {
                
                sec8 = sec8 + 0.5;
                 
            }
              this.progress[7]=sec8;
                     const section8 = document.querySelector("._8");
            section8.style.opacity = this.progress[7];
}
          
     
    });
         
             }
    },  
         
         },
}
</script>

<style lang="scss" scoped>

.menu-collapsed{
    display: flex;
    justify-content: space-between;
    font-family:Helvetica;
    font-style: normal;
    font-size: 50px;
    padding:1.5rem;
    mix-blend-mode: difference;
}



.image-component{
width: 100vw;
height:100vh;
overflow:hidden;
// position:sticky;

   top:0vh;
    margin:0;
    padding:0;
  
   
}

.page-enter-active,
.page-leave-active {
  transition: opacity 1s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>