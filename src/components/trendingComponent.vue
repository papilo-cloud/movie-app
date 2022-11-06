<template>
  <div class="trending" ref="reff" 
  >
    <h3>Trendings</h3>
    <div class="trending-img">
      <div v-for="(img, x) in trendings" class="divv" :key="x">
        <div class="hover">
          <img src="../assets/icon-play.svg" alt=""> <span>play</span>
        </div>
        <div class="booked">
          <span v-if="img.isBookmarked" class="book"><img src="../assets/bookMarkFull.svg" :alt="img.title" /></span>
          <span v-if="!img.isBookmarked" class="book"><img src="../assets/icon-bookmark-empty.svg" :alt="img.title"/></span>
      </div>
        <div class="imgs">
          <img :src="img.thumbnail.trending.large" :alt="img.category">
        </div> 
        <div class="msg">
          <p><span>{{img.year}}</span><span v-if="img.category === 'TV Series'" class="span"><img class="svg" src="../assets/icon-category-tv.svg" alt="" />{{img.category}}</span> <span v-if="img.category === 'Movie'" class="span"><img class="svg" src="../assets/icon-category-movie.svg" alt="" />{{img.category}}</span> <span class="last">{{img.rating}}</span></p>
          <p>{{img.title}}</p>
        </div>
      </div>
    </div>
  </div> 
</template> 

<script>

    let pressed = false
		let start;
    let slider;
    let trending;  
		
export default {
 
  data(){
    return{
      trendings: []
    }
  }, mounted() {
      this.trendings = this.$store.getters.getState
      console.log(this.movies);
    
      this.trendings = this.trendings.filter(src => src.thumbnail.trending !== undefined)    
    },

  //   methods:{
  //    mouseDown(e) {
	// 	  slider = this.$refs.refs
  //     // alert('Hello World')
  //     pressed = true;
	// 		start = e.offsetX - slider.offsetLeft;
  //   },
  //   mouseUp(){
  //     pressed = false
  //   },
  //   mouseMove(e){
	// 	slider = this.$refs.refs
  //     if(!pressed) return 
	// 		e.preventDefault()
	// 		slider.style.left = `${e.offsetX - start}px`
	// 		this.checkBoundary() 
  //   },
  //    checkBoundary(){
  //     trending = this.$refs.reff        
	// 	slider = this.$refs.refs
	// 		let outer = trending.getBoundingClientRect()
	// 		let inner = slider.getBoundingClientRect()
  //     // console.log(inner);

	// 		if (parseInt(slider.style.left) > 0) {
	// 			slider.style.left = '0px'
	// 		}
	// 		if (inner.right < outer.right) {
	// 			slider.style.left = `-${inner.width - outer.width}px`
	// 		}
	// 	}
  // },
}

</script>

<style scoped> 
::-webkit-scrollbar{
  display: none;
}
.trending{
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  padding: 0;
  padding-left: 10px;
  /* margin-left:10px;  */
  overflow: hidden;
  text-align: left;
}
.trending h3{
  color:#fff;
  z-index: 10000;
  margin: 0;
  padding: 0;
  letter-spacing: 1px;
}
.trending-img{
  max-width: 100%;
  display: flex;
  align-items: center;
  padding-left: 12px;
  overflow-x: scroll;
}
  .divv {
    position: relative;
    min-width: 70%;
    height: 170px;
    margin-right: 10px;
    border-radius: 12px;
    overflow: hidden;
    /* z-index: 10000; */
    /* pointer-events: all; */
  }
   .imgs:hover img{
    /* cursor: pointer; */
    pointer-events: all;
    opacity: .4;
  }
   .hover{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000000000;
    padding: 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    display: flex;
    align-items: center;
    visibility: hidden;

  }
  .divv:hover .hover{
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
    position: absolute;
    z-index: 100000;
    text-align: left;
    padding-top: 10px;
    bottom: 10px;
    left: 10px;
  }
  .msg p:nth-child(2){
    color:#fff;
    font-size: 18px;
    margin: 0;
    opacity: 1;
  }
  p{
    display: flex;
    align-items: center;
    color:#fff;
    font-size: 13px;
    opacity: 1;
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
  .imgs{
    width: 100%;
    height: 100%;
  }
  .imgs img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    object-fit: fill;
  }
  @media screen and (min-width: 768px) {
    .divv{
      width: 70%;
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
    .trending{
      height: 250px;
    }
    .trending-img{
      /* pointer-events: none; */
    }
    .divv{
      height: 200px;
      width: 70%;
    }
  }
</style> 