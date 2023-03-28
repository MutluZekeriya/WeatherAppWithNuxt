<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <div class="data">
      <button class="bttn" @click="currentValue()"> Get Weather</button>
      <select class="city-select" name="city" v-model="city">
        <option value="">Seçiniz</option>
        <option :value="city" v-for="city in cities" :key="city">{{ city }}</option>
      </select>
      <transition name="fade">
        <span class="warning" v-if="selectedCity">
          Lütfen bir şehir seçiniz!!
        </span>
      </transition>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CurrentWeather',
  data() {
    return {
      city: "",
      selectedCity: false,
      cities: ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
        "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale",
        "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum ", "Eskişehir",
        "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir",
        "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya ", "Malatya",
        "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya",
        "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon  ", "Tunceli", "Şanlıurfa", "Uşak",
        "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt ", "Karaman", "Kırıkkale", "Batman", "Şırnak",
        "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük ", "Kilis", "Osmaniye ", "Düzce"],
    }
  },
  methods: {
    currentValue() {
      let vm = this;
      if (this.city != "") {
        axios.get(process.env.apiUrl + "q=" + this.city + "&appid=" + process.env.apiKey)
          .then(function (response) {

            let time = new Date();
            const value = {
              time,
              body: response.data
            }
            vm.$store.commit("setWeatherData", value);
          }).catch(function (error) {
            console.error(error);
          });
      } else {
        this.selectedCity = true;
        setTimeout(() => {
          this.selectedCity = false;
        }, 2000);
      }

    },
  },
}
</script>
<style scoped>
.city-select {
  border: 1px solid #dddddd;
  padding: 8px 16px;
  margin-left: -5px;
  width: 160px;
}

.bttn {
  background-color: #00DC82;
  color: #fff;
  padding: 8px 16px;
  box-sizing: border-box;
}

.warning {
  color: red;
}


/* 
**Transition 
*/
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.6s ease-out;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 0;
}


</style>