<template>
    <div class="container">
        <table class="table-fixed">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Date</th>
                    <th>Main</th>
                    <th>Temp</th>
                    <th>Speed</th>
                    <th>Humidity</th>
                    <th>Symbol</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in weathers" :key="index">
                    <td> {{ item.body.name }} </td>
                    <td> {{ item.time }} </td>
                    <td> {{ item.body.weather[0].main }} </td>
                    <td> {{ (item.body.main.temp -272.15).toFixed(1)  }} </td>
                    <td> {{ item.body.wind.speed }} </td>
                    <td> {{ item.body.main.humidity }}</td>
                    <td>
                        <img class="card-img"
                            :src="`http://openweathermap.org/img/wn/${item.body.weather[0].icon}@2x.png`" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "ShowWeather",
    data() {
        return {
            weathers: this.$store.state.weatherData,
        }
    },
}
</script>
<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

td,
th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #f5f5f5;
}
</style>