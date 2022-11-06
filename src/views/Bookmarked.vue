<template>
  <div class="cont">
    <div class="input">
      <label>
        <input v-model="search" type="search" placeholder="Search for bookmarked shows" />
      </label>
    </div>

    <h2>Bookmarked Movies</h2>
    <div class="seriesview">
      <div class="series" v-for="movie in searchInput" :key="movie.title" v-if="movie.category === 'Movie' ">
        <div class="hover">
            <img src="../assets/icon-play.svg" alt=""> <span>play</span>
        </div> 
        <div class="booked">
            <span v-if="movie.isBookmarked" class="book"><img src="../assets/bookMarkFull.svg" :alt="movie.title" /></span>
            <span v-if="!movie.isBookmarked" class="book"><img src="../assets/icon-bookmark-empty.svg" :alt="movie.title"/></span>
        </div>
        <div class="img">
          <img :src="movie.thumbnail.regular.small" :alt="movie.title">
        </div>
        <div class="msg"> 
          <p><span>{{movie.year}}</span><span v-if="movie.category === 'TV Series'" class="span"><img class="svg" src="../assets/icon-category-tv.svg" alt="" />{{movie.category}}</span> <span v-if="movie.category === 'Movie'" class="span"><img class="svg" src="../assets/icon-category-movie.svg" alt="" />{{movie.category}}</span> <span class="last">{{movie.rating}}</span></p>
          <p>{{movie.title}}</p>
        </div>
      </div>
    </div>

    <h2>Bookmarked TV Series</h2>
    <div class="seriesview">
      <div class="series" v-for="movie in searchInput" :key="movie.title" v-if="movie.category === 'TV Series'" >
        <div class="hover">
            <img src="../assets/icon-play.svg" alt=""> <span>play</span>
        </div> 
        <div class="booked">
            <span v-if="movie.isBookmarked" class="book"><img src="../assets/bookMarkFull.svg" :alt="movie.title" /></span>
            <span v-if="!movie.isBookmarked" class="book"><img src="../assets/icon-bookmark-empty.svg" :alt="movie.title"/></span>
        </div>
        <div class="img">
          <img :src="movie.thumbnail.regular.small" :alt="movie.title">
        </div>
        <div class="msg">
          <p><span>{{movie.year}}</span><span class="span"><img class="svg" src="../assets/icon-category-tv.svg" alt="" /> {{movie.category}}</span><span class="last">{{movie.rating}}</span></p>
          <p>{{movie.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  import Movies from '../datas/movies.js';
export default {

  data(){
    return{
      series: [],
      search: '',
    }
  },
  
    mounted() {
      this.series = this.series.filter(src => src.isBookmarked === true )
      console.log(this.series); 

      this.series = this.$store.getters.getStates
   
    },
    computed: {
      searchInput() {
        let series = [...this.series]
        return series = series.filter(src => src.title.toLowerCase().includes(this.search.toLowerCase()))
      }
    }
}
</script>

<style scoped>
.cont{
  position: relative;
  margin: 0;
  padding: 20px 10px;
  width: 100%;
  /* padding-top: 10px; */
  text-align: left;
}
.cont h2{
  margin: 20px 0;
  color: #fff;

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


.seriesview{
  position: relative;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr );
  color:#fff;
}
.series{ 
    position: relative;
    /* margin-bottom: 15px; */
    /* transition: .5s; */
  }
 
  .img{
    position: relative;
    width: 100%;
    height: 120px;
    border-radius: 12px;
    overflow: hidden;
    /* z-index: 1000; */
  }
  .img img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  } 
  .series:hover .img img{
    cursor: pointer;
    opacity: .4;
  }
   .hover{
    position: absolute;
    left: 50%;
    top: 36%;
    transform: translate(-50%, -50%);
    z-index: 1;
    padding: 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    display: flex;
    align-items: center;
    visibility: hidden;

  }
  .series:hover .hover{
    visibility: visible;
    cursor: pointer;
  }
  .hover img{
    margin-right: 10px;
  }
  .booked{
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.4);
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
  .msg{
    position: relative;
    text-align: left;
    padding-top: 10px;
  }
  .msg p:nth-child(2){
    color:#fff;
    font-size: 16px;
    margin-top: 2px;
    opacity: 1;
  }
  p{ 
    display: flex;
    align-items: center;
    color:#fff;
    font-size: 10px;
    opacity: .75;
    font-weight: lighter;
    margin: 0;
  }
  p span{
    position: relative;
    margin-right: 15px;
  }
  .span{
    display: flex;
    align-items: center;
  }
  .span img{
    margin-right: 10px;
  }
  p span:not(.last):before{
    position: absolute;
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #fff;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (min-width: 768px) {
    .seriesview{
      grid-template-columns: repeat(3,1fr);
    }
    .img{ 
      height: 180px; 
    }
    .booked{ 
      top: 20px;
      right: 20px;
    }
    p:nth-child(1){
      font-size: 12px;
    }
    .msg p:nth-child(2){
      font-size: 20px;
    }
  }
  @media screen and (min-width: 1000px) {
      .cont{
        padding: 20px 10px 20px 0;
      }
    .seriesview{
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>