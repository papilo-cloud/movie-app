<template>
  <div class="mss">
    <div class="input">
      <label>
        <input v-model="search" type="search" placeholder="Search for TV series here" />
      </label>
    </div>
  <div class="moviesview">
    <div class="container" v-for="movie in searchInput" :key="movie.title">
      <div class="img-container"> 
        <!-- main image -->
        <img :src="movie.thumbnail.regular.medium" class="img" />

        <!-- Bookmarked signs -->
        <span class="bookmarked" v-if="movie.isBookmarked">
          <img src="@/assets/bookMarkFull.svg" />
        </span>
        <span class="bookmarked" v-if="!movie.isBookmarked">
          <img src="@/assets/bookMarkEmpty.svg" />
        </span>
        <div class="play-btn-background">
          <div class="play-btn-effect">
            <img src="@/assets/icon-play.svg" alt="" srcset="" /><span>Play</span>
          </div>
        </div>
      </div>
      <ul>
        <li>{{ movie.year }}</li>
        <li class="movie-cat">
          <img src="@/assets/icon-category-movie.svg" /> {{ movie.category }}
        </li>
        <li>{{ movie.rating }}</li>
      </ul>
      <p>{{ movie.title }}</p>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  data() {
      return{
        movies: [],
        search: ''
      }
    }, 
    mounted() {
      this.movies = this.$store.getters.getState
      console.log(this.movies);

      this.movies = this.movies.filter(src => src.category === 'Movie' )
      console.log(this.movies);   
   
    },
    computed: {
      searchInput() {
        let series = [...this.movies]
        return series.filter(src => src.title.toLowerCase().includes(this.search.toLowerCase()))
        // this.mvs = this.mvs.filter(srch => srch.title.includes('Un'))
        // return this.series
      }
    }
};
</script> 

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.mss{
  position: relative;
  padding: 20px 10px;
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
.moviesview {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  color: white;
}
.container {
  margin: 10px 0;
}
.img-container {
  position: relative;
}
.bookmarked {
  position: absolute;
  right: 15px;
  top: 10px;
  padding: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.507);
}
.img {
  border-radius: 15px;
}
.play-btn-background {
  position: absolute;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  opacity: 0;
}
.play-btn-background:hover {
  opacity: 1;
}
.play-btn-effect {
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 5px;
  background: rgba(240, 232, 232, 0.418);
  cursor: pointer;
}
.play-btn-effect span {
  padding: 0 5px;
}
ul {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  /* border:2px solid red; */
}
li {
  font-size: 14px;
  font-weight: 100;
  margin: 5px;
  margin-left: 0px;
}
li:first-child {
  list-style: none;
  margin-left: 0px;
}
li:last-child {
  margin-left: 20px;
}
.movie-cat {
  display: flex;
  align-items: center;
}
.movie-cat > img {
  background-color: rgb(8, 8, 8);
  margin: 0 7px;
  border-radius: 2px;
  width: 15px;
  height: 15px;
}
@media screen and (max-width: 1000px) {
  .moviesview {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4%;
    /* padding: 10px 20px; */
    color: white;
  }
}
@media screen and (max-width: 768px) {
  .moviesview {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4%;
    padding: none;
    color: white;
  }
}
</style>
