import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);



export const state = () => ({
    weatherData: [],
})

export const mutations = {
    setWeatherData(state, payload) {
        state.weatherData.unshift(payload);
    }
}

export const getters = {
    getWeatherData(state) {
        state.weatherData;
    }
}


