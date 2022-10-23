<template>
  <div>
    <trending-component />
    <recomended-component />
  </div>
</template>

<script>
import recomendedComponent from './recomendedComponent.vue'
import TrendingComponent from './trendingComponent.vue'
export default {
  components: { 
    recomendedComponent,
    TrendingComponent 
    },

}
</script>

<style>

</style>