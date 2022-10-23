<template>
  <div class="container">
    <search-component />
    <div class="main">

      <trending-component :data="data"/>
      <recomended-component :movies="data"/>

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
  props:{
    movies: Array 
  },
  data() {
    return{
      data: Movies
    }
  },
  // props: {
  //   movie: Array
  // },
  // mounted() {
  //   console.log(this.movie)
  // }

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

</style>