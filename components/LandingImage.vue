<template>
<div>
    <div data-scroll data-scroll-sticky class="section"  ref="imageWrapper" >
     <div ref="blurImage" class="background-image" :style="{backgroundImage: entry.blurImage.pathLong}"></div>
     <img data-scroll data-scroll-sticky class="image-module" :src="entry.image.pathLong" :key="index" ref="imageContainer"/>
     </div>
      <div  class="next-container"   ref="nextContainer"> </div>

     </div>
     
</template>

<script>
export default {
   
    name: "LandingImage",
    props: {
        entry: Object,
        index: Number,
        scroll: Object,
       
    },
    data(){
        return {
           
        }
    },

computed:{
    nextId() {
        return "_" + (this.index + 1);
    },

},


   methods:{
    setAttributeTarget(){
            const next = this.$refs.nextContainer;
            
            next.setAttribute("id", this.nextId);
            const blur = this.$refs.blurImage;
              blur.setAttribute("data-scroll-target", "#" + this.nextId);
                blur.style.backgroundImage = `url(`+this.entry.blurImage.pathLong + `)`;
          const wrapper = this.$refs.imageWrapper;
          wrapper.setAttribute("data-scroll-target", "#" + this.nextId);
          wrapper.setAttribute("data-scroll-id", "#" + this.nextId);
           wrapper.setAttribute("id", "#" + this.nextId);
            const image = this.$refs.imageContainer;
           image.setAttribute("class", this.nextId )
    },



//     callScroll(){
//         this.scroll.on('call', (obj) => {
//     console.log("hi");
//     console.log(obj);
// });
//         //this.$emit( "currSectionProgress",this.nextId);
       
//     }

// setOpacity() {
//  
// },
 },

   

        // blur(){
           
        //      const image = this.$refs.imageContainer;
        //     // console.log(image.parentElement.previousSibling.querySelector("img"));
        //     const Images = image;
        //    // console.log(Images);
        //         // Observer options.
        //         const options = {
        //             root: null,
        //             rootMargin: '0px',
        //             threshold: 0.2,
        //         };

        //         // Construct Intersection Observer.
        //         const observer = new IntersectionObserver( function( entries, observer ) {
        //        let observedImg = entries[0];

        //        ! observedImg.isIntersecting ? observedImg.target.style.filter = 'blur(0px)' : observedImg.target.style.filter = 'blur(10px)';

        //        //console.log(observedImg);
                  
        //             // Add or remove the blur.
        //  }, options);

        //         // Observe if element is present.
        //         observer.observe(image)
        //       s  }
    

mounted() {
    this.setAttributeTarget();

   // console.log(this.progress);
   // this.callScroll();
    //this.setOpacity();
//   this.blur();
}
}
</script>

<style lang="scss" scoped>

.section{
    background: #000;
//   padding:5rem 0;
}

.background-image{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
   // background-image: url(~/assets/fashion/blurfash/blur2_1.png);
    background-color: #dbdbdb;
    background-size:cover;
}

.landingimage-module{

// backdrop-filter: blur(20px);
//  will-change: backdrop-filter;
  
//    max-width: 100vh;
//    max-height: 100vw;
    margin:0;
    width:110vw;
  
    object-fit: cover;
 
}

.next-container{
    position:absolute;
    top: 30vh;
    left:0;
    width:100%;
    height:calc(100% - 80px);
    pointer-events: none;
}
</style>