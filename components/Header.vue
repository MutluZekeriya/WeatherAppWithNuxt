<template>
    <nav class="navbar">
        <div class="navbar-logo">
            <nuxt-link to="/">
                Weather App
            </nuxt-link>
        </div>
        <ul class="menu">
            <li>
                <nuxt-link to="/"> Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about"> About</nuxt-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
}
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    color: white;
    padding: 24px 32px;
}

.menu {
    display: flex;
}

.menu li {
    margin-left: 24px;
}
</style>