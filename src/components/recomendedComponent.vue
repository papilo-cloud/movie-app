<template>

  <div>
   
    <h2>Recommended for you</h2>
    <p></p> 
    <div class="container">
      <div class="row">
        <div class="col-4 d-flex" v-for="movie in movies">
          <div class="movie">
            <img class="movie-img-top" :src="movie.thumbnail.regular.large" alt="Card image cap">
            <div class="movie-body">
              <div class="details">
                <div class="year">
                  <p>{{movie.year}} <i class="fa fa-circle" id="circle"></i></p>
                </div>
                <div class="category">
                  <p v-bind="movie">{{movie.category}} <i class="fa-solid fa-film" id="movieIcon"></i><i class="fa fa-circle"
                      id="circle2"></i></p>


                </div> 
                <div class="rating">
                  {{movie.rating}}

                </div>

              </div>
              <h5 class="movie-title">{{movie.title}}</h5>

            </div>
          </div>

          <div id="images">
            <!-- <img :src="movie.thumbnail.regular.large" class="card-img-top" alt="product image"> -->
            {{film}}
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
//import json from "@/movies.json";

//import movies from '@/datas/movies';


export default {

  props: ['movies'],

  data() {
    return {

    }

  }
}
</script>


<style scoped>

h2{
  text-align: left;
  
  margin-top:1%;
color: whitesmoke;
}

img {
  margin-top: 12px;
  height: 200px;
  width: 400px;
  border-radius: 18px;

}

.details {
  display: flex;
  flex-direction: row;
  margin-top: 1%;
  color: #d3d3d398;
  text-align: left;
  margin-left: 0%;

}


.category {
  margin-left: 4%;
}
.rating{
  margin-left: 5%;
}
.movie-title {
  margin-top: -5%;
  margin-left: 0;
  text-align: left;
  font-weight: 400;
  color: aliceblue;
  padding-top: 2%;
}

/*#movieIcon{

}*/
#circle {
  font-size: 4px;
  margin-top: 10px;
  margin-left: 1%;
  position: absolute;
  color: #d3d3d398;
}
#circle2{
  font-size: 4px;
  margin-top: 10px; 
  position: absolute;
  color: #d3d3d398;
  margin-left: 2%;
}
</style> 

