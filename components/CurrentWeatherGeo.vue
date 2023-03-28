<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <button class="bttn" @click="currentValue()"> Get GeoLocation Weather</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CurrentWeatherGeo',
  data() {
    return {
      city: "",
    }
  },
  methods: {
    currentValue() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let posi = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
          let vm = this;
          axios.get(process.env.apiUrl + "lat=" + posi.lat + "&lon=" + posi.lon + "&appid=" + process.env.apiKey)
            .then(function (response) {
              let time = new Date();
              console.log(response.data);
              const value = {
                time,
                body: response.data
              }
              vm.$store.commit("setWeatherData", value);
            }).catch(function (error) {
              console.error(error)
            });
        });
      }
    },   
  },
}
</script>
<style scoped>
.bttn {
  background-color: #00DC82;
  color: #fff;
  padding: 8px 16px;
  box-sizing: border-box;
}
</style>