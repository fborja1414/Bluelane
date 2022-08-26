<template>
    <div class="about-grid">
        <div class="contact">
                INFO@bluelaneSTUDIO.COM
                @bluelaneSTUDIO
        </div>
        <div class="about-info">
            Blue Lane is a fashion and editorial blog
based out of LA and NY.
        </div>
    </div>
</template>

<script>
export default {
    name:"about",
    data(){
        return{
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
       mounted(){
           setTimeout(()=>{
 this.$store.commit("expandMenu",true);
           },500
           )
    
    },

}

</script>

<style lang="scss" scoped>
    .about-grid{
        width:100vw;
        height:100vh;
        background-color:black;

        display:grid;
        grid-template-columns:repeat(12,1fr);
        column-gap:20px;
         font-family: helvetica;
         font-style:regular;
        }
    .contact{
        color:white;
        align-content: center;
        align-items: center;
        margin-top:3rem;
        padding-bottom:0;
        grid-column: 9/13;
       font-size:36px;
        
    }
    .about-info{
        
        color:white;
        padding-left:3rem;
        padding-top:0;
        margin:0;
        grid-column:1/11;
        font-size:100px;
    }
  

</style>