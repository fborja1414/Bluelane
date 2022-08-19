export const state = () => ({
    expandMenu: true,
    currentTitle: String,
});

export const mutations = {
   expandMenu(state,value){
   
       state.expandMenu = value;
       console.log(value);

   },

   titleToggle(state,value){
       state.currentTitle = value;
   },

   clearTitle(state){
       state.currentTitle = "";
   }

};