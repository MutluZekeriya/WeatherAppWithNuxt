<template>
  <div>
    <div class="logo-field">
      <NuxtLogo></NuxtLogo>
    </div>
    <current-weather></current-weather>
    <current-weather-geo></current-weather-geo>
    <show-weather></show-weather>
  </div>
</template>

<script>
import CurrentWeather from '../components/CurrentWeather.vue';
import CurrentWeatherGeo from '../components/CurrentWeatherGeo.vue';
import NuxtLogo from '../components/NuxtLogo.vue';
import ShowWeather from '../components/ShowWeather.vue';
export default {
  components: { NuxtLogo, CurrentWeather, ShowWeather, CurrentWeatherGeo },
  name: 'IndexPage',
  data() {
    return {
      isData: false,
    }
  },

}
</script>
<style>
.container {
  width: 100%;
  padding: 16px;
  margin: 0 auto;
}

.logo-field {
  margin-top: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>