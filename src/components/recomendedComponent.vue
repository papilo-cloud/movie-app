<template>
  <div class="cont">
    <h2>recomended</h2>
    <div class="seriesview">
    <div class="series" v-for="(movie) in movies" :key="movie.title">
      <div class="hover">
          <img src="../assets/icon-play.svg" alt=""> <span>play</span>
        </div> 
      <div class="booked">
          <button @click="isBookmarked(movie.title)">
            <span v-if="movie.isBookmarked" class="book"><img src="../assets/bookMarkFull.svg" :alt="movie.title" /></span>
            <span v-if="!movie.isBookmarked" class="book"><img src="../assets/icon-bookmark-empty.svg" :alt="movie.title"/></span>
          </button>
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
  </div>
</template>

<script>
export default {
    props: {
      movies: Array
    },

    methods: {
      isBookmarked(index){
        this.$store.dispatch('toggleBookmarked',index)
        console.log(index)
      },
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
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 17px;
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
  .booked button{
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
    padding: 1px 4px;
  }
  .msg{
    position: relative;
    text-align: left;
    padding-top: 10px;
  }
  .msg p:nth-child(2){
    color:#fff;
    font-size: 16px;
    margin: 0;
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
        padding: 20px 0;
        padding-right: 10px;
    }
    .seriesview{
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>