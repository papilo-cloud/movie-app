<template>
   <div class="aside">
    <div class="sidebar">
        <div class="logo"><img src="../assets/logo.svg" alt="" id="logoimage" class="icon" ></div>
        <ul>
            <li class="menu" :class="{ active: isActive == 0}"
            @click="chaneActive(0)"><router-link to="/"><img src="../assets/icon-nav-home.svg" alt="" class="icon" ></router-link></li>
            <li class="icon3" :class="{ active: isActive == 1}"
            @click="chaneActive(1)"><router-link to="/moviesview"><img src="../assets/icon-nav-movies.svg" class="icon" alt="" ></router-link></li>
            <li class="icon4" :class="{ active: isActive == 2}"
            @click="chaneActive(2)"><router-link to="/seriesview"><img src="../assets/icon-nav-tv-series.svg"  alt="" class="icon" ></router-link></li>
            <li class="icon5" :class="{ active: isActive == 3}"
            @click="chaneActive(3)"><router-link to="/bookmarked"><img src="../assets/icon-nav-bookmark.svg" alt="" class="icon" ></router-link></li>
        </ul>    
      <div class="avatar"><img src="../assets/image-avatar.png" alt="" ></div>
    </div>
  </div> 
</template> 
  
<script>

export default {
 data() {
  return{
    isActive: [0],
  }
 },
 methods: {
  chaneActive(index) {
    this.isActive = index
  }
},
mounted() {
  window.addEventListener('load', () => {
    // alert('Hello')
  this.$router.push('/')

  })
}
}
</script>
 
<style scoped>

.aside{
  width: 100%;
  padding: 10px;
}
.sidebar{
  background: #161D2F;
  border-radius: 10px;
}
ul{
  position: relative;
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}
li{
  position: relative;
  margin: 0;
  padding: 0;
}
.icon{
  filter: invert(40%) sepia(37%) saturate(419%) hue-rotate(184deg) brightness(93%) contrast(89%);

}
.logo, .active{
  filter: invert(60%) sepia(90%) saturate(5299%) hue-rotate(335deg) brightness(105%) contrast(107%);
}
.icon:hover{
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
  
}
.avatar img{
  width: 34px;
}
@media screen and (min-width: 1000px) {
  .aside{
    height: 100vh;
    z-index: 100000;
    padding-top: 20px;
  }
  .sidebar{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    z-index: -1;
  background: #161D2F;
    height: 90vh;
    padding: 20px 10px 70px;
    align-items: center;
  }
  ul{
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 40px;
  }
  ul li{
    margin-top: 14px;
  }
  .avatar{
    /* height: 20%; */
    /* flex: 1; */
  }
}
@media screen and (max-width: 1000px) {
.sidebar{
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
ul{
  display: flex;
  justify-content: space-evenly;
  /* flex: 100px; */
  width: 49%;

}
 

.logo, .avatar{
  position: relative;
  /* flex: 1; */
}
.logo{
  /* flex-basis: 0%; */
  /* align-self: left; */
  /* right: 20px; */
}

.avatar{
  /* left: 20px; */
}

}
</style>
