<template>
  <div class="sidebar">
   <div id="sideb">
         <div id="logo"><img src="../assets/logo.svg" alt="" id="logoimage" class="icon" ></div>
         <div id="menu"><router-link to="/"><img src="../assets/icon-nav-home.svg" alt="" class="icon" ></router-link></div>
         <div id="icon3"><router-link to="/moviesview"><img src="../assets/icon-nav-movies.svg" class="icon" alt="" ></router-link></div>
         <div id="icon4"><router-link to="/seriesview"><img src="../assets/icon-nav-tv-series.svg"  alt="" class="icon" ></router-link></div>
         <div id="icon5"><router-link to="/bookmarked"><img src="../assets/icon-nav-bookmark.svg" alt="" class="icon" ></router-link></div>
     <div id="avatar"><img src="../assets/image-avatar.png" alt="" ></div>
   </div>
  </div>
</template>
 
<script>
export default {
 
}
</script>
 
<style scoped>
*{
  padding: 0;
  margin: 0;
}
.icon{
  filter: invert(40%) sepia(37%) saturate(419%) hue-rotate(184deg) brightness(93%) contrast(89%);
}
@media screen and (min-width: 0px) and (max-width: 1000px){
  #sideb{
  max-width: inherit; 
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--semiDarkBlue);
  --red: #FC4747;
  --darkBlue: #10141E;
  --grayishBlue: #5A698F;
  --semiDarkBlue: #161D2F;
  --white: #FFFFFF;
  display: flex;
  height: inherit;
  }
#logo{
  filter: invert(60%) sepia(90%) saturate(5299%) hue-rotate(335deg) brightness(105%) contrast(107%);
  margin: auto 30px 20px;
  margin-right: 120px;
  
}
#menu{
  filter: invert(60%) sepia(90%) saturate(5299%) hue-rotate(335deg) brightness(105%) contrast(107%);
  margin: auto 10px 20px ;
  width: 15px;
}
#icon3{
  margin: auto 10px 20px ;
  width: 15px;
}
#icon4{
  margin: auto 10px 20px ;
  width: 15px;
}
#icon5{
  margin:  auto 10px 20px ;
  width: 15px;
  margin-right: 120px;
}
img{
  width: 20px;
  display: block;
}
#spare{
  height: 15px;
  margin: auto 50px 0;
}
#avatar{
  margin:  auto 30px 20px;
}
#logoimage{
  width: 20px;
}
.sidebar{
  max-width: 500px;
  height: 50px;
  margin: auto;
}
}

/* By DeadEazy */

.icon:active{
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
}
@media screen and (min-width: 1000px) {
  .element {
  all: none;
}
  #logo{
  filter: invert(60%) sepia(90%) saturate(5299%) hue-rotate(335deg) brightness(105%) contrast(107%);
  margin: 10px auto 100px ;
  /* margin-bottom: 70px; */
}
#menu{
  filter: invert(60%) sepia(90%) saturate(5299%) hue-rotate(335deg) brightness(105%) contrast(107%);
  margin: 30px auto 0px ;
  /* margin-bottom: 70px; */
}
#icon3{
  margin: 30px auto 0px ;
}
#icon4{
  margin: 30px auto 0px ;
}
#icon5{
  margin: 30px auto 40px ;
}
img{
  width: 20px;
  display: block;
}
#spare{
  height: 15px;
  margin: 50px auto 10px;
}
#avatar{
  margin: 80px auto 20px;
}
#sideb{
  display: flex;
  flex-direction: column;
  /* height:100%; */
  /* margin-top: 20px; */
  /* border-radius: 15px; */
  background-color: var(--semiDarkBlue);
  /* float: left; */
  height: inherit;
  overflow: hidden;
  width: inherit;
  margin-top: 0;
  position: absolute;
  border-radius: inherit;
  
}

.sidebar{
  background-color: var(--white)
}
}
</style>
