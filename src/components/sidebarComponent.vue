<template>
   <div class="aside">
  <div class="sidebar">
        <div class="logo"><img src="../assets/logo.svg" alt="" id="logoimage" class="icon" ></div>
        <ul>
          <li class="menu"><router-link to="/"><img src="../assets/icon-nav-home.svg" alt="" class="icon" ></router-link></li>
          <li class="icon3"><router-link to="/moviesview"><img src="../assets/icon-nav-movies.svg" class="icon" alt="" ></router-link></li>
          <li class="icon4"><router-link to="/seriesview"><img src="../assets/icon-nav-tv-series.svg"  alt="" class="icon" ></router-link></li>
          <li class="icon5"><router-link to="/bookmarked"><img src="../assets/icon-nav-bookmark.svg" alt="" class="icon" ></router-link></li>
        </ul>    
     <div class="avatar"><img src="../assets/image-avatar.png" alt="" ></div>
   </div>
  </div>
</template>
 
<script>
export default {
 
}
</script>
 
<style scoped>


@media screen and (max-width: 1000px) {
.aside{
  width: 100%;
  padding: 10px 20px;
}
.sidebar{
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background: #161D2F;
  border-radius: 10px;
}
ul{
  position: relative;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  flex: 2;
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
#logo{
  
}

.logo, .avatar{
  position: relative;
  flex: 1;
}
.logo{
  filter: invert(60%) sepia(90%) saturate(5299%) hue-rotate(335deg) brightness(105%) contrast(107%);
  flex-basis: 0%;
  align-self: left;
  right: 20px;
}
.icon:hover{
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
  
}
.avatar{
  left: 20px;
}
.avatar img{
  left: 20px;
  width: 34px;
}
}
</style>
