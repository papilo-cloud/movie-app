<template>
  <div id="app">
    <div class="side_bar">
      <sidebar-component id="side" />
    </div>
    <div class="routes">
      <router-view :movies="movies" />
    </div>
  </div>
</template>

<script>
  import HomePage from './views/HomeView.vue';
  import Movies from './datas/movies.js';
  import SidebarComponent from './components/sidebarComponent.vue';

  export default {
    components: {
    Movies,
    HomePage,
    SidebarComponent
},
    data() {
      return{
        movies: Movies  
      }
    }, 
    mounted() {
      console.log(this.movies);
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #10141E;
  width: 100%;
  min-height: 100vh;
  --red: #FC4747;
  --darkBlue: #10141E;
  --grayishBlue: #5A698F;
  --semiDarkBlue: #161D2F;
  --white: #FFFFFF;
  /* display: grid; */
}
/* Main App Styling by DeadEazy */



/* .icon:active{
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
} */
@media screen and (min-width: 1000px) {
#app{
  display: grid;
  grid-template-columns: 80px 1fr;
}

 #side{
  height: 500px;
  width: 60px;
  background-color: var(--semiDarkBlue);
  border-radius: 0 0 15px 15px;
  position: relative;
  margin: 0 auto;
  top: 0;
}
.side_bar{
  margin: 0;
  padding: 0;
  position: relative;
}

}
</style>
