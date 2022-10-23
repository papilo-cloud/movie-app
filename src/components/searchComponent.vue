<template>

  <div class="input">
    <label>
      <input type="search" placeholder="Search for movies or TV series here" />
    </label>
</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

  .input{
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0 12px;
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
    display: flex;
    align-items: center;
  }


*{
  --red: #FC4747;
  --darkBlue: #10141E;
  --grayishBlue: #5A698F;
  --semiDarkBlue: #161D2F;
  --white: #FFFFFF;
}

@media screen and (min-width: 1000px){


}

</style> 

