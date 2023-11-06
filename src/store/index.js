import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagstore:[],
    op:1,
    username:""
  },
  getters: {
  },
  mutations: {
    tagpush(state,{name,path}){
      let narr=[...state.tagstore,{name,path}]
      for(let i=0;i<narr.length;i++){
        for(let j=i+1;j<narr.length;j++){
          if(narr[i].name==narr[j].name){
            narr.splice(j,1)
            j--
          }
        }
      }
      state.tagstore=narr
    },
    tagshift(state,path){
      let narr=[...state.tagstore]
      for(let i=0;i<narr.length;i++){
        if(narr[i].path==path){
          narr.splice(i,1)
        }
      }
      state.tagstore=narr
    },
    changeop(state,op){
      state.op=op
    },
    changename(state,username){
      state.username=username
    },
  },
  actions: {
  },
  modules: {
  }
})
