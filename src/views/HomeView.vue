<template>
  <div class="container">
    <div class="input">
      <label>
        <input v-model="search" type="search" placeholder="Search for Movie TV Series here" />
      </label>
    </div>
    <div class="main">
      {{search}}
      <trending-component :data="data"/>
      <recomended-component :movies="searchInput"/>

    </div>
  </div>
</template> 

<script>
 import Movies from '../datas/movies.js';
import trendingComponent from '../components/trendingComponent.vue'
import recomendedComponent from '../components/recomendedComponent.vue'
import SearchComponent from '../components/searchComponent.vue';
export default {
  components: {
    trendingComponent,
    recomendedComponent,
    SearchComponent,
  },
  // props:{
  //   movies: Array 
  // },
  data() {
    return{
      data: Movies,
      search: '',
    }
  },
  computed: {
      searchInput() {
        let data = [...this.data]
        return data = data.filter(src => src.title.toLowerCase().includes(this.search.toLowerCase()))
        // this.mvs = this.mvs.filter(srch => srch.title.includes('Un'))
        // return this.series
      }
    }

} 
</script>
 
<style scoped>
.container{
  position:relative;
  padding: 0;
}
.main{
  background-color: #10141E;
}
.input{
    position: relative;
    width: 100%;
    margin: 0;
    /* padding: 0 12px; */
  }
label{
  width: 100%;
  margin: 0;
  padding: 0;
}
  .input input{ 
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    padding: 15px 4em;
    background-image: url('../assets/icon-search.svg');
    background-position-y: center;
    background-repeat: no-repeat;
    /* display: flex;
    align-items: center; */
  }

 

</style>